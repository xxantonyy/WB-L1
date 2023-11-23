export const MathX = (function () {
	// Функция для вычисления N-го числа в ряду Фибоначчи
	function fibonacci(n) {
		let a = 0;
		let b = 1;
		if (n <= 1) {
			return n;
		}
		for (let i = 2; i <= n; i++) {
			[a, b] = [b, a + b]; // Обмен значениями переменных a и b с использованием деструктуризации массива
		}
		return b;
	}

	// Функция для вычисления всех чисел в ряду Фибоначчи до числа N
	function fibonacciSeries(n) {
		const series = [];
		for (let i = 0; i <= n; i++) {
			series.push(fibonacci(i)); // Вызов функции fibonacci для каждого числа от 0 до n
		}
		return series;
	}

	// Функция для проверки, является ли число простым
	function isPrime(number) {
		if (number <= 1) {
			return false;
		}
		const sqrt = Math.sqrt(number); // Вычисление квадратного корня числа number
		for (let i = 2; i <= sqrt; i++) {
			if (number % i === 0) {
				return false;
			}
		}
		return true;
	}

	// Функция для вычисления N-го простого числа
	function nthPrime(n) {
		let count = 0;
		let number = 2;
		while (count < n) {
			if (isPrime(number)) { // Вызов функции isPrime для каждого числа, пока не будет найдено n простых чисел
				count++;
			}
			number++;
		}
		return number - 1;
	}

	// Функция для вычисления всех простых чисел до числа N
	function primeNumbers(n) {
		const primes = [];
		for (let i = 2; i <= n; i++) {
			if (isPrime(i)) { // Вызов функции isPrime для каждого числа от 2 до n
				primes.push(i);
			}
		}
		return primes;
	}

	return {
		fibonacci,
		fibonacciSeries,
		nthPrime,
		isPrime,
		primeNumbers
	};
})();
