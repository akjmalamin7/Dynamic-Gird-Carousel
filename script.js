let count = 1;
let size = 100;
let altMessage = "soppiya";

// layout
let sliderLayout = "type1"; // type1, type2, type3, type4, type5
// slider direction
let sliderDirection = "left"; // left, right, up, down
// arrow controller show/not
let showArrowController = false; // true or false
// dot controller show/not
let showDotController = true; // true or false
// dot controller position
let dotControllerPosition = "down-center"; // top-left, top-center, top-right, down-left, down-center, down-right
// dot controller style
let dotControllerStyle = "type3";/* type1, type2, type3, type4*/

// auto slide on/off
let isAutoSlide = true; // true, false
// slider delay
let sliderDelay = 5;
let sliderDelayTime = sliderDelay*1000;

// transition
let sliderTransitionTime = .5;

// hover on/off
let stopOnHover = true; //true, false

// show slider
let showSlider1 = true // true, false
let sliderImage1 = "https://www.soppiya.com/media/images/62370cf11dbdd69de562a184/carousel/image-1.webp";
let slider1Link = "";
let showSlider2 = true;
let sliderImage2 = "https://www.soppiya.com/media/images/62370cf11dbdd69de562a184/carousel/image-2.webp";
let slider2Link = "";
let showSlider3 = true;
let sliderImage3 = "https://www.soppiya.com/media/images/62370cf11dbdd69de562a184/carousel/image-3.webp";
let slider3Link = "";
let showSlider4 = true;
let sliderImage4 = "";
let slider4Link = "";
let showSlider5 = true;
let sliderImage5 = "";
let slider5Link = "";

// ad image
let ad1Image = "card.png";
let ad1Link = "https://galaxy.soppiya.com/";
let ad2Image = "card.png";
let ad2Link = "https://galaxy.soppiya.com/";
let ad3Image = "card.png";
let ad3Link = "https://galaxy.soppiya.com/";

let parentDivElement;

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

// ad images array
// let adImageArr = ["card.png", "card.png", "card.png"];
let adImageArr = [];
ad1Image && adImageArr.push(ad1Image);
ad2Image && adImageArr.push(ad2Image);
ad3Image && adImageArr.push(ad3Image);

// ad link
let adImageLinkArr = [];
ad1Link && adImageLinkArr.push(ad1Link);
ad2Link && adImageLinkArr.push(ad2Link);
ad3Link && adImageLinkArr.push(ad3Link);

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
let adImages = adImagesFunc();

if (sliderDirection === "left" || sliderDirection === "right") {
	carouselSlide.style.flexDirection = "row";
} else if (sliderDirection === "top" || sliderDirection === "down") {
	carouselSlide.style.flexDirection = "column";
};

// dot controller position

if(dotControllerPosition === "top-left"){
	dotIndicatorPushHere.style.cssText = `top:20px; left:30px;`
}else if(dotControllerPosition === "top-center"){
	dotIndicatorPushHere.style.cssText = `top:20px; left:50%; transform:translateX(-50%);`
}else if(dotControllerPosition === "top-right"){
	dotIndicatorPushHere.style.cssText = `top:20px; right:30px`
}else if(dotControllerPosition === "down-left"){
	dotIndicatorPushHere.style.cssText = `bottom:20px; left:30px`
}else if(dotControllerPosition === "down-center"){
	dotIndicatorPushHere.style.cssText = `bottom:20px; left: 50%; transform:translateX(-50%);`
}else if(dotControllerPosition === "down-right"){
	dotIndicatorPushHere.style.cssText = `bottom:20px; right:30px;`
};

!showArrowController && arrowControllerWrapper.remove();
!showDotController && dotIndicatorPushHere.remove();

let carouselItemSize = carouselImages.length;
if (carouselItemSize === 0) {
	carouselSection && carouselSection.remove();
};

// slider create
(function () {
	for (let i = 0; i < carouselItemSize; i++) {

		// featureImageContainer
		let adImageUrl = adImages[i];
		let adLinkUrl = adImageLinkArr[i];

		let carouselImgUrl = carouselImages[i];
		let carouselHyperLinkUrl = carouselLinkArr[i];

		// create  and append carousel item
		let carouselItem = elementMaker("div", ["gcl1_carousel_item"]);
		let carouselHyperLink = elementMaker("a", ["gcl1_carousel_link"], `gcl1_carousel_link${i}`);
		slider1Link && carouselHyperLink.setAttribute("href", `${carouselHyperLinkUrl}`);
		slider1Link && carouselHyperLink.setAttribute("target", "_blank");
		let carouselImgTag = elementMaker("img", [""], `gcl1_carousel_img${i}`);
		carouselImgTag.src = carouselImgUrl;
		carouselImgTag.alt = `${altMessage}`;
		carouselHyperLink.appendChild(carouselImgTag)
		carouselItem.appendChild(carouselHyperLink);
		carouselInner.appendChild(carouselItem);

		// ad image
		let adImageItem = elementMaker("div", [" gcl1_featured_image"]);
		let adHyperLink = elementMaker("a", ["gcl1_ad_link"], `gcl1_a_link${i}`);
		ad1Link && adHyperLink.setAttribute("href", `${adLinkUrl}`);
		ad1Link && adHyperLink.setAttribute("target", "_blank");
		let adImageTag = elementMaker("img", ["gcl1_ad_image"],);
		adImageTag.src = adImageUrl;
		adImageTag.alt = `${altMessage}`;
		adHyperLink.appendChild(adImageTag)
		adImageItem.appendChild(adHyperLink)
		featureImageContainer.appendChild(adImageItem);

		// create append dot indicatorItem
		let dotIndicatorItem = elementMaker("div", [`gcl1_indicator ${i === 0 ? "gcl1_indicator_active" : ""}`], 		`gcl1_indicator_dot${i}`
		);
		document.querySelector("gcl1_indicator")?.classList.add("gcl1_indicator_active");
		dotIndicatorPushHere.appendChild(dotIndicatorItem);

		if(dotControllerStyle === "type1"){
			dotIndicatorItem.style.cssText = `width:10px; height:10px;border-radius:50%`;
		}else if(dotControllerStyle === "type2"){
			dotIndicatorItem.style.cssText = `width:15px; height:4px;border-radius:0%`;
			dotIndicatorItem.classList.add("lineIndicator")
		}else if(dotControllerStyle === "type3"){
			dotIndicatorItem.style.cssText = `width:8px; height:8px;border-radius:0%`;
			dotIndicatorItem.classList.add("squareIndicator");
		}else if(dotControllerStyle === "type4"){
			dotIndicatorItem.style.cssText = `width:8px; height:8px; border-radius:0%; transform:rotate(50deg)`;
		}
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

if (sliderDirection === "right" || sliderDirection === "left") {
	carouselSlide && (carouselSlide.style.transform = "translateX(" + -size * count + "%)");
} else if (sliderDirection === "top" || sliderDirection === "down") {
	carouselSlide && (carouselSlide.style.transform = "translateY(" + -size * count + "%)");
};


// slider layout
if (sliderLayout === "type1") {
	carouselWrapper.classList.add("gcl1_left_align");
	featureImageContainer.children[2].remove();
} else if (sliderLayout === "type2") {
	carouselWrapper.classList.add("gcl1_right_align");
	featureImageContainer.children[2].remove();
} else if (sliderLayout === "type3") {
	carouselWrapper.classList.add("gcl1_top_align");
} else if (sliderLayout === "type4") {
	carouselWrapper.classList.add("gcl1_bottom_align");
} else if (sliderLayout === "type5") {
	carouselWrapper.classList.add("gcl1_right_align");
	featureImageContainer.remove();
	carouselPushHere.style.width = "100%"
}


let translate;
let ind = 0;

function changeSlider() {

	removeClass();
	if (count >= carouselSlide?.children?.length - 1) return;
	carouselSlide && (carouselSlide.style.transition = `transform ${sliderTransitionTime}s ease-in-out`);

	if (sliderDirection === "right" || sliderDirection === "down") {
		count++;
		console.log("ind = ", ind, "count = ", count);

	} else if (sliderDirection === "left" || sliderDirection === "top") {
		count--;
		console.log("ind = ", ind, "count = ", count);
	};

	if (sliderDirection === "left" || sliderDirection === "right") {
		carouselSlide && (carouselSlide.style.transform = "translateX(" + -size * count + "%");
	} else if (sliderDirection === "top" || sliderDirection === "down") {
		carouselSlide && (carouselSlide.style.transform = "translateY(" + -size * count + "%");
	};

	ind++;
	if (ind >= dotIndicatorPushHere?.children.length) {
		ind = 0;
		console.log("indicator = ", ind, "counter = ", count)
	}

	showDotController && document.getElementById(`gcl1_indicator_dot${ind}`).classList.add("gcl1_indicator_active");

};

if (isAutoSlide === true && document.getElementById("gcl1_carousel_section")) {
	let carouselTranslate = setInterval(changeSlider, sliderDelayTime);
	carouselSlide.addEventListener("mouseenter", () => clearInterval(carouselTranslate));

	dotIndicatorPushHere.addEventListener("mouseenter", () => clearInterval(carouselTranslate));

	nextBtn.addEventListener("mouseenter", () => clearInterval(carouselTranslate));
	prevBtn.addEventListener("mouseenter", () => clearInterval(carouselTranslate));

	stopOnHover && carouselSlide.addEventListener("mouseleave", () => (carouselTranslate = setInterval(changeSlider, sliderDelayTime)));
	dotIndicatorPushHere.addEventListener("mouseleave", () => (carouselTranslate = setInterval(changeSlider, sliderDelayTime)));

	nextBtn.addEventListener("mouseleave", () => (carouselTranslate = setInterval(changeSlider, sliderDelayTime)));
	prevBtn.addEventListener("mouseleave", () => (carouselTranslate = setInterval(changeSlider, sliderDelayTime)));

	window.addEventListener("blur", () => {
		clearTimeout(carouselTranslate);
	}, false);

	window.addEventListener("focus", function () {
		clearTimeout(carouselTranslate);
		carouselTranslate = setInterval(changeSlider, sliderDelayTime);
	});
};

// transition end
carouselSlide.addEventListener("transitionend", function () {
	if (carouselItem[count]?.id === "first_carousel_item") {
		carouselSlide && (carouselSlide.style.transition = "none");
		count = 1
		if (sliderDirection === "right" || sliderDirection === "left") {
			carouselSlide && (carouselSlide.style.transform = "translateX(" + -size * count + "%)");
		} else if (sliderDirection === "top" || sliderDirection === "down") {
			carouselSlide && (carouselSlide.style.transform = "translateY(" + -size * count + "%)");
		}
	}
	if (carouselItem[count]?.id === "last_carousel_item") {
		carouselSlide && (carouselSlide.style.transition = "none");
		count = carouselItem?.length - 2;
		if (sliderDirection === "right" || sliderDirection === "left") {
			carouselSlide && (carouselSlide.style.transform = "translateX(" + -size * count + "%)");
		} else if (sliderDirection === "top" || sliderDirection === "down") {
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
			carouselSlide && (carouselSlide.style.transition = `transform ${sliderTransitionTime}s ease-in-out`);
			count = index + 1;
			if (sliderDirection === "right" || sliderDirection === "left") {
				carouselSlide && (carouselSlide.style.transform = "translateX(" + -size * count + "%)");
			} else if (sliderDirection === "top" || sliderDirection === "down") {
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
	// carouselSlide && (carouselSlide.style.transition = `transform ${sliderTransitionTime}s ease-in-out`);

	// if(count < carouselSlide?.children?.length - 1){
	// 	count++;
	// }else{
	// 	count = 1;
	// }


	// if (sliderDirection === "left" || sliderDirection === "right") {
	// 	carouselSlide && (carouselSlide.style.transform = "translateX(" + -size * count + "%");
	// } else if (sliderDirection === "top" || sliderDirection === "down") {
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
	carouselSlide && (carouselSlide.style.transition = `transform ${sliderTransitionTime}s ease-in-out`);

	if (sliderDirection === "right" || sliderDirection === "down") {
		count--;

	} else if (sliderDirection === "left" || sliderDirection === "top") {
		count++;
	};

	if (sliderDirection === "left" || sliderDirection === "right") {
		carouselSlide && (carouselSlide.style.transform = "translateX(" + -size * count + "%");
	} else if (sliderDirection === "top" || sliderDirection === "down") {
		carouselSlide && (carouselSlide.style.transform = "translateY(" + -size * count + "%");
	};



	ind++;
	if (ind >= dotIndicatorPushHere?.children.length) {
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
function adImagesFunc() {
	try {
		let allAdImage = adImageArr;
		if (allAdImage.length >= 0) {
			if (allAdImage.length === 0) {
				document.getElementById("gcl1_featured_images").remove();
				carouselPushHere.style.width = "100%"
			}
		}
		return allAdImage;
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
