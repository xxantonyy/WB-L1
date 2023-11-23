export const ApiVkGet = async () => {
	const count = 50;
	const widget = document.getElementById('widget');

	// запрос в вк, скрипт лежит в html 
	const ZaprosVk = (offset, count) => {
		return new Promise((resolve, reject) => {
			const script = document.createElement('script');
			script.src = `https://api.vk.com/method/wall.get?owner_id=-1&offset=${offset}&count=${count}&access_token=d5af56a7d5af56a7d5af56a7e6d6b90c68dd5afd5af56a7b0f53e55d335fa1c496e3cb1&v=5.131&callback=callbackFunc`;
			window.callbackFunc = (response) => {
				localStorage.setItem('vkApi', JSON.stringify(response.response.items))
				resolve(response);
			};
			document.body.appendChild(script);
		});
	};

	// Делаем первый запрос при инициализации страницы перед всеми исполняемыми функциями, дожидаемся его выполнения и потом начинаем базовую работу виджета.
	await ZaprosVk(0, 50);

	// Отображение постов привяззаное к родительсовму элементу widget
	const displayPosts = (posts) => {
		posts.forEach((post) => {
			const postElement = document.createElement('div');
			postElement.textContent = post.text;
			postElement.classList.add('widget__post');
			widget.appendChild(postElement);
		});
	};


	// Загрузка постов, подргужаем из ЛС стор со всеми подргужеными данными ранее затем отображаем их, делаем запрос за партией следующих и отправляем их в store
	const loadPosts = async () => {
		const storedData = JSON.parse(localStorage.getItem('store')) || [];
		displayPosts(storedData);

		const offset = storedData.length;
		const response = await ZaprosVk(offset, count);
		const newPosts = response.response.items;
		displayPosts(newPosts);

		const combined = storedData.concat(newPosts);
		localStorage.setItem('store', JSON.stringify(combined));
		removeOldestPosts();
		calculateLocalStorageUsage();
	};

	// В случае если у нас заполняется ЛС то удалям первые элементы разницей между данными из стореджа и максимальым колличесвом постов, примерно посчитано что каждый пост вест 2 байта, а ЛС вмещает 5мб, можно посччитать кол-во постов в ЛС
	const removeOldestPosts = () => {
		const storedData = JSON.parse(localStorage.getItem('store')) || [];
		const maxLocalStorageSize = 5 * 1024 * 1024; // 5MB
		const maxStoredPosts = Math.floor(maxLocalStorageSize / 2); // Примерно каждый пост занимает 2 байта
		if (storedData.length > maxStoredPosts) {
			const removedPosts = storedData.splice(0, storedData.length - maxStoredPosts);
			localStorage.setItem('store', JSON.stringify(storedData));
			console.log('Removed posts:', removedPosts);
		}
	};


	// Высчитываем занимаемое место посрдеством приведения стореджа к Blob - временному объекту который делает сериалестичную копию стораджа, то есть представляет его в байтовой последовательности и вызываем метов size чтобы получить занимаеммое место в байтах.
	const calculateLocalStorageUsage = () => {
		const storedData = JSON.parse(localStorage.getItem('store')) || [];
		const maxLocalStorageSize = 5 * 1024 * 1024; // 5MB
		const usedLocalStorageSize = new Blob([JSON.stringify(storedData)]).size;
		const localStorageUsage = `${usedLocalStorageSize} / ${maxLocalStorageSize}`;
		console.log('LocalStorage Usage:', localStorageUsage);
	};

	// Слушаттель на срколл и подргузку данных
	widget.addEventListener('scroll', async () => {
		if (widget.scrollTop + widget.clientHeight >= widget.scrollHeight) {
			await loadPosts();
		}
	});

	// При инициализации страницы вызываем функции для начала работы, а именно подгрузка первых статей и просчет ЛС мета
	const storedDataStart = JSON.parse(localStorage.getItem('store')) || JSON.parse(localStorage.getItem('vkApi'));
	displayPosts(storedDataStart);
	calculateLocalStorageUsage();
};
