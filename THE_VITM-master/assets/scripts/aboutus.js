
// ------------------------Course Details Section drop-down ANimation 

document.getElementById("about-view-course-details-btn").addEventListener("click",()=>{
    let course_details_sec=document.getElementById("course-details");
    if(course_details_sec.style.display=="none"){
        course_details_sec.style.display="block";
    }
    else{
        course_details_sec.style.display="none";
    }
})
