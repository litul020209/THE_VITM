import { staff_faculty_list } from "../../components/Local JSON/staff_faculty_list.js";

document.querySelector(".grid-container").innerHTML=null;

staff_faculty_list.map((ele)=>{
    
    let member_card=document.createElement("div");
    member_card.setAttribute("class","member-card");

    member_card.innerHTML=`<img src="https://lh3.googleusercontent.com/d/${ele.image}?authuser=0" alt="Member Image 1">
        <div class="member-name">${ele.name}</div>
        <div class="member-designation">${ele.designation}</div>
        <div class="button-container">
          <a href="tel:+91${ele.phone}" class="button phone"><i class="fa-solid fa-phone-volume"></i> Telephone</a>
          <a href="mailto:${ele.email}" class="button email"><i class="fa-regular fa-envelope"></i> Email</a>
        </div>`;

    document.querySelector(".grid-container").append(member_card);
})