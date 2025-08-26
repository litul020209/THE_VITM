
let API="https://script.google.com/macros/s/AKfycbzyWp49JLJp54zPuSIV7F2rgu7TImU-LYTR0lcgE4mJbSDwyO0k02jKOBGa7O4xdcD2mg/exec"

async function verifyPayment(query){

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



export {verifyPayment};