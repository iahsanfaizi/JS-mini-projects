openBtn = document.querySelector(".open-more");
closeBtn = document.querySelector(".model-btn");
modelContainer = document.querySelector(".model-container");

openBtn.addEventListener("click", function(){
    modelContainer.classList.add("show-msg")
});

closeBtn.addEventListener("click", function(){
    modelContainer.classList.remove("show-msg")
})