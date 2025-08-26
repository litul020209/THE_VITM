// -------------------Importing announcement list-----------------------------------

import { announcement_list } from "../../components/Local JSON/announcement_list.js";
import { open_popup } from "../../components/Functions/common_function.js";

function getYMD(date){
    let formattedDate;
    if (typeof date=="string" &&  date.split('-')[0].length){
       formattedDate=new Date(date.split("-").reverse().join("-"));
    }
    else{
        formattedDate = new Date(date.toISOString().split('T')[0]);
    }

    return formattedDate;
}




//---------------------- appending announcement list ---------------------------------------------
function append_annoncement_list(data){


    data.sort((d1,d2)=>{
        return getYMD(d2.notice_release_date) - getYMD(d1.notice_release_date);
    })


    document.querySelector("#announcement-content-main>section").innerHTML=null;
    data.map((ele)=>{
        let announcement_box_main=document.createElement("div");
        announcement_box_main.setAttribute("class","announcement-content-box-main");
        announcement_box_main.innerHTML=`<a href="" class="announcement-notice-title"><li><i class="fa-regular fa-clipboard"></i> &nbsp; ${ele.notice_title}</li></a>
                            <p><span>Released on: </span>${ele.notice_release_date}</p>`;


        announcement_box_main.querySelector(".announcement-content-box-main .announcement-notice-title ").addEventListener("click",(e)=>{
            e.preventDefault();
            let popup_html=`<div>
                        <div id="btn-sec">
                            <a href="https://docs.google.com/document/d/${ele.notice_file_id}/export?format=pdf" target="_blank" id="admission-popup-download-btn"><i class="fa-solid fa-print"></i>  Notice</a>
                        </div>

                        <div id="notice-bullet-details">
                            <li><b>Release Date: </b> ${ele.notice_release_date}</li>
                            <li><b>Released By: </b> ${ele.notice_release_by}</li>
                            <li><b>Notice ID: </b> ${ele.notice_id}</li>
                        </div>
    
                        <div id="embed-sec">
                            <iframe src="https://docs.google.com/document/d/e/${ele.notice_file_embed_id}/pub?embedded=true"></iframe>
                        </div>
                    </div>`;
            
            let dom= new DOMParser().parseFromString(popup_html,'text/html')
            let popup_data=dom.body.firstChild;
            open_popup(popup_data);
        })
        document.querySelector("#announcement-content-main>section").append(announcement_box_main);
    })
}
append_annoncement_list(announcement_list);

