document.addEventListener("DOMContentLoaded", function () {
    const burgerIcon = document.getElementById("burger-menu");
    const navBox = document.querySelector("[data-navbox]");
    const closeIcon = document.getElementById("close-menu");

    burgerIcon.addEventListener("click", function () {
        navBox.setAttribute("data-active", "true");
    });

    closeIcon.addEventListener("click", function () {
        navBox.setAttribute("data-active", "false");
    });

    navBox.addEventListener("click", function (event) {
        if (window.innerWidth < 900 && event.target.closest("a")) {
            navBox.setAttribute("data-active", "false");
        }
    });

});
