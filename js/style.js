let dynamicIcon = document.querySelector(".nav-toggler")
let nav = document.querySelector("nav");
let content = document.querySelector(".home");
dynamicIcon.addEventListener("click", function(e){
    dynamicIcon.classList.toggle('active');
    nav.classList.toggle("active");
    content.classList.toggle("active");

})