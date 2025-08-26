let API="https://script.google.com/macros/s/AKfycbzryEe0KggIh-yaaTdPCDHGOpmA4-v0EMr5894qfAZzIVa_MrnsFpppZhvzF9XQI_9Ogg/exec"
async function check_bus_route(query){

    return new Promise(async (resolve, reject) =>{
        try{
            let res=await fetch(API+"?bus_rout_check=true&q="+query)
            let data=await res.json()

            resolve(data)
            
        }
        catch(err){
            console.log(err,"error from serer.");
            alert("Error from Server");
            
            
        }
    })


}



export {check_bus_route};