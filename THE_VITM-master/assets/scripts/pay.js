import { verifyPayment } from "../../db/payments/verifyPayment.js";
import { start_loader_1,start_loader_2,close_loader } from "../../components/loader/loader.js";



const urlParams = new URLSearchParams(window.location.search);
let am = urlParams.get('am');
let srw = urlParams.get('srw');

if(srw=='' || srw==null || am=='' || am==null){

    location.href='/pages/Fees.html'
}
else{
    document.querySelector(".merchant-info .amount-field").innerText=am

    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('upi').classList.add('active');
    });
}

document.querySelector(".payment-container .sidebar .upi-tab").addEventListener("click",(event)=>{
    openTab(event,"upi");
});
document.querySelector(".payment-container .sidebar .verify-tab").addEventListener("click",(event)=>{
    openTab(event,"verify-payment")
});




function openTab(event,tabName) {
    const tabcontents = document.querySelectorAll('.tabcontent');
    const tablinks = document.querySelectorAll('.tablink');
  
    tabcontents.forEach(tab => tab.classList.remove('active'));
    tablinks.forEach(btn => btn.classList.remove('active'));
  
    document.getElementById(tabName).classList.add('active');
    event.currentTarget.classList.add('active');
}
  






// ----------------generating QR Code-------------------------------

document.getElementById("generateQR-btn").addEventListener("click",(e)=>{
    e.preventDefault();
    if(srw=='' || srw==null || am=='' || am==null){
        alert("Check your pending fee first !")
        location.href="/pages/Fees.html";
    }
    
    document.querySelector(".payment-container  #upi").innerHTML='';
    // Create the main div
    const scannerSec = document.createElement('div');
    scannerSec.id = 'Scanner-sec';

    // Create the image
    const scannerImg = document.createElement('img');
    scannerImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?cu=INR%26tn=Tution+Fee%26pa=paytmqrelju9apm0b%40paytm%26pn=THE+VITM%26am=${am}`;
    scannerImg.alt = 'Scanner Image';

    // Create the paragraph
    const scannerPara = document.createElement('p');
    scannerPara.textContent = '- After Successful payment click on Verify Payment Button and Ensure Transaction Id';

    // Create the button
    const verifyButton = document.createElement('button');
    verifyButton.className = 'paybtn';
    verifyButton.textContent = 'Verify Payment';

    verifyButton.addEventListener("click",(event)=>{
        openTab(event,"verify-payment")
    });

    scannerSec.append(scannerImg,scannerPara,verifyButton);

    document.querySelector(".payment-container  #upi").append(scannerSec)


})




// ----------------------Verifying payments------------------------

document.querySelector("#verify-payment .paybtn").addEventListener("click",async (e)=>{
    e.preventDefault();
    let TransID_input=document.querySelector("#verify-payment form input").value;

    if(TransID_input!=''){
        start_loader_1();
        let query=`?paymentVerify=true&srw=${srw}&tranID=${TransID_input}`
        let res= await verifyPayment(query);
        console.log(res)
        if(res){
            close_loader();
            alert("Payment Added Successfully.");
            location.href="/pages/Fees.html";
        }
        else{
            alert("Payment Details Not Found!");
            close_loader();
        }

    }
    else{
        close_loader();
        alert("Enter UPI Transaction Id first.")
    }
})

