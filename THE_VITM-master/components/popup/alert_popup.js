function alert_popup(status,message){
    if (status=="success"){
        let html_alert=`<div class="alert" style="background-color: green;">
            <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
            <strong><i class="fa-solid fa-check"></i> &nbsp;</strong> ${message}
          </div>`;

        
        document.querySelector("header").innerHTML=html_alert;
    }
    else if(status=="danger"){
        let html_alert=`<div class="alert" style="background-color: red;">
            <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
            <strong>Alert!</strong> ${message}
          </div>`;

        
        document.querySelector("header").innerHTML=html_alert;
    }
}

export{alert_popup};

