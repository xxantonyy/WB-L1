export function loadImage(url) {

	// Принимаем url нужного нам изображения, возвращаем промис с объявлением resove  и reject для контроля реззультата выполнения промиса.

	return new Promise((resolve, reject) => {

		// Создаемп экземпляр Image=

		const image = new Image();

		// В случае успешной загрузки изображения присваиваем информацию о картинке в переменную, затем помещаем ее в resolve.

		image.onload = () => {
			const imageInfo = {
				width: image.width,
				height: image.height,
				src: url
			};
			resolve(imageInfo);
		};

		// В случае ошибки reject-им новую ошибку

		image.onerror = () => {
			reject(new Error('Failed to load image'));
		};

		// Мы присваиваем url свойству src объекта image, чтобы начать загрузку изображения. Когда мы устанавливаем src, браузер начинает загружать изображение по указанному URL.

		image.src = url;
	});
}
