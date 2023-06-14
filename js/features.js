const $ = document
const menuElem = $.querySelector('.menu')
const iconMenuElem = $.querySelector('.icon-menu')
const menuItemsElem = $.querySelector('.menu-items')

const loaderPageElem = $.querySelector('.loader')

window.addEventListener('load', () => {
    loaderPageElem.classList.add('hidden')
})

iconMenuElem.addEventListener('click', () => {
    if (menuElem.className === 'menu bg-blue p-2 py-1 show') {

        menuElem.classList.remove('show')
        menuElem.classList.add('not-show')
        menuItemsElem.classList.add('none')
        
    } else {

        menuElem.classList.remove('not-show')
        menuElem.classList.add('show')

        setTimeout(() => {
            menuItemsElem.classList.remove('none')
        }, 500)

    }
})