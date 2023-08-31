import databasejson from "./databasejson.js";
console.log(databasejson)

function colorChange(i){
let carouselItem = ``;
let carouselButton = ``;

databasejson[i].image.forEach(imageIteration);

function imageIteration(item, index){
    let active = ""
    if(index==0){
    active="active";
    }
    const carouselItemInput = `<div class="carousel-item ${active}">
                            <div style="background-image: url('${item}');" class="d-block w-100"></div>
                        </div>`;
    const carouselButtonInput = `<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${index}" class="${active}" aria-label="Slide ${index+1}">
                            <div style="background-image: url('${item}');"></div>
                            </button>`;

    carouselItem += carouselItemInput;
    carouselButton += carouselButtonInput;     
};
document.getElementsByClassName("carousel-inner")[0].innerHTML = carouselItem;
document.getElementsByClassName("carousel-indicators")[0].innerHTML = carouselButton;
};

colorChange(0);

var elements = document.getElementsByClassName("colorChange");

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', function(e){colorChange(e.srcElement.dataset.value)});
}
      