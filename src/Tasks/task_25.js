export function createAndStyleElement(tagName, className) {
	// Создаем новый элемент
	const element = document.createElement(tagName);

	// Добавляем класс элементу
	element.classList.add(className);
	element.style.opacity = 0.7;

	// Добавляем элемент в DOM
	document.body.appendChild(element);

	return element;
}


