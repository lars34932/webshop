//header shadow
window.addEventListener('scroll', function () {
    let element = document.getElementById('header');
    let scrollPosition = window.scrollY || window.pageYOffset;

    if (scrollPosition > 10) {
        element.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.4)';
    } else {
        element.style.boxShadow = 'none';
    }
});