const fullimg = document.querySelector(".full-img");
const smallimg = document.querySelectorAll(".gallery img");
const model = document.querySelector(".model");

smallimg.forEach(function(img){
    img.addEventListener("click", function(){
        model.classList.add("open");    
        fullimg.classList.add("open");
        
        const orgimg = img.getAttribute("alt");
        fullimg.src = `img/${orgimg}.jpg`;
    })
})

model.addEventListener("click", function(e){
    if(e.target.classList.contains("model"))
    {
        model.classList.remove("open"); 
        fullimg.classList.remove("open");
    }
})
