


let api= "https://script.google.com/macros/s/AKfycbwbFB9wBm_D2BRBAIPd4Dazar1qQly2tJuZhIhi2GYOM7k3omS0XhIvT8dNZ-l3wMEq7g/exec";

let sent_email_res;

async function sent_email_otp(email,name){
    try{
        let response = await fetch(api+`?sent=true&email=${email}&name=${name}`);
        let data = await response.json();
        sent_email_res=JSON.parse(JSON.stringify(data[0]));
        return sent_email_res; 
    }
    catch(err){
        console.log("Error From server side");
    }

}



async function verify_email_otp(email,token_number,otp){
    try{
        let response = await fetch(api+`?otpverify=true&email=${email}&token_number=${token_number}&otp=${otp}`);
        let data = await response.json();
        return data[0];
    }
    catch(err){
        console.log("Error From server side");
    }

}


export {sent_email_otp, verify_email_otp};