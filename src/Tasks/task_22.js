// 1 вариант

// export const documentWrite = () => {
// 	document.open();
// 	let counter = 0;
// 	const func = () => {
// 		counter++;
// 		document.write();
// 		func();
// 	}
// 	try {
// 		func()
// 	} catch (error) {
// 		console.log('Stack overflow!');
// 		console.log('Counter:', counter);
// 	}
// 	document.close();
// };

// 11.400 итераций для этого кода


// 2 вариант 
export const documentWrite = () => {
	document.open();
	let counter = 0;

	const func = () => {
		counter++;
		document.write(`<script>document.write();</script>`);
		func();
	};

	try {
		func();
	} catch (error) {
		console.log('Stack overflow!');
		console.log('Counter:', counter);
	}

	document.close();
};

// 10.450 для этого исполнения, но при таком варианте сначала консоль выдает  "task_22.js:32 Uncaught RangeError: Maximum call stack size exceeded", только потом срабатывает блок catch.

// В рекурсии 21 задания вышло в гугле 12.528 , здесь вышло 10.450
// Могу сделать вывод что document.write() занимает больше места в стэке нежели функция только с counter.