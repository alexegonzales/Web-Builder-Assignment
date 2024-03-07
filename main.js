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