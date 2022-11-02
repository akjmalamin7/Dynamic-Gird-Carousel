let count = 1;
let size = 100;
let transition = .5;
let speed = 2000;

// layout
let sliderLayout = "type5" // type1, type2, type3, type4, type5

// show slider
let showSlider1 = true // true, false
let sliderImage1 = "https://www.soppiya.com/media/images/62370cf11dbdd69de562a184/carousel/image-1.webp";
let slider1Link = "#";
let showSlider2 = true; 
let sliderImage2 = "https://www.soppiya.com/media/images/62370cf11dbdd69de562a184/carousel/image-2.webp";
let slider2Link = "#";
let showSlider3 = true; 
let sliderImage3 = "https://www.soppiya.com/media/images/62370cf11dbdd69de562a184/carousel/image-3.webp";
let slider3Link = "#";
let showSlider4 = true; 
let sliderImage4 = "";
let slider4Link = "#";
let showSlider5 = true; 
let sliderImage5 = "";
let slider5Link = "#";


let moveBothWays = "rightToLeft"; // leftToRight, rightToLeft, topToBottom, bottomToTop
let isSlide = true;
let isContainerWidth = false; // true, false
let parentDivElement;

let isArrowController = true; // true or false
let isDotController = true; // true or false

let dotControllerPosition = "center"; //left, center, right
let arrowControllerPosition = "leftRight"; // left-right, center

let carouselImgArr = [];
showSlider1 && sliderImage1 && carouselImgArr.push(sliderImage1);
showSlider2 && sliderImage2 && carouselImgArr.push(sliderImage2);
showSlider3 && sliderImage3 && carouselImgArr.push(sliderImage3);
showSlider4 && sliderImage4 && carouselImgArr.push(sliderImage4);
showSlider5 && sliderImage5 && carouselImgArr.push(sliderImage5);

let carouselLinkArr = [];
showSlider1 & slider1Link && carouselLinkArr.push(slider1Link);
showSlider2 & slider2Link && carouselLinkArr.push(slider2Link);
showSlider3 & slider3Link && carouselLinkArr.push(slider3Link);
showSlider4 & slider4Link && carouselLinkArr.push(slider4Link);
showSlider5 & slider5Link && carouselLinkArr.push(slider5Link);

// let carouselImgArr = [
// 	"https://www.soppiya.com/media/images/62370cf11dbdd69de562a184/carousel/image-1.webp",
// 	"https://www.soppiya.com/media/images/62370cf11dbdd69de562a184/carousel/image-2.webp",
// 	"https://www.soppiya.com/media/images/62370cf11dbdd69de562a184/carousel/image-3.webp"
// ];

let carouselBannerImgArr = ["card.png", "card.png", "card.png"];

// select element
let carouselSection = document.getElementById("gcl1_carousel_section");
let carouselWrapper = document.getElementById("gcl1_carousel_wrapper");
let carouselPushHere = document.getElementById("gcl1_carousel");
let carouselInner = document.getElementById("gcl1_carousel_inner");
let carouselSlide = carouselInner;
// console.log(carouselSlide)

let featureImageContainer = document.getElementById("gcl1_featured_images");
let dotIndicatorPushHere = document.getElementById("gcl1_indicators");
let arrowControllerWrapper = document.getElementById("gcl1_controls");

let nextBtn = document.getElementById("gcl1_next");
let prevBtn = document.getElementById("gcl1_prev");
let carouselImages = carouselImage();

// slider layout

if(sliderLayout === "type1"){
	carouselWrapper.classList.add("gcl1_left_align");
	featureImageContainer.children[2].remove();
}else if(sliderLayout === "type2"){
	carouselWrapper.classList.add("gcl1_right_align");
	featureImageContainer.children[2].remove();
}else if(sliderLayout === "type3"){
	carouselWrapper.classList.add("gcl1_top_align");
}else if(sliderLayout === "type4"){
	carouselWrapper.classList.add("gcl1_bottom_align");
}else if(sliderLayout === "type5"){
	carouselWrapper.classList.add("gcl1_right_align");
	featureImageContainer.remove();
	carouselPushHere.style.width = "100%"
}


if(carouselBannerImgArr.length === 0 || isContainerWidth){
	featureImageContainer.remove();
	carouselPushHere.style.width = "100%"
}











if (moveBothWays === "leftToRight" || moveBothWays === "rightToLeft") {
	carouselSlide.style.flexDirection = "row";
} else if (moveBothWays === "topToBottom" || moveBothWays === "bottomToTop") {
	carouselSlide.style.flexDirection = "column";
};

!isArrowController && arrowControllerWrapper.remove();
!isDotController && dotIndicatorPushHere.remove();

let carouselItemSize = carouselImages.length;
if (carouselItemSize === 0) {
	carouselSection && carouselSection.remove();
};



// slider create
(function () {
	for (let i = 0; i < carouselItemSize; i++) {
		let carouselImgUrl = carouselImages[i];
		// let carouselHyperLinkUrl = carouselLinkArr[i];

		// create  and append carousel item
		let carouselItem = elementMaker("div", ["gcl1_carousel_item"]);
		let carouselHyperLink = elementMaker("a", ["gcl1_carousel_link"], `gcl1_carousel_link${i}`);
		// carouselHyperLink.href = carouselHyperLinkUrl;
		let carouselImgTag = elementMaker("img", [""], `gcl1_carousel_img${i}`);
		carouselImgTag.src = carouselImgUrl;
		// carouselHyperLink.appendChild(carouselImgTag)
		carouselItem.appendChild(carouselImgTag);
		carouselInner.appendChild(carouselItem);

		// create append dot indicatorItem
		let dotIndicatorItem = elementMaker("div", [`gcl1_indicator ${i === 0 ? "gcl1_indicator_active" : ""}`], `gcl1_indicator_dot${i}`
		);
		document.querySelector("gcl1_indicator")?.classList.add("gcl1_indicator_active");
		dotIndicatorPushHere.appendChild(dotIndicatorItem);
	};
	parentDivElement = carouselInner;
	let cloneFirstChild = parentDivElement.firstElementChild.cloneNode(true);
	cloneFirstChild && (cloneFirstChild.id = "first_carousel_item");
	let cloneLastChild = parentDivElement.lastElementChild.cloneNode(true);
	cloneLastChild.id = "last_carousel_item";
	parentDivElement && parentDivElement.appendChild(cloneFirstChild);

	parentDivElement.insertAdjacentElement("afterbegin", cloneLastChild);
})();

let carouselItem = [...carouselSlide.children];

if (moveBothWays === "rightToLeft" || moveBothWays === "leftToRight") {
	carouselSlide && (carouselSlide.style.transform = "translateX(" + -size * count + "%)");
} else if (moveBothWays === "topToBottom" || moveBothWays === "bottomToTop") {
	carouselSlide && (carouselSlide.style.transform = "translateY(" + -size * count + "%)");
};

let translate;
let ind = 0;

function changeSlider() {

	removeClass();
	if (count >= carouselSlide?.children?.length - 1) return;
	carouselSlide && (carouselSlide.style.transition = `transform ${transition}s ease-in-out`);
	if (moveBothWays === "rightToLeft" || moveBothWays === "bottomToTop") {
		count++;
		
	} else if (moveBothWays === "leftToRight" || moveBothWays === "topToBottom") {
		count--;
	};

	
	
	if (moveBothWays === "leftToRight" || moveBothWays === "rightToLeft") {
		carouselSlide && (carouselSlide.style.transform = "translateX(" + -size * count + "%");
	} else if (moveBothWays === "topToBottom" || moveBothWays === "bottomToTop") {
		carouselSlide && (carouselSlide.style.transform = "translateY(" + -size * count + "%");
	};
	
	ind++;
	if(ind >= dotIndicatorPushHere?.children.length){
		ind = 0;
		console.log("indicator = ", ind, "counter = ", count)
	}
	
	document.getElementById(`gcl1_indicator_dot${ind}`).classList.add("gcl1_indicator_active");
	
};

if (isSlide === true && document.getElementById("gcl1_carousel_section")) {
	let carouselTranslate = setInterval(changeSlider, speed);
	carouselSlide.addEventListener("mouseenter", () => clearInterval(carouselTranslate));

	dotIndicatorPushHere.addEventListener("mouseenter", () => clearInterval(carouselTranslate));

	nextBtn.addEventListener("mouseenter", () => clearInterval(carouselTranslate));
	prevBtn.addEventListener("mouseenter", () => clearInterval(carouselTranslate));

	carouselSlide.addEventListener("mouseleave", () => (carouselTranslate = setInterval(changeSlider, speed)));
	dotIndicatorPushHere.addEventListener("mouseleave", () => (carouselTranslate = setInterval(changeSlider, speed)));

	nextBtn.addEventListener("mouseleave", () => (carouselTranslate = setInterval(changeSlider, speed)));
	prevBtn.addEventListener("mouseleave", () => (carouselTranslate = setInterval(changeSlider, speed)));

	window.addEventListener("blur", () => {
		clearTimeout(carouselTranslate);
	}, false);

	window.addEventListener("focus", function () {
		clearTimeout(carouselTranslate);
		carouselTranslate = setInterval(changeSlider, speed);
	});
};

// transition end
carouselSlide.addEventListener("transitionend", function () {
	if (carouselItem[count]?.id === "first_carousel_item") {
		carouselSlide && (carouselSlide.style.transition = "none");
		count = 1
		if (moveBothWays === "rightToLeft" || moveBothWays === "LeftToRight") {
			carouselSlide && (carouselSlide.style.transform = "translateX(" + -size * count + "%)");
		} else if (moveBothWays === "topToBottom" || moveBothWays === "bottomToTop") {
			carouselSlide && (carouselSlide.style.transform = "translateY(" + -size * count + "%)");
		}
	}
	if (carouselItem[count]?.id === "last_carousel_item") {
		carouselSlide && (carouselSlide.style.transition = "none");
		count = carouselItem?.length - 2;
		if (moveBothWays === "rightToLeft" || moveBothWays === "leftToRight") {
			carouselSlide && (carouselSlide.style.transform = "translateX(" + -size * count + "%)");
		} else if (moveBothWays === "topToBottom" || moveBothWays === "bottomToTop") {
			carouselSlide && (carouselSlide.style.transform = "translateY(" + -size * count + "%)");
		}
	}
});

// add active class
[...document.getElementsByClassName("gcl1_indicator")].forEach(
	(indicator, index) => {
		indicator.addEventListener("click", function () {
			removeClass();
			indicator.classList.add("gcl1_indicator_active");
			carouselSlide && (carouselSlide.style.transition = `transform ${transition}s ease-in-out`);
			count = index + 1;
			if (moveBothWays === "rightToLeft" || moveBothWays === "leftToRight") {
				carouselSlide && (carouselSlide.style.transform = "translateX(" + -size * count + "%)");
			} else if (moveBothWays === "topToBottom" || moveBothWays === "bottomToTop") {
				carouselSlide && (carouselSlide.style.transform = "translateY(" + -size * count + "%)");
			}
			ind = index;
		});
	}
);

nextBtn.addEventListener("click", function () {
	changeSlider()
	// removeClass();
	// if (count >= carouselSlide?.children?.length - 1) return; 
	// carouselSlide && (carouselSlide.style.transition = `transform ${transition}s ease-in-out`);

	// if(count < carouselSlide?.children?.length - 1){
	// 	count++;
	// }else{
	// 	count = 1;
	// }


	// if (moveBothWays === "leftToRight" || moveBothWays === "rightToLeft") {
	// 	carouselSlide && (carouselSlide.style.transform = "translateX(" + -size * count + "%");
	// } else if (moveBothWays === "topToBottom" || moveBothWays === "bottomToTop") {
	// 	carouselSlide && (carouselSlide.style.transform = "translateY(" + -size * count + "%");
	// };
	// ind++;

	// if (ind >= dotIndicatorPushHere?.children.length) {
	// 	ind = 0;
	// };
	// document.getElementById(`gcl1_indicator_dot${ind}`).classList.add("gcl1_indicator_active");

});
prevBtn.addEventListener("click", function () {
	removeClass();

	if (count < 1) {
		count = carouselSlide?.children?.length - 2
	};
	carouselSlide && (carouselSlide.style.transition = `transform ${transition}s ease-in-out`);

	if (moveBothWays === "rightToLeft" || moveBothWays === "bottomToTop") {
		count--;
		
	} else if (moveBothWays === "leftToRight" || moveBothWays === "topToBottom") {
		count++;
	};

	if (moveBothWays === "leftToRight" || moveBothWays === "rightToLeft") {
		carouselSlide && (carouselSlide.style.transform = "translateX(" + -size * count + "%");
	} else if (moveBothWays === "topToBottom" || moveBothWays === "bottomToTop") {
		carouselSlide && (carouselSlide.style.transform = "translateY(" + -size * count + "%");
	};


		
	ind++;
	if(ind >= dotIndicatorPushHere?.children.length){
		ind = 0;
		console.log("indicator = ", ind, "counter = ", count)
	}
	
	document.getElementById(`gcl1_indicator_dot${ind}`).classList.add("gcl1_indicator_active");
});
// carouselImage

function carouselImage() {
	try {
		let carouselAllImage = carouselImgArr;
		if (carouselAllImage.length >= 0) {
			if (carouselAllImage.length === 0) {
				document.getElementById("gcl1_carousel_section").remove();
			}
		}
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

function removeClass() {
	[...document.getElementsByClassName("gcl1_indicator")].forEach((children) => {
		children.classList.remove("gcl1_indicator_active");
	});
};
