// Header меняет цвет при скролле
const header = document.querySelector('header');
window.addEventListener('scroll', function(e) {
	const scrollFromTop = document.querySelector('html').scrollTop; 
	header.style.background = scrollFromTop > 0 ? '#50E3C2' : 'none';
	console.log('ofsetFromTop', scrollFromTop);
});

// Включается видео по нажатии на кнопку
const videoPlayButton = document.querySelector('videoblock__button');
videoPlay.addEventListener('click', function(e) {
	document.querySelector('.video__poster').style.display = 'none';
	document.querySelector('.videoblock__content').style.display = 'none';
	document.querySelector('.video').play();
});

 // // Смена активной кнопки
// const planButtons = document.querySelectorAll('plan__button');
// for (const plan__button-monthly of planButtons) {
// 	plan__button-monthly.addEventListener('click', function(e) {
// 		planButtons.forEach(i => i.classList.remove('active'));
// 		this.classList.toggle('active');
// 	});
// };



// const planButtons = document.querySelectorAll('plan__button');
// for (let i = 0; i < planButtons.length; i++) {
// 	planButtons[i].addEventListener('click', function(e) {
// 		console.log(e);
// 		console.log('this');
// 	});
// for (let j = 0; j < planButtons.length; j++) {
// 	planButtons[j].classList.remove('toggle-active');
// 	this.classList.add('toggle-active');
// 	const choosedPlan = e.target.getAttribute('data-target');

// 	const offerBlock = document.querySelector({choosedPlan});
// 	offerBlock.classList.add('planButtonMonth');
// 	console.log('offerBlock', offerBlock);
// 	}
// };


const cardCheckButton = document.querySelector('plan__button');
planButtonMonth.addEventListener('click', function(e) {
	document.querySelector('.plan__button-monthly').style.background = '#50E3C2';
	document.querySelector('.plan__button-yearly').style.background = 'white';
	document.querySelector('.plancard__activeCard').style.background = '#50E3C2';
	document.querySelector('.plancardPro__activeCard').style.background = 'white';
	document.querySelector('.plan__button-monthly').style.outline = 'none';
	document.querySelector('.plan__button-yearly').style.outline = 'none';
});

const cardCheckButtonButton = document.querySelector('plan__button');
planButtonYear.addEventListener('click', function(e) {
	document.querySelector('.plan__button-monthly').style.background = 'white';
	document.querySelector('.plan__button-yearly').style.background = '#50E3C2';
	document.querySelector('.plancard__activeCard').style.background = 'white';
	document.querySelector('.plancardPro__activeCard').style.background = '#50E3C2';
});