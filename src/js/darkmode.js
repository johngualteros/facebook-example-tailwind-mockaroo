let button=document.getElementById("darkmode-btn");
let icon=document.getElementById("icon");

button.addEventListener("click",(e)=>{
    document.body.classList.toggle("dark");
        icon.classList.toggle("bi-brightness-high");
        icon.classList.toggle("bi-moon-stars");
})