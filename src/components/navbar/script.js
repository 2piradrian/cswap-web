document.addEventListener("DOMContentLoaded", function () {
    const burgerIcon = document.getElementById("burger-menu");
    const navBox = document.querySelector("[data-navbox]");
    const closeIcon = document.getElementById("close-menu");

    burgerIcon.addEventListener("click", function () {
        navBox.dataset.active = "true";
    });

    closeIcon.addEventListener("click", function () {
        navBox.dataset.active = "false";
    });

    navBox.addEventListener("click", function (event) {
        if (window.innerWidth < 900 && event.target.tagName === "A") {
            navBox.dataset.active = "false";
        }
    });
});
