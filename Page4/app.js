const faBars = document.querySelector(".fa-bars");
const popup = document.querySelector("#popup");
const xmark =document.querySelector("#xmark");
const links= document.querySelector("#links").cloneNode(1);


faBars.addEventListener("click", (e) => {
    e.preventDefault();
    faBars.classList.add("active");
    popup.classList.add("active");
    popup.appendChild(links);
})

xmark.addEventListener("click",(e)=>{
    e.preventDefault();
    popup.classList.remove("active");
})





