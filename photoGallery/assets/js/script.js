const panels = document.querySelectorAll('.panel')

panels.forEach ( panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('photo-active')
        panel.classList.remove('photo-inactive')
    })
})

function removeActiveClasses() {
    panels.forEach( panel => {
        panel.classList.remove('photo-active')
        panel.classList.add('photo-inactive')
    })
}