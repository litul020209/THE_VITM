// -----import section---------------------------------
import { start_loader_1,start_loader_2,close_loader } from "../../components/loader/loader.js";
import { sent_email_otp,verify_email_otp } from "../../components/Functions/email_otp.js";
import { alert_popup } from "../components/popup/alert_popup.js";





function display_off_education(){
    let qual_section=document.querySelectorAll(".row .qual-section");
    qual_section.forEach((ele)=>{
        ele.style.display="none";
    })

}

display_off_education();



// -------------display off email otp--------------------------
document.getElementById("email-otp-form-group").style.display="none";


let selected_highest_qual= document.getElementById("highest-qualification-selection");
selected_highest_qual.addEventListener("change",()=>{
    if(selected_highest_qual.value=="12th"){
        display_off_education();
        document.querySelector(".row #qual-10th").style.display="block";
        document.querySelector(".row #qual-12th").style.display="block";
    }
    else if(selected_highest_qual.value=="diploma"){
        display_off_education();
        document.querySelector(".row #qual-10th").style.display="block";
        document.querySelector(".row #qual-12th").style.display="block";
        document.querySelector(".row #qual-diploma").style.display="block";

    }
    else if(selected_highest_qual.value=="bachelor_degree"){
        display_off_education();
        document.querySelector(".row #qual-10th").style.display="block";
        document.querySelector(".row #qual-12th").style.display="block";
        document.querySelector(".row #qual-diploma").style.display="block";
        document.querySelector(".row #qual-bachelordegree").style.display="block";

    }
    else if(selected_highest_qual.value=="master_degree"){
        display_off_education();
        document.querySelector(".row #qual-10th").style.display="block";
        document.querySelector(".row #qual-12th").style.display="block";
        document.querySelector(".row #qual-diploma").style.display="block";
        document.querySelector(".row #qual-bachelordegree").style.display="block";
        document.querySelector(".row #qual-masterdegree").style.display="block";

    }
    else{
        display_off_education();
    }
})








// -------------------Email id verifivation----------------------------------
let email_varified=false;
let email_inserted="";
let token_generated="";

document.querySelector(".form-group #email-otp-send").addEventListener("click",(e)=>{
    e.preventDefault();
    start_loader_1();
    let email_input=document.querySelector(".form-group #email").value;
    let name_input=document.querySelector(".form-group #applicant_name").value;
    if(email_input!=""){
        let recieved_data=sent_email_otp(email_input,name_input);
        recieved_data.then((e) => {
            if(e.sent_status){
                close_loader();
                email_inserted=email_input;
                token_generated=e.token_number;
                // alert(e.message);
                alert_popup("success",e.message);
                document.querySelector("#email-otp-form-group").style.display="block"
                // document.querySelector("#email-otp-form-group").style.visibility="block;"
                document.querySelector(".form-group #email-otp-send").disabled='true';
                document.querySelector(".form-group #email-otp-send").textContent='Resend';
                document.querySelector(".form-group #email-otp-send").style.opacity="0.5";

            }
            else{
                // alert("issue occured from server side");
                alert_popup("danger","issue occured from server side");
                close_loader()
            }
        
        });
        
    }
    else{
        // alert('Enter Valid Email');
        alert_popup ("danger","Enter Valid Email");
        close_loader();
    }
       
});




   
document.querySelector(".form-group #email-otp-verify").addEventListener("click",(e)=>{
    start_loader_1();
    e.preventDefault();

    let email_otp_input=document.querySelector(".form-group #email-otp").value;
    
    if(email_otp_input!="" && email_otp_input.length==6){
        let recieved_data=verify_email_otp(email_inserted,token_generated,email_otp_input)
        recieved_data.then((e)=>{
            if(e.verify_status){
                close_loader();
                alert_popup("success","Email Verified Successfully")
                email_varified=true;
                document.querySelector("#email-otp-form-group").style.display="none"
                document.querySelector(".form-group #email-otp-send").disabled='true';
                document.querySelector(".form-group #email").disabled='true';
                document.querySelector(".form-group #email-otp-send").textContent='Verified';
                document.querySelector(".form-group #email-otp-send").style.opacity="1";
                document.querySelector(".form-group #email-otp-send").classList.remove("bg-danger");
                document.querySelector(".form-group #email-otp-send").classList.add("bg-success");
            }
            else{
                close_loader();
                // alert(e.message);
                alert_popup("danger",e.message);
                email_otp_input=null;
            }
        })
      
    }
    else{
        close_loader();
        // alert("Enter Valid OTP");
        alert_popup("danger", "Enter Valid OTP");
        email_otp_input=null;
    }


})

