// Header меняет цвет при скролле
const header = document.querySelector('header');
window.addEventListener('scroll', function(e) {
	const scrollFromTop = document.querySelector('html').scrollTop; 
	header.style.background = scrollFromTop > 0 ? '#50E3C2' : 'none';
});

// Включается видео по нажатии на кнопку
const videoPlayButton = document.querySelector('videoblock__button');
videoPlay.addEventListener('click', function(e) {
	document.querySelector('.video__poster').style.display = 'none';
	document.querySelector('.videoblock__content').style.display = 'none';
	document.querySelector('.video').play();
});

// const lessonArrays = () => {
// 	let arr1 = [1, 2, 3, 4, 5, 6];

// 	//map
// 	let mapArr = arr1.map((el, i) => ({el, i}) )

// 	console.log('OLD', arr1)
// 	console.log('NEW', mapArr)
// 	console.log('_____')

// 	//filter
// 	let filterArr = arr1.filter((el, i) => {
// 		let deleteForTwo = i%2 === 0;

// 		return deleteForTwo
// 	});

// 	console.log('OLD', arr1)
// 	console.log('NEW', filterArr)
// 	console.log('_____')

// 	//find
// 	let item = arr1.find((el, i) => i === 3);

// 	console.log('My Item', item)
// 	console.log('_____')

// 	//some
// 	let arr2 = [7, 2, 4, 45, 6]
// 	let el_4_Exist = arr2.some((el, i) => el === 4);
// 	let el_56_Exist = arr2.some((el, i) => el === 56);
// 	let el_7_Exist = arr2.some((el, i) => el === 7);

// 	let filterWithSome = arr1.filter(
// 		el => arr2.some(arr2El => arr2El === el) //TRUE FALSE
// 	 )

// 	console.log('el_4_Exist', el_4_Exist);
// 	console.log('el_56_Exist', el_56_Exist);
// 	console.log('el_7_Exist', el_7_Exist);
// 	console.log('filterWithSome', filterWithSome)
// 	console.log('_____')

// };

// lessonArrays();

 // Смена активной кнопки
const planButtons = document.querySelectorAll('plan__button');
for (let i = 0; i < planButtons.length; i++) {
	planButtons[i].addEventListener('click', function(e) {
		console.log(e);
		console.log('this', this);
	});
for (let j = 0; j < planButtons.length; j++) {
	planButtons[j].classList.remove('toggle-active');
	this.classList.add('toggle-active');
	const choosedPlan = e.target.getAttribute('data-target');

	const offerBlock = document.querySelector({choosedPlan});
	offerBlock.classList.add('planButtonMonth');
	console.log('offerBlock', offerBlock);
	}
};






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








let allCurrency;
fetch('https://developerhub.alfabank.by:8273/partner/1.0.0/public/rates')
	.then(response => response.json())
	.then(currencyExchange => {
		allCurrency = currencyExchange
		const currency = {
			usd:{},
			eur:{},
			rub:{}
		};
		console.log('allCurrency', allCurrency);
		currency.usd = allCurrency.rates.find((rate) => rate.iso === 'USD')
		currency.eur = allCurrency.rates.find((rate) => rate.iso === 'EUR')
		currency.rub = allCurrency.rates.find((rate) => rate.iso === 'RUB')
		document.querySelector('.currency-usd').innerHTML = currency.usd.rate;
		document.querySelector('.currency-eur').innerHTML = currency.eur.rate;
		document.querySelector('.currency-rub').innerHTML = currency.rub.rate;
		console.log(currency);
	});