export const WordEnding = (function () {
	function getWordEnding(number, forms) {
		// Когда у числа окончание 1
		if (number % 10 === 1 && number % 100 !== 11) {
			return forms[0];
			// Когда у числа окончание 2,3,4 - но не 13,14,15
		} else if (number % 10 >= 2 && number % 10 <= 4 && (number % 100 !== 12 && number % 100 !== 13 && number % 100 !== 14)) {
			return forms[1];
			// Все остальное
		} else {
			return forms[2];
		}
	}

	return {
		getWordEnding
	};
})();

// Пример использования
//  console.log(WordEnding.getWordEnding(112, ['сообщение', 'сообщения', 'сообщений']));  // сообщений
//  console.log(WordEnding.getWordEnding(12, ['сообщение', 'сообщения', 'сообщений']));  // сообщений
//  console.log(WordEnding.getWordEnding(1, ['сообщение', 'сообщения', 'сообщений']));  // сообщение
//  console.log(WordEnding.getWordEnding(1024, ['пользователь', 'пользователя', 'пользователя']));  // пользователя
//  console.log(WordEnding.getWordEnding(1026, ['пользователь', 'пользователя', 'пользователей']));  // пользователей
//  console.log(WordEnding.getWordEnding(121, ['пользователь', 'пользователя', 'пользователя']));  // пользователь
