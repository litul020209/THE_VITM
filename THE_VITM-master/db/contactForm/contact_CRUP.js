
let API_contact= "https://script.google.com/macros/s/AKfycbxFGrXAlmnG-zHg9ZwnoYeVN-xR3Ez5mtbzWAagjLilO1aIIp5dg2V1PiJZ1xoRX-vL/exec"

async function submitContactForm(post_data){

    try{
        let res=await fetch(API_contact+"?create=true",{
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


export {submitContactForm};