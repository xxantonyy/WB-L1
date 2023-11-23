export const convertJsonToString = (json) => {
	try {
		if (typeof json === 'object') {
			let result = '';
			if (Array.isArray(json)) {
				// Если json является массивом
				result += '[';
				for (let i = 0; i < json.length; i++) {
					// Рекурсивно вызываем функцию для каждого элемента массива
					result += convertJsonToString(json[i]);
					if (i < json.length - 1) {
						result += ',';
					}
				}
				result += ']';
			} else {
				// Если json является объектом
				result += '{';
				let keys = Object.keys(json);
				for (let i = 0; i < keys.length; i++) {
					let key = keys[i];
					// Рекурсивно вызываем функцию для каждого свойства объекта
					result += `"${key}":${convertJsonToString(json[key])}`;
					if (i < keys.length - 1) {
						result += ',';
					}
				}
				result += '}';
			}
			return result;
		} else if (typeof json === 'string') {
			// Если json является строкой, заключаем ее в двойные кавычки
			return `"${json}"`;
		} else {
			// Если json является примитивным значением, преобразуем его в строку
			return String(json);
		}
	} catch (error) {
		console.error('Error converting JSON to string:', error);
		return null;
	}
};
