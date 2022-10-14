const slides = document.querySelectorAll('.slide');

slides.forEach(slide => {
	slide.addEventListener('click', () => {
		clearAll();
		slide.classList.add('active');
	});
});

function clearAll() {
	slides.forEach(slide => {
		slide.classList.remove('active');
	});
}