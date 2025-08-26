
import { event_list } from "../../components/Local JSON/event_list.js";    


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




function append_event_list(recieved_data){
    recieved_data.sort((date1,date2)=>{
        return (getYMD(date1.event_date_from)-getYMD(date2.event_date_from))
    })

    document.getElementById("event_main").innerHTML=null;
    recieved_data.map((ele)=>{
        var date=new Date(getYMD(ele.event_date_from))
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
          ];
    

        let event_content=document.createElement("div");
        event_content.setAttribute("id","event_main_container");

        event_content.innerHTML=`<div class="event_main_content">
            <div class="event_date_box">

              <div>
                <p><i class="fa-regular fa-calendar-days"></i></p> 
                <p class="event_days">${days[date.getDay()]}</p>

              </div>
                <hr>
              <div>
                <p class="event_date">${date.getDate()}</p>
                <p class="event_month">${monthNames[date.getMonth()]}</p>
              </div>

                
            </div>
          
            <div class="event_info"> 
              <section>
                  <div class="event_duration">
                    <p><b style="color: red;">From: &nbsp;</b>${ele.event_date_from}</p>
                    <p><b style="color: red;">To: &nbsp; </b>${ele.event_date_to}</p>
                  </div>
                  <h4>${ele.event_title}</h4>
                  <a href="https://docs.google.com/document/d/${ele.event_file_id}/export?format=pdf">Event Details </a>
                  <p style="margin-top: 20px;">${ele.event_description}</p>
              </section>

          </div>
          <div class="event_image">
            <img src="https://lh3.googleusercontent.com/d/${ele.event_img_id}?authuser=0" alt="Event_pic">
            </div>
        </div>
        <hr class="horizontal_line">  `;


        document.getElementById("event_main").append(event_content);
    })

    

}

append_event_list(event_list);




// var slideIndex=1;
// showSlides(slideIndex);


// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }


// function plusSlides(n) {
//     showSlides(slideIndex = n);
// }

// function plusSlides(n) {
//    var i;
//    var slides=document.getElementsByClassName("my Slides")
// }








