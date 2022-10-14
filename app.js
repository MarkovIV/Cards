const slides = document.querySelectorAll('.slide');
const randSlideIndex = Math.floor(Math.random() * slides.length);

cardsSlider(randSlideIndex);

function cardsSlider(initCard = 0) {

	slides[initCard].classList.add("active");

	slides.forEach(slide => {
		slide.addEventListener('click', () => {
			clearAll();
			slide.classList.add('active');
		});
	});	
}

function clearAll() {
	slides.forEach(slide => {
		slide.classList.remove('active');
	});
}