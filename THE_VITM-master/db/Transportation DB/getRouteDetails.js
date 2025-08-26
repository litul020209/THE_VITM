let API = "https://script.google.com/macros/s/AKfycbzryEe0KggIh-yaaTdPCDHGOpmA4-v0EMr5894qfAZzIVa_MrnsFpppZhvzF9XQI_9Ogg/exec"
async function getRouteDetails(bs){

    return new Promise(async (resolve, reject) =>{
        try{
            let res=await fetch(API+`?getBus=true&bs=${bs}`);
            let data=await res.json()

            resolve(data)
            
        }
        catch(err){
            console.log(err,"error from serer.");
            // alert("Error from Server");
            
            
        }
    })


}



export {getRouteDetails};