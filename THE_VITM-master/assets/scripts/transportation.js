import { check_bus_route } from "../../db/Transportation DB/check_bus_route.js";
import {start_loader_1,start_loader_2,close_loader} from "../../components/loader/loader.js";


function append_buses(res){
    document.getElementById("bus-result-container").style.display="block";
    location.href="#bus-result-container"
    document.getElementById("result-box").innerHTML='';
        res.map((ele)=>{
            let result_content=document.createElement("div");
            result_content.setAttribute("class","result-content");
            result_content.innerHTML=`<div class="icon">
                    <img src="/assets/icons/busIcon.png" alt="">
                </div>
                <div class="title">
                    <h2><b>Bus: </b> ${ele["Bus_number"]}</h2>
                </div>

                <div class="route-icon">
                    <img src="/assets/icons/wifiSignal.gif" alt="">
                </div>

                <div class="route-direction">
                    <p><b>From: </b>${ele["Bus_starts"]}</p>
                    <p><b>To: </b> ${ele["Bus_ends"]}</p>
                </div>
                

                <div class="proceed-btn">
                    <a href="/pages/liveMap.html?rw=${ele["Row_no"]}&busN=${ele["Bus_number"]}">Track</a>
                </div>`;

            result_content.addEventListener("click",()=>{
                location.href=`/pages/liveMap.html?rw=${ele["Row_no"]}&busN=${ele["Bus_number"]}`;
            })
            document.getElementById("result-box").append(result_content)
            

        })

    close_loader();
}   








var search_radios = document.querySelectorAll('input[type=radio][name="bus-type-radio-card"]');

search_radios.forEach((radio )=> radio.addEventListener('change',async () => {
    if(radio.value=="Route"){
        start_loader_1();

        // console.log(radio.value)
        let res= await check_bus_route("SELECT DISTINCT Rout_number,Bus_starts,Bus_ends FROM ? WHERE Rout_number!=''")
        //  console.log(res);
        
        document.getElementById("bus-result-container").style.display="block";
        location.href="#bus-result-container";
        document.getElementById("result-box").innerHTML='';
        res.map((ele)=>{
            let result_content=document.createElement("div");
            result_content.setAttribute("class","result-content");
            result_content.innerHTML=`<div class="icon">
                        <img src="/assets/icons/routIcon.png" alt="">
                        

                    </div>
                    <div class="title">
                        <h2><b>Route: </b> ${ele["Rout_number"]}</h2>
                    </div>

                    <div class="route-icon">
                        <img src="/assets/icons/towerSignal.gif" alt="">

                    </div>

                    <div class="route-direction">
                        <p><b>From: </b>${ele["Bus_starts"]}</p>
                        <p><b>To: </b> ${ele["Bus_ends"]}</p>
                    </div>
                   

                    <div class="proceed-btn">
                        <a href="">Proceed</a>
                    </div>`;

            result_content.addEventListener("click",async (e)=>{
                e.preventDefault();
                start_loader_1();
                let bus_res= await check_bus_route(`SELECT * FROM ? WHERE Rout_number="${ele["Rout_number"]}"`);
                append_buses(bus_res);
            })
            document.getElementById("result-box").append(result_content)
        })
        close_loader();

        
    }
    if(radio.value=="Bus"){
        // console.log(radio.value)
        start_loader_1();
        let res= await check_bus_route("SELECT * FROM ? WHERE Rout_number!=''")
        // console.log(res);
        append_buses(res);
    }

}));



