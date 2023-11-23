export function animateElement() {
	const element = document.querySelector('.class27');
	document.querySelector('.animateElement').addEventListener('click', () => {
		element.classList.toggle('animate');
	})
}
