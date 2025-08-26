let API = "https://script.google.com/macros/s/AKfycbzryEe0KggIh-yaaTdPCDHGOpmA4-v0EMr5894qfAZzIVa_MrnsFpppZhvzF9XQI_9Ogg/exec"

async function getLivelocation(rw){

    return new Promise(async (resolve, reject) =>{
        try{
            let res=await fetch(API+`?getLiveLocation=true&rw=${rw}`);
            let data=await res.json()

            resolve(data)
            
        }
        catch(err){
            console.log(err,"error from serer.");
            // alert("Error Drom Servver");
            
            
        }
    })


}



export {getLivelocation};