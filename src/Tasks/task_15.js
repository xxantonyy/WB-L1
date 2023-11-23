export const AsyncFunc = async () => {
	// Асинхронная функция в которой объявляется новый промис с тайм-аутом.
	// После тайм аута у нас выполняется cl и резолвится число.

	const promis = new Promise((resolve) => {
		setTimeout(() => {
			console.log("Промис выполнился с задержкой 1000 мс.");
			resolve('123');
		}, 1000)
	})
	return await promis;
};