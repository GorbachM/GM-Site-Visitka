
//FORM
const form = document.forms["form"];
const submit = form.elements["button"];

const inputArr = Array.from(form);
const validInputArr = [];

const infoBlock = document.querySelector('.info-block');
const infoBlockAnswer = document.querySelector('.info-block-answer');

inputArr.forEach((el) => {
    if (el.hasAttribute("data-reg")) {
        el.setAttribute("is-valid", 0);
        validInputArr.push(el);
    }
});

form.addEventListener("input", inputHandler);
form.addEventListener("submit", formCheck);


function inputHandler({target}) {
    if(target.hasAttribute("data-reg")) {
        inputCheck(target);
    }
}

function inputCheck(el) {
    const inputValue = el.value;
    const inputReg = el.getAttribute("data-reg");
    const reg = new RegExp(inputReg);
    if (reg.test(inputValue)) {
        el.style.border = "2px solid #2D70DE";
        el.setAttribute("is-valid", 1);
    } else {
        el.style.border = "2px solid rgb(255, 0, 0)";
        el.setAttribute("is-valid", 0);
    }
}

function formCheck(e) {
    e.preventDefault();
    const isAllValid = [];
    validInputArr.forEach((el) => {
        isAllValid.push(el.getAttribute("is-valid"));
    });
    const isValid = isAllValid.reduce((acc, current) => {
        return acc && current;
    });
    if (!Boolean(Number(isValid))) {
        return;
    }
    formSubmit();
}
async function formSubmit() {
    const data = serializeForm(form);
    const response = await sendData(data);
    infoBlock.style.display = "none",
    infoBlockAnswer.style.display = "flex";
}

function serializeForm(formNode) {
    return new FormData(form);
}
async function sendData(data) {
    return await fetch("", {
        method: "POST",
        body: data,
    });
}


//Section Solution

const gridSolution = document.querySelector('.solution-grid-1');
const buttonSolution = document.querySelector('.solution-btn');
const solutionPrice1 = document.querySelector('.solution-price-1');
const hSolution = document.querySelector('.hSolution');

gridSolution.addEventListener('mouseover', () => {
    gridSolution.style.background = '#2d70de';
    gridSolution.style.color = '#FFFFFF';
    buttonSolution.style.color = '#010716';
    buttonSolution.style.background = '#FFFFFF';
    solutionPrice1.style.color = '#FFFFFF';
    hSolution.style.color = '#FFFFFF';
})
gridSolution.addEventListener('mouseout', () => {
    gridSolution.style.background = '#FFFFFF';
    gridSolution.style.color = '#010716';
    buttonSolution.style.color = '#FFFFFF';
    buttonSolution.style.background = '#2D70DE';
    solutionPrice1.style.color = '#2D70DE';
    hSolution.style.color = '#010716';
})

//2
/*
const gridSolution2 = document.querySelector('.solution-grid-2');
const buttonSolution2 = document.querySelector('.solution-btn-2');
const solutionPrice2 = document.querySelector('.solution-price-2');
const hSolution2 = document.querySelector('.hSolution2');

gridSolution2.addEventListener('mouseover', () => {
    gridSolution2.style.background = '#2d70de';
    gridSolution2.style.color = '#FFFFFF';
    buttonSolution2.style.color = '#010716';
    buttonSolution2.style.background = '#FFFFFF';
    solutionPrice2.style.color = '#FFFFFF';
    hSolution2.style.color = '#FFFFFF';
})
gridSolution2.addEventListener('mouseout', () => {
    gridSolution2.style.background = '#FFFFFF';
    gridSolution2.style.color = '#010716';
    buttonSolution2.style.color = '#FFFFFF';
    buttonSolution2.style.background = '#2D70DE';
    solutionPrice2.style.color = '#2D70DE';
    hSolution2.style.color = '#010716';
})
 */
//3
const gridSolution3 = document.querySelector('.solution-grid-3');
const buttonSolution3 = document.querySelector('.solution-btn-3');
const solutionPrice3 = document.querySelector('.solution-price-3');
const hSolution3 = document.querySelector('.hSolution3');

gridSolution3.addEventListener('mouseover', () => {
    gridSolution3.style.background = '#2d70de';
    gridSolution3.style.color = '#FFFFFF';
    buttonSolution3.style.color = '#010716';
    buttonSolution3.style.background = '#FFFFFF';
    solutionPrice3.style.color = '#FFFFFF';
    hSolution3.style.color = '#FFFFFF';
})
gridSolution3.addEventListener('mouseout', () => {
    gridSolution3.style.background = '#FFFFFF';
    gridSolution3.style.color = '#010716';
    buttonSolution3.style.color = '#FFFFFF';
    buttonSolution3.style.background = '#2D70DE';
    solutionPrice3.style.color = '#2D70DE';
    hSolution3.style.color = '#010716';
})
//4
const gridSolution4 = document.querySelector('.solution-grid-4');
const buttonSolution4 = document.querySelector('.solution-btn-4');
const solutionPrice4 = document.querySelector('.solution-price-4');
const hSolution4 = document.querySelector('.hSolution4');
const solGridA = document.querySelector('.solution4a');

gridSolution4.addEventListener('mouseover', () => {
    gridSolution4.style.background = '#2d70de';
    gridSolution4.style.color = '#FFFFFF';
    buttonSolution4.style.color = '#010716';
    buttonSolution4.style.background = '#FFFFFF';
    solutionPrice4.style.color = '#FFFFFF';
    hSolution4.style.color = '#FFFFFF';
    solGridA.style.color = '#FFFFFF';
})
gridSolution4.addEventListener('mouseout', () => {
    gridSolution4.style.background = '#FFFFFF';
    gridSolution4.style.color = '#010716';
    buttonSolution4.style.color = '#FFFFFF';
    buttonSolution4.style.background = '#2D70DE';
    solutionPrice4.style.color = '#2D70DE';
    hSolution4.style.color = '#010716';
    solGridA.style.color = '#383638';
});
//end Solution

//SLIDER BENEFITS

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('benefits-slides');

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "flex";
}

//END SLIDER BENEFITS

//CLICK on PICTURE BENEFITS

let slideIndexImgB = 1;
showSlidesImgB(slideIndexImgB);

// Next/previous controls
function plusSlidesImgB(n) {
    showSlidesImgB(slideIndexImgB += n);
}

function showSlidesImgB(n) {
    let i;
    let slidesImgB = document.getElementsByClassName('benefits-slides');

    if (n > slidesImgB.length) {
        slideIndexImgB = 1
    }
    if (n < 1) {
        slideIndexImgB = slidesImgB.length
    }
    for (i = 0; i < slidesImgB.length; i++) {
        slidesImgB[i].style.display = "none";
    }

    slidesImgB[slideIndexImgB-1].style.display = "flex";
}

//EXAMPLE SLIDER
let slideIndexEx = 1;
showSlidesEx(slideIndexEx);

// Next/previous controls
function plusSlidesEx(n) {
    showSlidesEx(slideIndexEx += n);
}

function showSlidesEx(n) {
    let i;
    let slidesEx = document.getElementsByClassName('example-slider-block');

    if (n > slidesEx.length) {
        slideIndexEx = 1
    }
    if (n < 1) {
        slideIndexEx = slidesEx.length
    }
    for (i = 0; i < slidesEx.length; i++) {
        slidesEx[i].style.display = "none";
    }

    slidesEx[slideIndexEx-1].style.display = "flex";
}

//CLICK ON PICTURE EXAMPLE

let slideIndexImg = 1;
showSlidesImg(slideIndexImg);

// Next/previous controls
function plusSlidesImg(n) {
    showSlidesImg(slideIndexImg += n);
}

function showSlidesImg(n) {
    let i;
    let slidesImg = document.getElementsByClassName('example-slider-block');

    if (n > slidesImg.length) {
        slideIndexImg = 1
    }
    if (n < 1) {
        slideIndexImg = slidesImg.length
    }
    for (i = 0; i < slidesImg.length; i++) {
        slidesImg[i].style.display = "none";
    }

    slidesImg[slideIndexImg-1].style.display = "flex";
}


//SCROLL
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};



