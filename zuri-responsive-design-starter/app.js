const toggle= document.querySelector(".toggle");
const links = document.querySelector(".nav-links");
toggle.addEventListener("click", function(){
    links.classList.toggle("show-links");
});
/*toggle.addEventlistener("click",function (){
    if(links.classList.contains("show-links")){
        links.classList.remove("show-links")
    }else{
        links.classList.add("show-links")
    }
    links.classList.toggle("show-links");
});*/