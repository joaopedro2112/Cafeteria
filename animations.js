
const search_icon = document.querySelector('.search-icon')
const search_section = document.querySelector('.search-section')
const navbar = document.querySelector('.navbar')
search_icon.onclick = function () {
        search_section.classList.toggle('search-section-active')
        navbar.classList.toggle('navbar-animation')
}
/*const btn = document.querySelectorAll('.btn')
btn.forEach(btn_element => function() {
    btn.onclick = function() {
        btn.classList.toggle('btn-active')
    }
})*/
const btn = document.querySelector('.btn')
btn.onclick = function() {
        btn.classList.toggle('btn-active')
        window.location.href = '#'
    }
const address_section = document.querySelector('.address-section')
const address_text = document.querySelector('.address-text')
address_text.onclick = function() {
    address_section.classList.toggle('address-section-active')
}