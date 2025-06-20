// Denotest the maximum size of the screen.
const ONE_SIDE = 500;

let parentContainer = document.querySelector(".container");

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
        new_el.addEventListener("mouseenter" , (e) => e.target.style.backgroundColor = "black")

        parentContainer.appendChild(new_el);

    }



}



   /*  let gridNum = Number(prompt("Enter the number of grids: "));



    if(gridNum >= 100){

        alert("Please enter another number."); 

    }
    else{

        draw(gridNum);

    } */

        draw(64);








