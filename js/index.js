const select = (element) => document.querySelector(element)


const navIcon = select('.navbar-toggler')

const navbarMenu = select('.navbar-menus')



navIcon.addEventListener('click', () =>{
	console.log('haha')
	navbarMenu.classList.toggle('show')
})