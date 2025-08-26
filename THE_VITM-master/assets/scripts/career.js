import { career_opportunity_list } from "../../components/Local JSON/career_opportunity_list.js";  



// ----------------get date formate in yyyy-mm-dd--------------------------------
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




// ----------------------Appending data in career opportunity section


let append_career_opportunity_list=(received_data,aplication_status)=>{

    document.querySelector("#career-opportunity-list > .opportunity-list") .innerHTML=null;

    let data= received_data.filter((ele)=>{
        let startdate=getYMD(ele.job_application_start).getTime();
        let enddate=getYMD(ele.job_application_ends).getTime();
        
        let today = new Date();
        let today_date= getYMD(today).getTime();

        if (aplication_status=="opened"){
            return today_date >= startdate && today <=enddate;
        }
        else if(aplication_status=="closed"){
            return !(today_date >= startdate && today <=enddate) ;
        }
    })

    data.sort((d1,d2)=>{
        return getYMD(d2.job_released_date) - getYMD(d1.job_released_date);
    })

    data.map((ele)=>{
        let recruitment_box=document.createElement("div");
        recruitment_box.setAttribute("class","recruitment-box");

        if(aplication_status=="opened"){
             recruitment_box.innerHTML=`<div class="recruitment-details">
                            <div class="recruitment-role">
                                <p>${ele.job_roll}</p>
                            </div>
                            <div class="recruitment-location">
                                <p><b>Location: </b> ${ele.job_location}</p>
                            </div>
                            <div class="recruitment-advertisement-number">
                                <p><b>Advertisement No.: </b> ${ele.job_adv_no}</p>
                            </div>
                            <div class="recruitment-prospectus-file">
                                <a href="https://docs.google.com/document/d/${ele.job_prospectus_file_id}/export?format=pdf"><span><i class="fa-regular fa-file-pdf"></i></span>Prospectus</a>
                            </div>
                            <div class="recruitment-application-date">
                                <p><b>Application Started: </b> ${ele.job_application_start}</p>
                                <p><b>Application Closing: </b> ${ele.job_application_ends}</p>
                            </div>

                            <div class="recruitment-description">
                                <p>${ele.job_short_description}</p>
                            </div>
                        </div> 
                        <div class="recruitment-apply-btn">
                            <a href="../../Career/application.html?role=${ele.job_roll}">Apply Now</a>
                        </div>`
        }
        else if(aplication_status=="closed"){
            recruitment_box.style.filter='grayscale()';
            recruitment_box.style.opacity='0.8';

            recruitment_box.innerHTML=`<div class="recruitment-details">
                            <div class="recruitment-role">
                                <p>${ele.job_roll}</p>
                            </div>
                            <div class="recruitment-location">
                                <p><b>Location: </b> ${ele.job_location}</p>
                            </div>
                            <div class="recruitment-advertisement-number">
                                <p><b>Advertisement No.: </b> ${ele.job_adv_no}</p>
                            </div>
                            <div class="recruitment-prospectus-file">
                                <a href="https://drive.google.com/uc?export=download&id=${ele.job_prospectus_file_id}"><span><i class="fa-regular fa-file-pdf"></i></span>Prospectus</a>
                            </div>
                            <div class="recruitment-application-date">
                                <p><b>Application Started: </b> ${ele.job_application_start}</p>
                                <p><b>Application Closing: </b> ${ele.job_application_ends}</p>
                            </div>

                            <div class="recruitment-description">
                                <p>${ele.job_short_description}</p>
                            </div>
                        </div> 
                        <div class="recruitment-apply-btn">

                        </div>`
        }

        

        document.querySelector("#career-opportunity-list > .opportunity-list") .append(recruitment_box);

    })



}

append_career_opportunity_list(career_opportunity_list,"opened");





// ---------------Call career opportunity buttons-------------------
let career_sec_btn=document.querySelectorAll("#career-opportunity-btn .career-opportunity-dropdown");

career_sec_btn.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        document.querySelector("#career-opportunity-btn .active").classList.remove("active");
        e.target.classList.add("active");

        if( e.target.id=="career-current-opportunity"){
            append_career_opportunity_list(career_opportunity_list,"opened");

        }
        else if(e.target.id=="career-cloed-application"){
            append_career_opportunity_list(career_opportunity_list,"closed");
  
        }
    })
})




