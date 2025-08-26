import { student_alumni_list } from "../../components/Local JSON/student_alumni_list.js";

function append_student_alumni_list(data){

    document.querySelector("#student-achievement-content-alumni").innerHTML=null;
    data.map((ele)=>{
        let alumni_box=document.createElement("div");
        alumni_box.setAttribute("class", "achievement-box-alumni");

        alumni_box.innerHTML=`<div class="student-img-box-alumni">
                    <img src="https://lh3.googleusercontent.com/d/${ele.student_img_id}?authuser=0" alt="">
                </div>

                <div class="greeting-message-alumni">
                    <p>Congragulations</p>
                </div>

                <di class="student-details-alumni">
                    <p class="Students-name">${ele.student_alumni_name}</p>
                    <p class="Students-batch">${ele.student_alumni_batch}<span> Batch</span></p>
                    <p class="Students-branch">${ele.student_alumni_course} (${ele.student_alumni_branch})</p>
                    <p class="Students-placed-company">${ele.student_alumni_company_name}</p>
                    <p class="Students-feedback"><strong>" </strong> ${ele.student_alumni_feedback} <strong> "</strong></p>
                </di>`

        document.querySelector("#student-achievement-content-alumni").append(alumni_box);
    })
}

append_student_alumni_list(student_alumni_list);