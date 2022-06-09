window.addEventListener("load",(event) => {
    document.getElementById("menu-icon").addEventListener("click",(event)=>{
        document.querySelector("#mobile-menu").classList.toggle("active");
        document.querySelector(".close").classList.toggle("active");
        document.querySelector(".overlay").classList.toggle("active");
    })
    document.querySelector(".close").addEventListener("click",(event)=>{
        document.querySelector("#mobile-menu").classList.toggle("active");
        document.querySelector(".close").classList.toggle("active");
        document.querySelector(".overlay").classList.toggle("active");
    })
    document.querySelector(".overlay").addEventListener("click",(event)=>{
        document.querySelector("#mobile-menu").classList.toggle("active");
        document.querySelector(".close").classList.toggle("active");
        document.querySelector(".overlay").classList.toggle("active");
    })
})