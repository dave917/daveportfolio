const menu= document.querySelector('.menu')
const nav = document.querySelector('nav')
const ul = document.querySelector('ul')
const li = document.querySelector('li')


menu.addEventListener('click', inline)

function inline() {

    if(nav.style.display == 'none'){
        nav.style.display= 'flex'



    }else{
        nav.style.display = 'none'
    }
}