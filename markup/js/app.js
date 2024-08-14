const buttonAside = document.querySelector('#buttonAside');
const aside = document.querySelector('#aside');
const mainContent = document.querySelector('#mainContent');
const asideNavItems = document.querySelectorAll('.aside-nav-item__text');

buttonAside.addEventListener('click', () => {
    aside.classList.toggle('active');
    mainContent.classList.toggle('active');
    asideNavItems.forEach((item) => {
        item.classList.toggle('active');
    });
});
