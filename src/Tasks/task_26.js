export function traverseDOM(element, action) {
	// Выполняем действие с текущим узлом
	action(element);

	// Рекурсивно обходим дочерние узлы
	const childNodes = element.childNodes;
	for (let i = 0; i < childNodes.length; i++) {
		const childNode = childNodes[i];

		// Проверяем является ли нода элементом
		if (childNode.nodeType === Node.ELEMENT_NODE) {
			// Рукурсивно вызываем для текущей ноды чтобы углубиться
			traverseDOM(childNode, action);
		}
	}
}

