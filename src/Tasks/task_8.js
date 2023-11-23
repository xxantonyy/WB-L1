export const CloserFunction = (funcs) => {

	// Вызываем замкнутую фукцию
	const CloserFuncCall = () => {
		const results = [];
		for (let i = 0; i < funcs.length; i++) {
			results.push(funcs[i]());
		}
		// Возвращаем массив с результатами выполнения функции
		return results;
	}

	// Возвращаем фукцию

	return CloserFuncCall();
}
