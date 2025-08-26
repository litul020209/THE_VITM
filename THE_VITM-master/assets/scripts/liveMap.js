import { getRouteDetails } from "../../db/Transportation DB/getRouteDetails.js";
import { getLivelocation } from "../../db/Transportation DB/getLiveLocation.js";
import {start_loader_1,start_loader_2,close_loader} from "../../components/loader/loader.js"

    // let busN="B01";
    // let rw="2";



const urlParams = new URLSearchParams(window.location.search);
let busN = urlParams.get('busN');
let rw = urlParams.get('rw');

if(rw=='' || rw==null || busN=='' || busN==null){
    alert("Invalid URL");
    location.href="/pages/transportation.html";
}
    


    start_loader_1();

    async function getRoute(busN){
        let res= await getRouteDetails(busN);
        // console.log(res)
        // console.log(res[1]["Latitude"]);
        
        embedRout(res);
        updateBus(res);
        updateLocation();

    }

    getRoute(busN);


    let map = L.map('map',{center:[19.245839,84.765546],zoom:5});

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        var busStopIcon = L.icon({
            iconUrl: '/assets/icons/busStop.png',
            iconSize: [50, 75],
            iconAnchor: [30,60],
            // popupAnchor: [-3, -76],
            // shadowUrl: 'https://cdn-icons-png.flaticon.com/512/9249/9249336.png',
            // shadowSize: [68, 95],
            shadowAnchor: [25, 25]
        });

        var myBusIcon = L.icon({
            iconUrl: 'https://cdn2.iconfinder.com/data/icons/map-locations-colored-outlined-pixel-perfect/64/pin-map-location-06-1024.png',
            iconSize: [50, 75],
            iconAnchor: [30,60],
            // popupAnchor: [-3, -76],
            // shadowUrl: 'https://cdn-icons-png.flaticon.com/512/9249/9249336.png',
            // shadowSize: [68, 95],
            shadowAnchor: [25, 25]
        });

    let marker=L.marker([19.245839,84.765546]).addTo(map).bindPopup("Bus Current position");
    ;










    function embedRout(res){
        

        let points=[];
        res.map(pos=>{
            let x=L.latLng(pos["Latitude"], pos["Longitude"]);
            points.push(x);
        }) 

        let myRoute=L.Routing.control({
            waypoints: points,
                
            lineOptions: {
                styles: [{color: 'Green', opacity: 1, weight: 10}]
            },
    
            
            createMarker: function (i, start, n){ 
                //for (i = 0; waypoint.length; i++){
                return L.marker (start.latLng, {
                        draggable: false,
                        icon: busStopIcon,
                        iconSize: [25, 25],
                       routeWhileDragging: true,
                }).bindPopup(res[i]["Stopage_Name"]+","+res[i]["Note"]);
            }   
                        
        }).addTo(map);

        myRoute.hide();

        // updateLocation();


    }  










    function setmarker(lat,long){
    
        map.flyTo([lat,long],17);
        
        let newLatLng = new L.LatLng(lat, long);
        
        // L.circle([lat,long], {radius: 30}).addTo(map);  

        marker.setLatLng(newLatLng);
        updateLocation();   
    
    }








    function AllignStopages(res,startTime){
        document.querySelector(".rb-container .rb").innerHTML='';
        // console.log(res)
        res.map(pos=>{
            let StoageLI=document.createElement("li");
            StoageLI.setAttribute("class","rb-item");
            StoageLI.setAttribute("ng-repeat","itembx");

            let time=new Date(startTime);
            // console.log(time)
            time.setMinutes(time.getMinutes()+ pos.TimeTaking);
            // console.log(pos.TimeTaking)
            // console.log(time)

            StoageLI.innerHTML=`<div class="item-title">${pos.Stopage_Name}</div>
                <div class="timestamp">
                   ${time.toLocaleTimeString()}
                </div>`

            document.querySelector(".rb-container .rb").append(StoageLI);

            
        })
    }





    async function updateBus(RouteRes) {
        let res= await getLivelocation(rw);

        if(res[0]["Bus_Departures"]!=''){
            document.querySelector(".bus-live-details").innerHTML='';

            let details_div=document.createElement("div");
            details_div.setAttribute("class","details");
            details_div.innerHTML=`<p><b>Bus Started at</b> <span id="Bus_Start_time">${new Date(res[0]["Bus_Departures"]).toLocaleTimeString()}</span></p>
          <p ><b>Signal Status:</b> <span id="signal-status">${res[0]["IsLive"]}</span> </p>
          <a href="tel:${res[0]["Bus_Condctor_Mobile"]}"><i class="fa-solid fa-phone"></i>  Connect to Conductor</a>`

            document.querySelector(".bus-live-details").append(details_div);

            AllignStopages(RouteRes,res[0]["Bus_Departures"]);

            close_loader();
        }
        else if(res[0]["Bus_Reached"]!=''){
            let time =new Date(res[0]["Bus_Reached"]);
            if(time < new Date()){
                alert(`Bus already Reached college at ${new Date(res[0]["Bus_Reached"]).toLocaleTimeString()}`)
            }
            AllignStopages(RouteRes,"Apr 14 2025 0:00:00 MT+0530");
        }
        else{
            alert("Bus not yet Started.")
            close_loader();
            AllignStopages(RouteRes,"Apr 14 2025 0:00:00 MT+0530");
        }


    }





    async function updateLocation(){
        let res= await getLivelocation(rw);
        // console.log(res);
        close_loader();

        let lat=res[0]["Bus_Live_Latitude"];
        let lng=res[0]["Bus_Live_Longitude"]


        if(res[0]["IsLive"]){
            setmarker(lat,lng);
            map.addLayer(marker);
            document.querySelector(".bus-live-details .details #signal-status").innerText="- Live"
            

        }
        else{
            document.querySelector(".bus-live-details .details #signal-status").innerText="offline"
            map.removeLayer(marker);
            updateLocation();
        }
        



    }


 
    
    // L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.{ext}', {
    //     attribution: '&copy; CNES, Distribution Airbus DS, © Airbus DS, © PlanetObserver (Contains Copernicus Data) | &copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    //     ext: 'jpg'
    // }).addTo(map);

    // L.tileLayer('https://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png', {
    //     // maxZoom: 18,
    //     attribution: 'Map <a href="https://memomaps.de/">memomaps.de</a> <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    // }).addTo(map);


    // L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    //     attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    // }).addTo(map);

    // L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
        
    //     attribution: '&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    // }).addTo(map);

    // L.tileLayer('https://tile.openstreetmap.de/{z}/{x}/{y}.png', {
    //     maxZoom: 18,
    //     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    // }).addTo(map);





    // --------------------------------------------------bus live Icon-------------------------
  


    // --------------------------------------------------bus stopage point icon----------------------
   
    


//    ----------------------------------------------------------Assigning routing service------------------------------
    

    

   

// function getlocation() {
//     // console.log(navigator.geolocation);
//     navigator.geolocation.getCurrentPosition(getposition);
//     // if (navigator.getlocation) {

//     // }
// }
 
// getlocation();

// let  long,lat;
// function getposition(pos) {
//     long=pos.coords.longitude;
//     lat=pos.coords.latitude;
//     console.log(pos.coords);
//     setmarker();
//     // showonmap(lat,long);
//     // document.getElementById("map").innerHTML = `<embed src="https://www.google.com/maps?q=${pos.coords.latitude},${pos.coords.longitude}&z=20&output=embed" type="" width="90%" height="550vh"> `
// }


// function getposition(pos){
//     let arr= [[	28.679079,77.069710],[19.076090,72.877426],[14.167040,75.040298]]

//     for(let i=0;i<arr.length; i++){
//        lat=arr[i][0];
//         long=arr[i][1];
//         console.log(arr[i]);
//             // console.log(pos.latlng);
//         setmarker();
       
//     }
// }




   









