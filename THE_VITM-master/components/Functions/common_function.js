
import { content_popup } from "../popup/content_popup.js";

// ---------------------Popup function section-----------------------


function close_popup(){
    let popup_window=document.querySelector("#popup-primary-common");
    popup_window.style.display="none";
    document.querySelector("body").style.overflowY="auto";

}



function open_popup(data){

    document.querySelector("body").style.overflowY="hidden";
    document.querySelector("#popup-commom-sec").innerHTML=null;
    document.querySelector("#popup-commom-sec").innerHTML=content_popup();
    let popup_window=document.querySelector("#popup-primary-common");
    let popup_window_content=document.querySelector("#popup-primary-container #popup-content-container ");
    popup_window.style.visibility="visible";
    // popup_window.style.transform='scale(1)';

    popup_window_content.innerHTML=null;
    popup_window_content.append(data)


    document.querySelector("#popup-primary-container #popup-close-btn i").addEventListener("click",()=>{
        close_popup();
     })

}


export{open_popup}
// -----------------------------------------------------------
// let data1=document.createElement("div");
// data1.innerHTML='<h1> appended </h1>'
// open_popup(data1);