import {getFeeDetails} from "../../db/Fee Management/getFeeDetails.js"
import { start_loader_1,start_loader_2,close_loader } from "../../components/loader/loader.js";

document.querySelector("#fee-get-details-btn").addEventListener("click",async ()=>{
    let reg=document.querySelector("#student-search-cont #student-reg-input").value;
    // let roll=document.querySelector("#student-search-cont #student-roll-input").value;

    if(reg!=''){
        start_loader_2();
        let query=`SELECT * FROM ? WHERE Student_Reg="${reg}" `
        let res= await getFeeDetails(query);
        console.log(res);
        appendFeeDetails(res);
    }
    else{
        alert("Any one Field is mandetory !")
        close_loader();
    }

})


function appendFeeDetails(res){
    close_loader();
    document.querySelector(".fee-container").innerHTML=null;
    document.querySelector(".fee-container").style.filter="blur(0)";

    let student_details_sec=document.createElement("div");
    student_details_sec.setAttribute("class","student-details-sec");
    student_details_sec.innerHTML=`<div class="student-profile-pic">
        <img src="${res[0]["Student_img"]}" alt="Student Profile Photo">
      </div>

      <div class="section">
        <div>
          <div class="label">Name</div>
          <div class="value">${res[0]["Student_Name"]}</div>
        </div>
        <div>
          <div class="label">Reg. No.</div>
          <div class="value">${res[0]["Student_Reg"]}</div>
        </div>
        <div>
          <div class="label">Program</div>
          <div class="value">${res[0]["Course"]}</div>
        </div>
        <div>
          <div class="label">Branch</div>
          <div class="value">${res[0]["Branch"]}</div>
        </div>
        <div>
          <div class="label">Academic Year</div>
          <div class="value">${res[0]["Academic_Year"]}</div>
        </div>
        <div>
          <div class="label">Course Year</div>
          <div class="value">${res[0]["Course_Year"]}</div>
        </div>
      </div>`;


      let table_content_sec= document.createElement("div")
      table_content_sec.setAttribute("class","table-content-sec-right")
      table_content_sec.innerHTML=`<table>
        <thead>
          <tr>
            <th class="slno">Sl. No.</th>
            <th>Fees Category</th>
            <th>Description</th>
            <th class="amount">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="checkbox">1.</td>                   
            <td>Tution Fee</td>
            <td>Lectures and Teaching Service</td>
            <td class="amount">₹ ${res[0]["Tution_Fee"]}</td>
          </tr>
          <tr>
            <td class="checkbox">2.</td>
            <td>Hostel Fee</td>
            <td>Resident facility</td>
            <td class="amount">₹ ${res[0]["Hostel_Fee"]}</td>
          </tr>
          <tr>
            <td class="checkbox">3.</td>
            <td>Canteen Fee</td>
            <td>Daily Canteen Food</td>
            <td class="amount">₹ ${res[0]["Canteen_Fee"]}</td>
          </tr>
          <tr>
            <td class="checkbox">4.</td>
            <td>Transportation Fee</td>
            <td>Transportation from home to school by bus.</td>
            <td class="amount">₹ ${res[0]["Transportation_Fee"]}</td>
          </tr>
          <tr>
            <td class="checkbox">5.</td>
            <td>Other Fee.</td>
            <td>Other Fees incluing Liabrary or Penalty.</td>
            <td class="amount">₹ ${res[0]["Other_Fee"]}</td>
          </tr>
        </tbody>
  
  
        <thead>
          <tr class="total-th">
            <th colspan="3">Total Amount</th>
            <td class="total-amount">₹ ${res[0]["Total_Fee_Calculated"]}</td>
          </tr>
        </thead>
  
  
        <thead class="due-section">
          <tr class="due-details">
            <th colspan="1">Amount Paid</th>
            <td class="paid-amount">₹ ${res[0]["Total_Fee_Paid"]}</td>
            <th colspan="1">Amount Due</th>
            <td class="due-amount">₹ ${res[0]["Total_Fee_Due"]}</td>
          </tr>
        </thead>
      </table>
  
      <div id="generate-amount-container">
          <div class="enter-amount-sec">
              <label for="enter-amount-title">Enter amount to pay</label>
              <input type="number" placeholder="₹" >
          </div>
  
          <div class="generate-pay">
              <a href="#">Proceed to Pay</a>
          </div>
      </div>`;

      table_content_sec.querySelector(".generate-pay a").addEventListener("click",()=>{
        let amount_input=document.querySelector(".enter-amount-sec input").value;

        if(amount_input<=res[0]["Total_Fee_Due"] && amount_input!=0 && amount_input!=''){
           window.location.href=`/pay.html?am=${amount_input}&srw=${res[0]["Row_No"]}`
        }
        else{
          alert("Entered Amount can't be more than Due Amount.")
        }


       
      })
      
      document.querySelector(".fee-container").append(student_details_sec,table_content_sec);

}