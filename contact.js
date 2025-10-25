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
