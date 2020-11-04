const header = document.querySelector('header');

window.addEventListener('scroll', function(e) {
	const scrollFromTop = document.querySelector('html').scrollTop; 
	header.style.background = scrollFromTop > 0 ? '#50E3C2' : 'none';
	console.log('ofsetFromTop', scrollFromTop);
});

const videoPlayButton = document.querySelector('videoblock__button');

window.addEventListener('click', function(e) {
	document.querySelector('.video__poster').style.display = 'none';
	document.querySelector('.videoblock__content').style.display = 'none';
	document.querySelector('.video').play();
});