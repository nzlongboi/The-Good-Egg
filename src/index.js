document.addEventListener("DOMContentLoaded", function () {
    // Get the tabs and content divs
    const homeTab = document.getElementById("home");
    const menuTab = document.getElementById("menu");
    const contactTab = document.getElementById("contact");
    const eggButton = document.querySelector(".eggButton");

    const homeContent = document.getElementById("homeContent");
    const menuContent = document.getElementById("menuContent");
    const contactContent = document.getElementById("contactContent");

    // Function to hide all content divs
    function hideAllContent() {
        homeContent.style.display = "none";
        menuContent.style.display = "none";
        contactContent.style.display = "none";
    }

    // Function to show the selected content div
    function showContent(content) {
        content.style.display = "block";
    }

    // Initial setup: hide all content except for home
    hideAllContent();
    showContent(homeContent);

    // Event listeners for tab clicks
    homeTab.addEventListener("click", function () {
        hideAllContent();
        showContent(homeContent);
    });

    menuTab.addEventListener("click", function () {
        hideAllContent();
        showContent(menuContent);
    });

    contactTab.addEventListener("click", function () {
        hideAllContent();
        showContent(contactContent);
    });

    eggButton.addEventListener("click", function () {
        hideAllContent();
        showContent(homeContent);
    });

});