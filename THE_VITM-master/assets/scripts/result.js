import { get_results} from "../../db/result/get_result.js";
import{start_loader_1,start_loader_2,close_loader} from "../../components/loader/loader.js";


let exam_type_selector=document.querySelector("#exam-type-select")
exam_type_selector.addEventListener("change",()=>{
    // console.log(exam_type_selector.value)
    if(exam_type_selector.value=="sem"){
        location.href="https://results.bput.ac.in"
    }
    else if(exam_type_selector.value=="mid-sem"){
       document.querySelector("#mid-sem-result-container #mid-sem-search-container").style.display="block"

    }
})


let result_find_btn=document.querySelector("#result-get-btn")
result_find_btn.addEventListener("click",Show_Result)

 async function Show_Result(){
    let academic_year=document.querySelector("#select-academic-year").value

    let select_semester =document.querySelector("#select-semester").value

    let select_mid_semester=document.querySelector("#select-mid-semester").value

    let reg_number =document.querySelector("#reg-number").value

    let roll_number =document.querySelector("#roll-number").value
    

    if ((reg_number!="" || roll_number!="") && academic_year!= "" && select_semester!="" && select_mid_semester!="" ){
        start_loader_2();
        let query=`?AY=${academic_year}&SEM=${select_semester}&MSEM=${select_mid_semester}&RN=${reg_number}&RL=${roll_number}`
        let response=await get_results(query)
        append_table(response)
        // console.log(response)
       
    }
    else{
        alert("please enter all inputs!")
    }
   
}


function append_table(response){
    close_loader();
    document.querySelector("#result-table-append-sec").innerHTML=""
    if(response.length<2){
        alert("No Result Found !");
        location.reload();
    }

    let  subject_rows=``;
    for(var key in response[1][0]){
        subject_rows+=`<tr> <th scope="row">${key}</th>
                <td>100</td>
                <td>${response[1][0][key]}</td> </tr>`
    }

    
    let table_div=document.createElement("div")
    table_div.setAttribute("id","result-table-itselt");
    table_div.innerHTML=` <table>
                    <thead class="table-heading">
                        <th colspan="4">Student Details</th>
                    </thead>

                    <tbody>
                        <tr>
                            <th colspan="1">Name</th>
                            <td colspan="2">${response[0][0].Student_Name}</td>
                        </tr>
                        <tr>
                            <th colspan="1">Reg</th>
                            <td colspan="2">${response[0][0].Registration_Number}</td>
                        </tr>
                        <tr>
                            <th colspan="1">College Name</th>
                            <td colspan="2">THE VITM</td>
                        </tr>
                        <tr>
                            <th colspan="1">Branch</th>
                            <td colspan="2">${response[0][0].Branch}</td>
                        </tr>
                        <tr>
                            <th colspan="1">Semester</th>
                            <td colspan="2">${response[0][0].Semester}</td>
                        </tr>
                
                        <tr>
                            <th colspan="1">Mid Semester</th>
                            <td colspan="2">${response[0][0].Mid_sem}</td>
                        </tr>
                   

                    
                        <thead >
                            <tr class="table-heading">
                                <th scope="col">Subject</th>
                                <th scope="col">Total Mark</th>
                                <th scope="col">Secured Mark</th>
                                
                            </tr>
                            
                        </thead>
                    
                 
                        ${subject_rows}
                      
                        <tr>
                            <th scope="row"> Total</th>
                            <th scope="row">500</th>
                            <th scope="row">${response[0][0].Total_Marks}</th>
                        </tr>
                        
                    
                       
                    </tbody>
                </table>`



                document.querySelector("#result-table-append-sec").append(table_div)
                document.querySelector("#result-table-append-sec").style.display="block"
                location.href="#result-table-append-sec";

                
}