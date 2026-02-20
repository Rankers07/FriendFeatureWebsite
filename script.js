
var con = document.querySelector("h2");

var btns = document.querySelector("#btn");

var check = 0;

btns.addEventListener("click",function(){
    if(check==0){
        con.innerHTML ="Friends"
        con.style.color = "green"
        btns.innerHTML = "Remove Friends"
        btns.style.color = "black"
        btns.style.backgroundColor = "#dadada"
        check = 1;
    }
    else{
        con.innerHTML ="Stranger"
        con.style.color = "red"
        btns.innerHTML = "Add Friends"
        btns.style.color = "white"
        btns.style.backgroundColor = "seagreen"
        check = 0;
    }
   
});