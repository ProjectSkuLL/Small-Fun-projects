// let btnclick = document.getElementsByClassName("click-me");
function buttonClickOpen() {
 document.getElementById("cm").style.marginRight = "0" ;
 document.getElementById("btn1").style.visibility = "hidden";
 document.getElementById("btn2").style.visibility = "visible";
}

function buttonClickClose() {
    document.getElementById("cm").style.marginRight = "-60%" ;
    document.getElementById("btn1").style.visibility = "visible";
    document.getElementById("btn2").style.visibility = "hidden";

//  document.getElementById("btn2").style. = "none";
}
