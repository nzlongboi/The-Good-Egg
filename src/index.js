document.addEventListener("DOMContentLoaded", function() {
    console.log('Page Loaded');


const tabContainer = document.getElementById('container');
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');
const homeContent = document.getElementById('homeContent');

const contactContent = document.getElementById('contactContent');


// hides all tabs on page load
tabContents.forEach(content => {
    content.classList.add('tab-content-inactive');
});

// show home tab content
homeContent.classList.remove('tab-content-inactive');




tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        tabContents.forEach(content => {
            content.classList.add('tab-content-inactive');
        });

        const contentId = tab.id + 'Content';
        const selectedContent = document.getElementById(contentId);

        if (selectedContent) {
            selectedContent.classList.remove('tab-content-inactive')
        }
    });
});




});