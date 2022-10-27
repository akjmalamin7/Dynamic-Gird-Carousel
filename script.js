let count = 0;
let size = 100;
let transition = 0.5;
let speed = 3000;
let gridDirection = "rightAlign"; // topAlign, bottomAlign, leftAlign, rightAlign
let moveBothWays = "leftToRight" // leftToRight, rightTolLeft, topToBottom
let isSlide = true;
let parentDivElement;

let isArrowController = true; // true or false
let isDotController = true; // true or false

let dotControllerPosition = "center"; //left, center, right
let arrowControllerPosition = "left-right"; // left-right, center

let carouselImgArr = [
  "carousel.png",
  "carousel.png",
  "carousel.png",
  "carousel.png",
  "carousel.png",
];
let carouselBannerImgArr = ["card.png", "card.png", "card.png"];

// select element
let carouselSection = document.getElementById("gcl1_carousel_section");
let carouselWrapper = document.getElementById("gcl1_carousel_wrapper");
let carouselPushHere = document.getElementById("gcl1_carousel");
let carouselInner = document.getElementById("gcl1_carousel_inner");
let carouselSlide = carouselInner;

let featureImageContainer = document.getElementById("gcl1_featured_images");
let dotIndicatorPushHere = document.getElementById("gcl1_indicators");
let arrowControllerWrapper = document.getElementById("gcl1_controls");

let nextBtn = document.getElementById("gcl1_next");
let prevBtn = document.getElementById("gcl1_prev");
let carouselImages = carouselImage();

// grid alignment
if (gridDirection === "topAlign") {
	carouselWrapper.classList.add("gcl1_top_align");
}else if(gridDirection === "bottomAlign"){
	carouselWrapper.classList.add("gcl1_bottom_align");
}else if(gridDirection === "leftAlign"){
	carouselWrapper.classList.add("gcl1_left_align");
	featureImageContainer.children[2].remove()
	// carouselWrapper.
}else if(gridDirection === "rightAlign"){
	carouselWrapper.classList.add("gcl1_right_align");
	featureImageContainer.children[2].remove()
};

!isArrowController && arrowControllerWrapper.remove();
!isDotController && dotIndicatorPushHere.remove();

let carouselItemSize = carouselImages.length;
if(carouselItemSize === 0){
	carouselSection && carouselSection.remove();
};


// slider create 
(function () {
	for( let i = 0; i<carouselItemSize; i++){

		let carouselImgUrl = carouselImages[i];

		// create  and append carousel item
		let carouselItem = elementMaker("div", ["gcl1_carousel_item",], `gcl1_carousel_item${i}`);
		let carouselImgTag = elementMaker("img", [""], `gcl1_carousel_img${i}`);
		carouselImgTag.src = carouselImgUrl;
		carouselItem.appendChild(carouselImgTag);
		carouselInner.appendChild(carouselItem);

		// create append dot indicatorItem
		let dotIndicatorItem = elementMaker("div", ["gcl1_indicator",]);
		document.querySelector("gcl1_indicator")?.classList.add("gcl1_indicator_active");
		dotIndicatorPushHere.appendChild(dotIndicatorItem);
	};
	parentDivElement = carouselInner;
	let cloneFirstChild = parentDivElement.firstElementChild.cloneNode(true);
	cloneFirstChild && (cloneFirstChild.id = "first_carousel_item");
	// let cloneLastChild = parentDivElement.lastElementChild.cloneNode(true);
	// cloneLastChild.id = "last_carousel_item";
	parentDivElement && parentDivElement.appendChild(cloneFirstChild);
	
	// parentDivElement.insertAdjacentElement('afterbegin', cloneLastChild)
})();

if(moveBothWays === "leftToRight" || moveBothWays === "rightToLeft"){
	carouselSlide && (carouselSlide.style.transform = "translateX(" + (-size*count) + "%)");

}else if(moveBothWays === "topToBottom" || moveBothWays === "bottomToTop"){
	carouselSlide && (carouselSlide.style.transform = "translateY(" + (-size*count) + "%)");
}

// carouselImage
function carouselImage() {
  try {
    let carouselAllImage = carouselImgArr;
    if(carouselAllImage.length >= 0){
    	if(carouselAllImage.length === 0){
    		document.getElementById("gcl1_carousel_section").remove();
    	};
    };

    return carouselAllImage;
  } catch (err) {
    console.log("carousel Image Function Error", err);
  }
};

// elementMaker
function elementMaker(elemName, className, idName) {
  try {
    let element = document.createElement(elemName);
    className && (element.className = className.join(" "));
    idName && (element.id = idName);
    return element;
  } catch (err) {
    console.log(err);
  }
};
