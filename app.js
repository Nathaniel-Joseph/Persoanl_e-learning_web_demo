// navigation_bar onScroll function

const rootElement = document.documentElement;
let navigationBar = document.querySelector('nav');

document.addEventListener('scroll', function() {
    let scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;

    if((rootElement.scrollTop / scrollTotal) > 0.02) {
        navigationBar.classList.add('shadow');
    } else {
        navigationBar.classList.remove('shadow');
    }
});