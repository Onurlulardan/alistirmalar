const body = document.querySelector("body");
const darkbutton = document.querySelector(".dark-mode");
const darkicon =document.querySelector(".fa-moon");

darkbutton.addEventListener("click", () =>{
    darkbutton.classList.toggle("dark");
    if(darkbutton.classList.contains("dark")){
        body.style = 'background-color: #222831; color: #f0f0f0';
        darkbutton.style.backgroundColor = "#f0f0f0"
        darkicon.style.color = "#222831"
    } else {
        body.style ='background-color: #fdfdfd; color: black';
        darkbutton.style.backgroundColor ="#222831";
        darkicon.style.color = "#f0f0f0";
    }
});