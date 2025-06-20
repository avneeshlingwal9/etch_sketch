// Denotest the maximum size of the screen.
const ONE_SIDE = 500;

let parentContainer = document.querySelector(".container");

let resetButton = document.querySelector(".reset");

let inputEl = document.querySelector("#gridNum");

let createBtn = document.querySelector(".create");



function draw(gridNum){

    let totalGrids = gridNum * gridNum; 

    let totalArea = ONE_SIDE * ONE_SIDE; 

    let areaForOne = totalArea / totalGrids ; 

    let lengthSide = Math.sqrt(areaForOne);

    for(let i = 0 ; i < totalGrids ; i++){

        let new_el = document.createElement("div");

        new_el.style.height = `${lengthSide - 2}px`;
    
        new_el.style.width = `${lengthSide - 2}px`;
        new_el.classList.add('grid');
        new_el.addEventListener("mouseenter" , (e) => e.target.classList.add("bg-color"));

        parentContainer.appendChild(new_el);

    }



}


resetButton.addEventListener("click", ()=>{



  
     
    let elements = document.querySelectorAll(".bg-color");

    elements.forEach( (element) => 
    {
        element.classList.remove("bg-color")
    }
);



})

createBtn.addEventListener("click" , (e) => {

    let gridNum = Number(inputEl.value);
    let grids = document.querySelectorAll(".grid");

    grids.forEach((elem) =>
        
        {
            elem.parentNode.removeChild(elem);
        }
    );

    draw(gridNum);

})













