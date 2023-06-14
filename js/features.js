const $ = document

const loaderPage = $.querySelector('.loader')

window.addEventListener('load', () => {
    loaderPage.style.display = 'none'
})