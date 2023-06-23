// Start Show Menu
const showMenu = (toggleId,navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);
    if(toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        })
    }
}
showMenu('nav-toggle','nav-menu');
// End Show Menu
// Start Remove Menu => Click Link
const navLink = document.querySelectorAll('.nav-link');
const navMenu = document.getElementById('nav-menu');
function linkAction() {
    navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction));
// End Remove Menu => Click Link
// Start Scroll Section Active Link
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', scrollActive);
function scrollActive() {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId +']').classList.add('active');
        }else {
            document.querySelector('.nav-menu a[href*=' + sectionId +']').classList.remove('active');
        }
    })
}
// End Scroll Section Active Link
// Start Change Color Header
window.onscroll = () => {
    const nav = document.getElementById('header');
    if(this.scrollY >= 200) {
        nav.classList.add('scroll-header'); 
    }else {
        nav.classList.remove('scroll-header');
    }
}
// End Change Color Header