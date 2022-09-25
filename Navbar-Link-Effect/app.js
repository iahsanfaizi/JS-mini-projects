//imp variables
const gradients = ["coral", "chartreuse", "chocolate", "cadetblue"];
const trans = document.querySelector(".trans")
const sections = document.querySelectorAll("section")
thresholdValue = {threshold : 0.7,}

//see change in sections
let observer = new IntersectionObserver(scrollEffect,thresholdValue)

//get section from all sections and observe it
sections.forEach(function(section){observer.observe(section)})

//get observed section and fetch required data from it
function scrollEffect(entries){
    entries.forEach(function(entry){
        const className =  entry.target.className;
        const elementIndex =  entry.target.getAttribute("data-index");
        const activeLink = document.querySelector(`[data-page="${className}"]`)
        // console.log(activeLink)
        const coordinates = activeLink.getBoundingClientRect();
        //get all styling properties inside an object
        const linkCord = {
            top:coordinates.top,
            left:coordinates.left,
            width:coordinates.width,
            height:coordinates.height,
        };

        if (entry.isIntersecting){
            trans.style.setProperty('top',`${linkCord.top}px`);
            trans.style.setProperty('left',`${linkCord.left}px`);
            trans.style.setProperty('width',`${linkCord.width}px`);
            trans.style.setProperty('height',`${linkCord.height}px`);
            trans.style.backgroundColor = gradients[elementIndex];   
        }
    });
}



// concepts to learn

// 1. querySelector
// 2. IntersectionObserver
// 3. getBoundingClientRect