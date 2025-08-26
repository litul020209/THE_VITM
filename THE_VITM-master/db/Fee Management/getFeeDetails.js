let API="https://script.google.com/macros/s/AKfycbxKoBvuZOmj26SJ9Ru40og3_OUiw13Btml23_jclNsjriE0JtifWSIa5X356gbxpL1W/exec"
async function getFeeDetails(query){

    return new Promise(async (resolve, reject) =>{
        try{
            let res=await fetch(API+"?getFeeTable=true&q="+query)
            let data=await res.json()

            resolve(data)
            
        }
        catch(err){
            console.log(err,"error from serer.");
            alert("Error from Server");
            
            
        }
    })


}



export {getFeeDetails};