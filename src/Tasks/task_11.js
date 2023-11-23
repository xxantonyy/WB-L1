export function outerFunction() {
	let outerVariable = 'Hello';
	console.log('Чек функции');

	function innerFunction() {
		console.log(outerVariable);
	}

	return innerFunction;
};

// Внешняя функция хранит переменную outerVariable к которой обращается замкнутая функция.
// Так же есть console.log(); во внутренней функции для проверки того что замыкание работает.
// Во внутренней функции вызывается console.log();
// Возвращаем вложенную функцию.