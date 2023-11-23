export function handleSubmit(event) {
	event.preventDefault(); // Отменяем отправку формы

	const form = event.target;
	const nameInput = form.name;
	const emailInput = form.email;

	const name = nameInput.value;
	const email = emailInput.value;

	// Выполняем действия с данными
	alert(`Имя: ${name}\nEmail: ${email}\nФорма отправлена!`);

	// Очищаем поля формы
	form.reset();
}
