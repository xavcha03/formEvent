//select form input
let firstInputElt = document.querySelector("#firstname");
firstInputElt.addEventListener("keyup", keyUpEvent);

console.dir(firstInputElt);





//Select span
let spanElt = document.querySelector("#display-firstname");


function keyUpEvent(){
spanElt.innerHTML = firstInputElt.value;
}



//Darkmode

let selectElt = document.querySelector("#toggle-darkmode");
let bodyElt = document.querySelector("body");
selectElt.addEventListener("change",e=>{
    if(selectElt.value=="dark"){
        bodyElt.style.backgroundColor = "black";
        bodyElt.style.color = "white";
    }else{
        bodyElt.style.backgroundColor = "white";
        bodyElt.style.color = "black";
    }
    
    
})



//ageElt
let ageElt = document.querySelector("#age");
ageElt.addEventListener("keyup", e=>{
    if(new Number(e.target.value)>=18){
        hardTruthElt.style.visibility = "visible";
    }else{
        hardTruthElt.style.visibility = "hidden";

    }
});


let hardTruthElt = document.querySelector("#a-hard-truth");

//3eme exo

let pwdElt = document.querySelector("#pwd");
let pwdConfirmElt = document.querySelector("#pwd-confirm");


pwdElt.addEventListener("keyup", verifPassword);
pwdConfirmElt.addEventListener("keyup", verifPassword);

function verifPassword(e){
    console.log(pwdElt.value);
    if(pwdElt.value.length>=6 && pwdElt.value == pwdConfirmElt.value){
        pwdElt.style.backgroundColor = "green";
    }else{
        pwdElt.style.backgroundColor = "red";
    }
}

                                                                                                                                                                                                                                                                                                                                                                                                                                                                

