import databasejson from "./databasejson.js";
// console.log(databasejson)

// colorbutton iteration
function colorIteration() {
    let colorBtnAll=``;

    databasejson.forEach(color);
    function color(item, index){
        let active = ""
        if(index==0){
            active="active";
        };
        const colorBtn = `<button class="colorChange ${active}" data-value="${index}" onclick="activeSelector(this)" style="background-color: ${item.color};"></button>`

        colorBtnAll += colorBtn;
    };
    document.getElementsByClassName('colorselector')[0].innerHTML = colorBtnAll;
}

colorIteration();




// data change when click color
function colorChange(i){

    // IMAGE ITERATION
    let carouselItem = ``;
    let carouselButton = ``;
    databasejson[i].image.forEach(imageIteration);
    function imageIteration(item, index){
        let active = ""
        if(index==0){
        active="active";
        }
        const carouselItemInput = `<div class="carousel-item ${active}">
                                <div style="background-image: url('${item}')" class="d-block w-100"></div>
                            </div>`;
        const carouselButtonInput = `<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${index}" class="${active}" aria-label="Slide ${index+1}">
                                <div style="background-image: url('${item}')"></div>
                                </button>`;

        carouselItem += carouselItemInput;
        carouselButton += carouselButtonInput;     
    };
    document.getElementsByClassName("carousel-inner")[0].innerHTML = carouselItem;
    document.getElementsByClassName("carousel-indicators")[0].innerHTML = carouselButton;


    // OVERVIEW=
    document.querySelector("#overview div").innerHTML = databasejson[0].overview;

    // DIMENSION
    let dimensionAll = ``;
    databasejson[0].dimension.forEach(dimensionIteration);
    function dimensionIteration(item,index){
        const dimension = `<li>${item}</li>`;
        dimensionAll += dimension;
    }
    document.querySelector("#dimension div").innerHTML = dimensionAll;

    // LOADIBILITY
    document.querySelector("#loadibility div").innerHTML = databasejson[0].loadibility;

};

colorChange(0);

var elements = document.getElementsByClassName("colorChange");

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', function(e){
        transitionOut("transitionOpacity")
        setTimeout(setColorChange, 300)
        function setColorChange(){
            // colorChange(e.srcElement.dataset.value)
            colorChange(e.srcElement.dataset.value)
            transitionIn("transitionOpacity");
        }
    });

}
      

// transition

function transitionIn(domClass){
    const elements = document.getElementsByClassName(domClass);
    setTimeout(changeOpacity,10);
    function changeOpacity(){
        for(let i = 0; i < elements.length; i++){
            elements[i].style.opacity = 1; 
        };
    }
}

function transitionOut(domClass){
    const elements = document.getElementsByClassName(domClass);
    setTimeout(changeOpacity,10);
    function changeOpacity(){
        for(let i = 0; i < elements.length; i++){
            elements[i].style.opacity = 0; 
        };
    }
}

setTimeout(start,300)
function start(){
    transitionIn("body");
    transitionIn("transitionOpacity");
}

