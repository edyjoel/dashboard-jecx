const buttonAside = document.querySelector('#buttonAside');
const aside = document.querySelector('#aside');
const contentWrapper = document.querySelector('#contentWrapper');
const asideNavItems = document.querySelectorAll('.aside-nav-item');
const overlay = document.querySelector('#overlay');

buttonAside.addEventListener('click', () => {
    if(window.innerWidth < 992) {
        aside.classList.toggle('active');
        overlay.classList.toggle('active');
    }else {
        aside.classList.toggle('active');
        contentWrapper.classList.toggle('active');
        asideNavItems.forEach((item) => {
            item.classList.toggle('active');
        });
    }
});

overlay.addEventListener('click', () => {
    aside.classList.remove('active');
    overlay.classList.remove('active');
});

window.addEventListener('resize', () => {
    if(window.innerWidth >= 992) {
        aside.classList.remove('active');
        overlay.classList.remove('active');
        contentWrapper.classList.remove('active');
        asideNavItems.forEach((item) => {
            item.classList.remove('active');
        });
    }else {
        aside.classList.remove('active');
        overlay.classList.remove('active');
    }
});

document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') {
        aside.classList.remove('active');
        overlay.classList.remove('active');
        contentWrapper.classList.remove('active');
        asideNavItems.forEach((item) => {
            item.classList.remove('active');
        });
    }
});
