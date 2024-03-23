// show menu
const navMenu = document.getElementById('nav_menu'),
      navToggle = document.getElementById('nav_toggle'),
      navClose = document.getElementById('nav_close')

// validate if constant exists
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}


// hide menu
// validate if const exists
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// remove menu mobile
const navLink = document.querySelectorAll('.nav-link')

const linkAction = () => {
    const navMenu = document.getElementById('nav_menu')
    // when click on nav link, we remove the show-menu
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


// shadow header 
// const shadowHeader = () => {
//     const header = document.getElementById('header')
//     // when the scroll is greater than 50 viewport height, add the shadow-header class
//     this.scrollY >= 50 ? header.classList.add('shadow-header')
//                        : header.classList.remove('shadow-header')
// }
// window.addEventListener('scroll', shadowHeader)

// scroll reveal
const sr = ScrollReveal ({
    distance: '60px',
    duration: 2000,
    delay: 400,
    reset: true
})

sr.reveal('.header-content', {delay:200, origin:'top'})
sr.reveal('#services .container, #expertise .container, #selling .container, #buying .container', {delay:200, origin:'top'})
sr.reveal('.exp-content', {delay:200, origin:'top'})
sr.reveal('#market .container', {delay:200, origin:'top'})
sr.reveal('.partner-content', {delay:200, origin:'top'})
sr.reveal('#work .container', {delay:200, origin:'top'})