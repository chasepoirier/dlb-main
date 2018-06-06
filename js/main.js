const mobileNavSidebar = document.querySelector('.mobile-links');

function toggleMobileNav(icon) {
    if(icon.classList.contains('clicked')) {
        icon.classList.remove('clicked');
        mobileNavSidebar.classList.remove('clicked');
    } else {
        icon.classList += ' clicked ';
        mobileNavSidebar.classList += ' clicked ';
    }
}