
// let resume_upload_API="https://script.google.com/macros/s/AKfycbwcMjCECRntkYGqLmLpQYmvSl01Ssz2zfYGVwxUUHkz1npFlFGM0OezTfVr3W0UPnkp/exec";

// function uploadResume(file) {
//     let reader=new FileReader();
//     reader.readAsDataURL(file);
//     reader.addEventListener("load",function(){
    
//         let rawLog=reader.result.split(",")[1];
//         let dataSend={
//             dataReq:{
//                 data:rawLog,
//                 name:file.name,
//                 type:file.type
//             },
//             fname:"uploadFilesToGoogleDrive"
//         }

//         fetch(resume_upload_API,
//         {
//             method: "POST",
//             body: JSON.stringify(dataSend)
//         }) //send to Api
//         .then(res => res.json()).then((a) => {
//           return a.id;
//         // create_btn(a.url);
         

//         })
//         .catch(e => console.log(e)) // Or Error in console
//     })

// }

// export {uploadResume};


