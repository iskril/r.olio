const btn = document.querySelectorAll('.tabs__btn');
const meat = document.querySelector('[data-tabs-path="meat"]');
const east = document.querySelector('[data-tabs-path="east"]');
const italy = document.querySelector('[data-tabs-path="italy"]');
const salat = document.querySelector('[data-tabs-path="salat"]');
const title = document.querySelector('.title');
const menuLinks = document.querySelectorAll('[data-goto]');
const menuIcon = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const headerTop = document.querySelector('.header__top');
const headerSubstrate = document.querySelector('.header__substrate');
let lastScrollTop = 0;

//burger
menuIcon.addEventListener('click', () => {
	menuIcon.classList.toggle('_active');
	menuBody.classList.toggle('_active');
	document.body.classList.toggle('_lock')
})


// header
	window.addEventListener('scroll', () => {

		let scrollDistance = window.scrollY;
		if (scrollDistance > lastScrollTop) {
			headerTop.classList.remove('header__top-active');
			headerSubstrate.style.top = '-180px';
		} else {
			headerTop.classList.add('header__top-active');
			headerSubstrate.style.top = '0px';
		}
		lastScrollTop = scrollDistance;
	});

	

// header link
if (menuLinks.length > 0) {
	menuLinks.forEach(item => {
		item.addEventListener('click', onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoblockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.
				querySelector('.header__top').offsetHeight + document.querySelector('.header__top').offsetHeight;
				if (menuIcon.classList.contains('_active')) {
					menuIcon.classList.toggle('_active');
					menuBody.classList.toggle('_active');
					document.body.classList.toggle('_lock')
				}
			window.scrollTo({
				top: gotoblockValue,
				behavior: 'smooth'
			});
			e.preventDefault();
		}
	}
}

// swiper
let myImageSlider = new Swiper(".mySwiper", {
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	allowTouchMove: false,

});

// colors
btn.forEach(item => {
	salat.addEventListener('click', () => {
		btn.forEach(el => { el.classList.remove('tabs__btn--meat', 'tabs__btn--east', 'tabs__btn--italy') });
		item.classList.add('tabs__btn--salat');
		title.classList.remove('title--italy', 'title--east', 'title--meat');
	});
});
btn.forEach(item => {
	italy.addEventListener('click', () => {
		btn.forEach(el => { el.classList.remove('tabs__btn--meat', 'tabs__btn--east') });
		item.classList.add('tabs__btn--italy');
		title.classList.remove('title--east');
		title.classList.add('title--italy');
	});
});
btn.forEach(item => {
	meat.addEventListener('click', () => {
		btn.forEach(el => { el.classList.remove('tabs__btn--east') });
		item.classList.add('tabs__btn--meat');
		title.classList.remove('title--italy', 'title--east')
		title.classList.add('title--meat');
	});
});
btn.forEach(item => {
	east.addEventListener('click', () => {
		btn.forEach(el => { el.classList.remove('tabs__btn--meat') });
		item.classList.add('tabs__btn--east');
		title.classList.remove('tabs__btn--meat');
		title.classList.add('title--east');
	})
});

// counters
window.addEventListener('click', (e) => {
	let counterNum;

	if (e.target.dataset.action === 'plus' || e.target.dataset.action === 'minus') {
		const counter = e.target.closest('.counter')
		counterNum = counter.querySelector('[data-counter]')
	}

	if (e.target.dataset.action === 'plus') {
		counterNum.innerText = ++counterNum.innerText;
	}

	if (e.target.dataset.action === 'minus') {
		if (parseInt(counterNum.innerText) > 1) {
			counterNum.innerText = --counterNum.innerText;
		}
	}
});



// 1. клик по всему окну
// 2. проверяем произошел ли клик именно по кнопке в корзину
// 3. от той кнопке по которой произошел клик найти карточку в которой произошел клик 
// 5. собираем информаци. количество в счетчике, цена и т.д
// 6. с данными которые мы собрали создать шаблон для вывода этого товара в корзине
//