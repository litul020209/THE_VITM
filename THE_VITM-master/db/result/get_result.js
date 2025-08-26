
let API= "https://script.google.com/macros/s/AKfycbwECLel1HoGVxyYyUfUl83eHDXwLEssTGngXXz3dVdp114DwZg7XTubSUOcgOHuPU9BYA/exec"

async function get_results(query){

    return new Promise(async (resolve, reject) =>{
        try{
            let res=await fetch(API+query)
            let data=await res.json()

            resolve(data)
            
        }
        catch(err){
            console.log(err,"error from serer.");
            alert("Error from Server");
            
            
        }
    })


}



export {get_results};