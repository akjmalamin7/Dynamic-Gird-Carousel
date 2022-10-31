let count = 1;
let size = 100;
let transition = 0.5;
let speed = 2000;
let gridDirection = "leftAlign"; // topAlign, bottomAlign, leftAlign, rightAlign
let moveBothWays = "bottomToTop"; // leftToRight, rightToLeft, topToBottom, bottomToTop
let isSlide = true;
let parentDivElement;

let isArrowController = false; // true or false
let isDotController = true; // true or false

let dotControllerPosition = "center"; //left, center, right
let arrowControllerPosition = "leftRight"; // left-right, center

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
// console.log(carouselSlide)

let featureImageContainer = document.getElementById("gcl1_featured_images");
let dotIndicatorPushHere = document.getElementById("gcl1_indicators");
let arrowControllerWrapper = document.getElementById("gcl1_controls");

let nextBtn = document.getElementById("gcl1_next");
let prevBtn = document.getElementById("gcl1_prev");
let carouselImages = carouselImage();

// grid alignment
if (gridDirection === "topAlign") {
  carouselWrapper.classList.add("gcl1_top_align");
} else if (gridDirection === "bottomAlign") {
  carouselWrapper.classList.add("gcl1_bottom_align");
} else if (gridDirection === "leftAlign") {
  carouselWrapper.classList.add("gcl1_left_align");
  featureImageContainer.children[2].remove();
  // carouselWrapper.
} else if (gridDirection === "rightAlign") {
  carouselWrapper.classList.add("gcl1_right_align");
  featureImageContainer.children[2].remove();
}

if (moveBothWays === "leftToRight" || moveBothWays === "rightToLeft") {
  carouselSlide.style.flexDirection = "row";
} else if (moveBothWays === "topToBottom" || moveBothWays === "bottomToTop") {
  carouselSlide.style.flexDirection = "column";
}

!isArrowController && arrowControllerWrapper.remove();
!isDotController && dotIndicatorPushHere.remove();

let carouselItemSize = carouselImages.length;
if (carouselItemSize === 0) {
  carouselSection && carouselSection.remove();
}

// slider create
(function () {
  for (let i = 0; i < carouselItemSize; i++) {
    let carouselImgUrl = carouselImages[i];

    // create  and append carousel item
    let carouselItem = elementMaker("div", ["gcl1_carousel_item"]);
    let carouselImgTag = elementMaker("img", [""], `gcl1_carousel_img${i}`);
    carouselImgTag.src = carouselImgUrl;
    carouselItem.appendChild(carouselImgTag);
    carouselInner.appendChild(carouselItem);

    // create append dot indicatorItem
    let dotIndicatorItem = elementMaker(
      "div",
      [`gcl1_indicator ${i === 0 ? "gcl1_indicator_active" : ""}`],
      `gcl1_indicator_dot${i}`
    );
    document
      .querySelector("gcl1_indicator")
      ?.classList.add("gcl1_indicator_active");
    dotIndicatorPushHere.appendChild(dotIndicatorItem);
  }
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
  carouselSlide &&
    (carouselSlide.style.transform = "translateX(" + -size * count + "%)");
} else if (moveBothWays === "topToBottom" || moveBothWays === "bottomToTop") {
  carouselSlide &&
    (carouselSlide.style.transform = "translateY(" + -size * count + "%)");
}

let translate;
let ind = 0;

function changeSlider() {
  removeClass();

  if (count >= carouselSlide?.children?.length - 1) return;
  carouselSlide &&
    (carouselSlide.style.transition = `transform ${transition}s ease-in-out`);
  if (moveBothWays === "rightToLeft" || moveBothWays === "bottomToTop") {
    count++;
  } else if (moveBothWays === "leftToRight" || moveBothWays === "topToBottom") {
    count--;
  }

  if (moveBothWays === "leftToRight" || moveBothWays === "rightToLeft") {
    carouselSlide &&
      (carouselSlide.style.transform = "translateX(" + -size * count + "%");
  } else if (moveBothWays === "topToBottom" || moveBothWays === "bottomToTop") {
    carouselSlide &&
      (carouselSlide.style.transform = "translateY(" + -size * count + "%");
  }

  ind++;

  if (ind >= dotIndicatorPushHere?.children.length) {
    ind = 0;
  }
  document
    .getElementById(`gcl1_indicator_dot${ind}`)
    .classList.add("gcl1_indicator_active");
}

if (isSlide === true && document.getElementById("gcl1_carousel_section")) {
  let carouselTranslate = setInterval(changeSlider, speed);
  carouselSlide.addEventListener("mouseover", () =>
    clearInterval(carouselTranslate)
  );
  dotIndicatorPushHere.addEventListener("mouseover", () =>
    clearInterval(carouselTranslate)
  );

  carouselSlide.addEventListener(
    "mouseover",
    () => (carouselTranslate = setInterval(changeSlider, speed))
  );
  dotIndicatorPushHere.addEventListener(
    "mouseover",
    () => (carouselTranslate = setInterval(changeSlider, speed))
  );




  window.addEventListener(
    "blur",
    () => {
      clearInterval(carouselTranslate);
    },
    false
  );

  window.addEventListener("blur", function () {
    clearInterval(carouselTranslate);
    carouselTranslate = setInterval(changeSlider, speed);
  });
}

// transition end
carouselSlide.addEventListener("transitionend", function () {
  if (carouselItem[count]?.id === "first_carousel_item") {
    carouselSlide && (carouselSlide.style.transition = "none");
    count = carouselItem.length - count;
    if (moveBothWays === "rightToLeft" || moveBothWays === "LeftToRight") {
      carouselSlide &&
        (carouselSlide.style.transform = "translateX(" + -size * count + "%)");
    } else if (
      moveBothWays === "topToBottom" ||
      moveBothWays === "bottomToTop"
    ) {
      carouselSlide &&
        (carouselSlide.style.transform = "translateY(" + -size * count + "%)");
    }
  }
  if (carouselItem[count]?.id === "last_carousel_item") {
    carouselSlide && (carouselSlide.style.transition = "none");
    count = carouselItem.length - 2;
    if (moveBothWays === "rightToLeft" || moveBothWays === "leftToRight") {
      carouselSlide &&
        (carouselSlide.style.transform = "translateX(" + -size * count + "%)");
    } else if (
      moveBothWays === "topToBottom" ||
      moveBothWays === "bottomToTop"
    ) {
      carouselSlide &&
        (carouselSlide.style.transform = "translateY(" + -size * count + "%)");
    }
  }
});

// add active class
[...document.getElementsByClassName("gcl1_indicator")].forEach(
  (indicator, index) => {
    indicator.addEventListener("click", function () {
      removeClass();
      indicator.classList.add("gcl1_indicator_active");
      carouselSlide &&
        (carouselSlide.style.transition = `transform ${transition}s ease-in-out`);
      count = index + 1;
      if (moveBothWays === "rightToLeft" || moveBothWays === "leftToRight") {
        carouselSlide &&
          (carouselSlide.style.transform =
            "translateX(" + -size * count + "%)");
      } else if (
        moveBothWays === "topToBottom" ||
        moveBothWays === "bottomToTop"
      ) {
        carouselSlide &&
          (carouselSlide.style.transform =
            "translateY(" + -size * count + "%)");
      }
      ind = index;
    });
  }
);

nextBtn.addEventListener("click", function () {
	
});
prevBtn.addEventListener("click", function () {
	
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
}

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
}

function removeClass() {
  [...document.getElementsByClassName("gcl1_indicator")].forEach((children) => {
    children.classList.remove("gcl1_indicator_active");
  });
}
