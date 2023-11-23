export function analyzePassword(password) {
	// Проверка длины пароля
	if (password.length < 8) {
		return "Пароль слишком короткий. Рекомендуется использовать не менее 8 символов.";
	}

	// Проверка наличия различных символов
	let hasLowercase = false;
	let hasUppercase = false;
	let hasNumber = false;
	let hasSpecialChar = false;

	for (let i = 0; i < password.length; i++) {
		let char = password[i];

		if (/[a-z]/.test(char)) {
			hasLowercase = true;
		} else if (/[A-Z]/.test(char)) {
			hasUppercase = true;
		} else if (/[0-9]/.test(char)) {
			hasNumber = true;
		} else if (/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(char)) {
			hasSpecialChar = true;
		}
	}

	// Оценка сложности пароля
	let complexity = 0;

	if (hasLowercase) {
		complexity++;
	}

	if (hasUppercase) {
		complexity++;
	}

	if (hasNumber) {
		complexity++;
	}

	if (hasSpecialChar) {
		complexity++;
	}

	// Вывод оценки сложности пароля и предложение улучшений
	switch (complexity) {
		case 1:
			return "Очень слабый пароль. Рекомендуется использовать буквы в разных регистрах, числа и специальные символы.";
		case 2:
			return "Слабый пароль. Рекомендуется использовать буквы в разных регистрах, числа и специальные символы.";
		case 3:
			return "Средний пароль. Рекомендуется использовать специальные символы для повышения сложности.";
		case 4:
			return "Сильный пароль. Хорошая работа!";
		default:
			return "Некорректный пароль.";
	}
}


 