export const GetApiGraph = async (quer) => {

	// делаем запрос на https://graphhopper.com/
	const query = new URLSearchParams({
		q: quer,
		locale: 'en',
		limit: '5',
		reverse: 'false',
		debug: 'false',
		provider: 'Default',
		key: 'a7ea3a44-76f8-4af0-bf7d-f0d28fdeaa98'
	}).toString();

	// Сам запрос
	const resp = await fetch(
		`https://graphhopper.com/api/1/geocode?${query}`,
		{ method: 'GET' }
	);

	return await resp.json();
};

// Замыкаем ссылку на таймаут
let timeoutId;

export const getApiGraphPost = () => {
	const input = document.getElementById('search-input');
	const dropdown = document.getElementById('suggestions-list');
	// Ставим слушатель на инпут с Дебонусом и тротлингом посредсвотм замыкания ссылки на таймаут
	input.addEventListener("input", (event) => {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(async () => {
			const response = await GetApiGraph(event.target.value);

			// Очищаем содержимое dropdown
			dropdown.innerHTML = '';

			// Манипуляции с данными ответа и проверка на его наличие
			if (!response.hits) return null;

			// Проходимся по элементам ответа от сервера и создаем элемент списка для каждого
			response.hits.forEach((item) => {
				const listItem = document.createElement('li');
				listItem.textContent = `${item.name}`;
				listItem.addEventListener('click', () => {
					input.value = `${item.name}`;
					dropdown.innerHTML = '';
				});
				dropdown.appendChild(listItem);
			});
		}, 1000);
	});
};
