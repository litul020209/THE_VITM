// -----------------------Import Section-------------------
import { announcement_list } from "../../components/Local JSON/announcement_list.js";
import { event_list } from "../../components/Local JSON/event_list.js";

// -------Fetching Date ---------------------

let cur_date= new Date();
let cur_year = cur_date.getFullYear();





// ------------this function returns Date in YYYY-MM-DD formate -----------------------------
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





window.onload=()=>{
    document.getElementById("footer-copyright-year").innerText=cur_year;

}




// ---------------------Appending announcement list in index page----------------

function append_annoncement_list(data){


    data.sort((d1,d2)=>{
        return getYMD(d2.notice_release_date) - getYMD(d1.notice_release_date);
    })

    data.splice(10);

    document.querySelector("#announcement-content>section").innerHTML=null;
    data.map((ele)=>{
        let announcement_box=document.createElement("div");
        announcement_box.setAttribute("class","announcement-content-box");
        announcement_box.innerHTML=`<a href=""><i class="fa-regular fa-clipboard"></i> &nbsp; ${ele.notice_title}</a>
                            <p><span>Released on: </span>${ele.notice_release_date}</p>`;

        document.querySelector("#announcement-content>section").append(announcement_box);
    })
}
append_annoncement_list(announcement_list);







// ---------------------Appending Latest notice list in index page----------------

function append_latest_notice_list(data){


    data.sort((d1,d2)=>{
        return getYMD(d2.notice_release_date) - getYMD(d1.notice_release_date);
    })

    data.splice(3);

    document.querySelector("#notification-box .box-content>section").innerHTML=null;
    data.map((ele)=>{
        let latest_notice_box=document.createElement("div");
        latest_notice_box.innerHTML=`<a href="">${ele.notice_title}</a>`;

        document.querySelector("#notification-box .box-content>section").append(latest_notice_box);
    })
}
append_latest_notice_list(announcement_list);



// -------------Event list--------------------

function append_event_list(data){
    data.sort((date1,date2)=>{
        return (getYMD(date1.event_date_from)-getYMD(date2.event_date_from))
    })

    data.splice(10);

    document.getElementById("event-content").innerHTML="";
    data.map((ele)=>{
        var date=new Date(getYMD(ele.event_date_from))
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
          ];

        let month=monthNames[date.getMonth()];

        let event_box=document.createElement("div");
        event_box.setAttribute("id","event");
        event_box.innerHTML=`<div class="event-date">
                            <p>
                                <section class="calender-icon"><i class="fa-solid fa-calendar-days"></i> &nbsp;</section>
                                <span class="event-Month">${month.substring(0,3)}</span>
                                <span class="event-day">${date.getDate()}</span>
                            </p>
                            <hr>
                            <p>
                                <span class="event-year">${date.getFullYear()}</span>
                            </p>
                        </div>

                        <div id="event-description">
                            <p>${ele.event_title}</p>
                        </div>`;

            
    document.getElementById("event-content").append(event_box);

        
    })
}

append_event_list(event_list);

