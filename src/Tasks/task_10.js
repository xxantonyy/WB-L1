export const convertStringToJson = (str) => {
	try {
		// Удаляем начальные и конечные пробелы из строки
		const trimmedStr = str.trim();

		// Проверяем, является ли строка пустой
		if (trimmedStr === '') {
			throw new Error('Empty string');
		}

		// Проверяем, начинается ли строка с открывающейся фигурной скобки или квадратной скобки
		if (trimmedStr[0] !== '{' && trimmedStr[0] !== '[') {
			throw new Error('Invalid JSON format');
		}

		// Парсим строку в JSON
		const json = parseJson(trimmedStr);

		// Возвращаем полученный JSON
		return json;
	} catch (error) {
		console.error('Error converting string to JSON:', error);
		return null;
	}
};

const parseJson = (str) => {
	let index = 0;
	return parseValue();

	function parseValue() {
		skipWhitespace();
		if (str[index] === '{') {
			return parseObject();
		} else if (str[index] === '[') {
			return parseArray();
		} else if (str[index] === '"') {
			return parseString();
		} else if (str[index] === 't' && str.slice(index, index + 4) === 'true') {
			index += 4;
			return true;
		} else if (str[index] === 'f' && str.slice(index, index + 5) === 'false') {
			index += 5;
			return false;
		} else if (str[index] === 'n' && str.slice(index, index + 4) === 'null') {
			index += 4;
			return null;
		} else {
			return parseNumber();
		}
	}

	function parseObject() {
		const obj = {};
		index++; // Пропускаем открывающуюся фигурную скобку
		while (str[index] !== '}') {
			skipWhitespace();
			const key = parseString();
			skipWhitespace();
			if (str[index] !== ':') {
				throw new Error('Invalid JSON format');
			}
			index++; // Пропускаем двоеточие
			const value = parseValue();
			obj[key] = value;
			skipWhitespace();
			if (str[index] === ',') {
				index++; // Пропускаем запятую
			} else if (str[index] !== '}') {
				throw new Error('Invalid JSON format');
			}
		}
		index++; // Пропускаем закрывающуюся фигурную скобку
		return obj;
	}

	function parseArray() {
		const arr = [];
		index++; // Пропускаем открывающуюся квадратную скобку
		while (str[index] !== ']') {
			skipWhitespace();
			const value = parseValue();
			arr.push(value);
			skipWhitespace();
			if (str[index] === ',') {
				index++; // Пропускаем запятую
			} else if (str[index] !== ']') {
				throw new Error('Invalid JSON format');
			}
		}
		index++; // Пропускаем закрывающуюся квадратную скобку
		return arr;
	}

	function parseString() {
		let value = '';
		index++; // Пропускаем открывающуюся кавычку
		while (str[index] !== '"') {
			if (str[index] === '\\') {
				index++; // Пропускаем экранированный символ
			}
			value += str[index];
			index++;
		}
		index++; // Пропускаем закрывающуюся кавычку
		return value;
	}

	function parseNumber() {
		let value = '';
		while (/[0-9.eE+-]/.test(str[index])) {
			value += str[index];
			index++;
		}
		const num = Number(value);
		if (isNaN(num)) {
			throw new Error('Invalid JSON format');
		}
		return num;
	}
	// Скипаем пробелы
	function skipWhitespace() {
		while (/\s/.test(str[index])) {
			index++;
		}
	}
};
