// Get elements
var menubar = document.getElementById("side-menubar");
var side = document.getElementById("side-navbar");
var closenav = document.getElementById("closenav");



menubar.addEventListener("click", function () {
    side.style.marginLeft = "0";
});

// Close sidebar 
closenav.addEventListener("click", function () {
    side.style.marginLeft = "-60%";
});


//  close icon and the offer box
var closeBtn = document.getElementById("offer-box-close");
var offerBox = document.getElementById("Offer");


closeBtn.addEventListener("click", () => {
    offerBox.style.display = "none";
});
// slider image
//Slider Image Section


var sliderimages = document.querySelector(".slider-section__images")
var sliderleftarrow = document.getElementById("slider-left-icon")
var sliderrightarrow = document.getElementById("slider-right-icon")


var sliderimagessize = 0

sliderrightarrow.addEventListener("click", function () {
    sliderimagessize = sliderimagessize + 100

    if (sliderimagessize > 200) {
        sliderimagessize = 0
        sliderimages.style.marginLeft = 0
    }
    else {
        sliderimages.style.marginLeft = "-" + sliderimagessize + "vw"
    }
})


sliderleftarrow.addEventListener("click", function () {
    if (sliderimagessize == 0) {
        sliderimagessize = 200
        sliderimages.style.marginLeft = "-" + sliderimagessize + "vw"
    }
    else {
        sliderimagessize = sliderimagessize - 100
        sliderimages.style.marginLeft = "-" + sliderimagessize + "vw"
    }
})
// heart icon


  //Heart Like For Most Wanted



const heartIcons = document.querySelectorAll('.heart-icon')

heartIcons.forEach(heart => {
    heart.addEventListener('click', function () {

        if (heart.getAttribute('src').includes('black')) {
            heart.setAttribute('src', './images/most-wanted-red-heart.png')
        }
        else {
            heart.setAttribute('src', './images/most-wanted-black-heart.png')
        }
    })
})