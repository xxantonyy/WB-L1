export function fillLocalStorage() {
	let data = '';
	let maxSize = 0;

	// Генерируем строку данных, которую будем записывать в localStorage
	for (let i = 0; i < 1024; i++) {
		data += 'a';
	}

	try {
		while (true) {
			localStorage.setItem('data', data);
			maxSize += data.length;
			data += data;
		}
	} catch (error) {
		console.log('Максимальный объем данных в localStorage:', maxSize / 1024, 'КБ');
	}
}
