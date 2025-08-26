

function start_loader_1(){
    let loader_cont=document.createElement("div");
    loader_cont.setAttribute("id","loader-container");
    loader_cont.innerHTML=`<div id="loader-sec">
            <img width="80%" src="../assets/media/gif/loader-1.gif" alt="">
        </div>`
    let bodys=document.querySelector("#loader-section-main")
    bodys.innerHTML=null;
    bodys.append(loader_cont);
}

function start_loader_2(){
    let loader_cont=document.createElement("div");
    loader_cont.setAttribute("id","loader-container");
    loader_cont.innerHTML=`<div id="loader-sec">
            <img width="100%" src="../assets/media/gif/loader-2.gif" alt="">
        </div>`
    let bodys=document.querySelector("#loader-section-main")
    bodys.innerHTML=null;
    bodys.append(loader_cont);
}

function close_loader(){
    document.getElementById("loader-container").style.display='none';
}



export {start_loader_1,start_loader_2,close_loader};
