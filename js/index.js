const select = (element) => document.querySelector(element)


const navIcon = select('.navbar-toggler')

const navbarMenu = select('.navbar-menus')



navIcon.addEventListener('click', () =>{
	navbarMenu.classList.toggle('show')
})