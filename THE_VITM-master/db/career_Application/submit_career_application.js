
let career_API = "https://script.google.com/macros/s/AKfycbyj-GMA_e6oSBiqES8OawxpbvZF0MJOlRANWZT-xrp0RvQsa7c9dj-5TcgC6-ZbwoJ-/exec"

async function submit_career_application(post_data){
    try{
        let res=await fetch(career_API+"?create=true",{
            method:"POST",
            body:JSON.stringify(post_data)
  
        })
        return true;
        
      
    }
    catch(err){
        console.log(err,"error from serer.");
        return false;
        
    }

    return false;
}

export {submit_career_application};