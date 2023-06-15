const $ = document
const menuElem = $.querySelector('.menu')
const iconMenuElem = $.querySelector('.icon-menu')
const menuItemsElem = $.querySelector('.menu-items')

const loaderPageElem = $.querySelector('.loader')

window.addEventListener('load', () => {
    loaderPageElem.classList.add('hidden')
})

iconMenuElem.addEventListener('click', () => {
    if (menuElem.className.includes('show')) {

        menuElem.classList.remove('show')
        menuElem.classList.add('none-menu')
        menuItemsElem.classList.add('none')
        
    } else {

        menuElem.classList.remove('none-menu')
        menuElem.classList.add('show')

        setTimeout(() => {
            menuItemsElem.classList.remove('none')
        }, 400)

    }
})