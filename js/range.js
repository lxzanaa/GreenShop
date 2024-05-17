window.onload = function () {
    slideMin();
    slideMax();
}

const minVal = document.querySelector(".min-val");
const maxVal = document.querySelector(".max-val");
const priceInputMin = document.querySelector(".min-input");
const priceInputMax = document.querySelector(".max-input");
const minTooltip = document.querySelector(".min-tooltip");
const maxTooltip = document.querySelector(".max-tooltip");
const min__price = document.querySelector(".min__price");
const max__price = document.querySelector(".max__price");

const minGap = 0;
const range = document.querySelector(".slider-track");

const sliderMinValue = parseInt(minVal.min);
const sliderMaxValue = parseInt(maxVal.max);

function slideMin() {
    let gap = parseInt(maxVal.value) - parseInt(minVal.value);
    if (gap <= minGap) {
        minVal.value = parseInt(maxVal.value) - minGap;
    }
    minTooltip.innerHTML = "$" + minVal.value;
    min__price.innerHTML = "$" + minVal.value;
    setArea();
}

function slideMax() {
    let gap = parseInt(maxVal.value) - parseInt(minVal.value);
    if (gap <= minGap) {
        maxVal.value = parseInt(minVal.value) + minGap;
    }
    maxTooltip.innerHTML = "$" + maxVal.value;
    max__price.innerHTML = "$" + maxVal.value;
    setArea();
}

function setArea() {
    let minValue = parseInt(minVal.value);
    let maxValue = parseInt(maxVal.value);
    let rangeWidth = sliderMaxValue - sliderMinValue;
    let leftPercent = ((minValue - sliderMinValue) / rangeWidth) * 100;
    let rightPercent = ((sliderMaxValue - maxValue) / rangeWidth) * 100;

    range.style.left = leftPercent + "%";
    range.style.right = rightPercent + "%";
    minTooltip.style.left = leftPercent + "%";
    maxTooltip.style.right = rightPercent + "%";
}

function setMinInput() {
    let minPrice = parseInt(priceInputMin.value);
    if (minPrice < sliderMinValue) {
        priceInputMin.value = sliderMinValue;
    }
    minVal.value = priceInputMin.value;
    slideMin();
}

function setMaxInput() {
    let maxPrice = parseInt(priceInputMax.value);
    if (maxPrice > sliderMaxValue) {
        priceInputMax.value = sliderMaxValue;
    }
    maxVal.value = priceInputMax.value;
    slideMax();
}


