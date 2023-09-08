document.addEventListener('DOMContentLoaded', function () {
	const btnBars = document.querySelector('.nav-burger-btn')
	const navMobile = document.querySelector('.nav-mobile')
	const navLinks = document.querySelectorAll('.nav-link')
	const footerYear = document.querySelector('.footer__year')
	const nav = document.querySelector('.nav')
	const scrollSpySections = document.querySelectorAll('.section')

	const handleNav = () => {
		navMobile.classList.toggle('nav--active')
		navLinks.forEach(link => {
			link.addEventListener('click', () => {
				navMobile.classList.remove('nav--active')
			})
		})
	}

	const handleCurrentYear = () => {
		const year = new Date().getFullYear()
		footerYear.innerText = year
	}

	const addShadow = () => {
		if (window.scrollY >= 300) {
			nav.classList.add('shadow-nav')
		} else {
			nav.classList.remove('shadow-nav')
		}
	}

	const handleScrollSpy = () => {
		if (document.body.classList.contains('main-page')) {
			const sections = []
			scrollSpySections.forEach(section => {
				// console.log(window.scrollY);
				//wartość scrolla
				// console.log(section.offsetTop);
				// odległość danej sekcji od górnej krawędzi przeglądarki
				// console.log(section.offsetHeight);
				// wysokość każdej z sekcji
				if (window.scrollY <= section.offsetTop + section.offsetHeight - 90) {
					sections.push(section)
					const activeSection = document.querySelector(`[href*="${sections[0].id}"]`)
					if (activeSection) {
						navLinks.forEach(link => link.classList.remove('active'))
						activeSection.classList.add('active')
					} else {
						navLinks.forEach(link => link.classList.remove('active'))
					}
				}
				if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
					const lastSection = document.querySelector('a:last-child')
					navLinks.forEach(link => link.classList.remove('active'))
					lastSection.classList.add('active')
				}
			})
		}
	}

	handleCurrentYear()
	btnBars.addEventListener('click', handleNav)
	window.addEventListener('scroll', addShadow)
	window.addEventListener('scroll', handleScrollSpy)
})
