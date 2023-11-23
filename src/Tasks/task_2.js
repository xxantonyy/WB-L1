export function isStrangeNumber(number) {
    let sum = 0;

    // Перебираем все числа от 1 до number - 1
    for (let i = 1; i < number; i++) {
        // Если i является делителем number, добавляем его к сумме
        if (number % i === 0) {
            sum += i;
        }
    }

    // Если сумма делителей равна number, число является странным
    if (sum === number) {
        return 'Число является странным';
    } else {
        return 'Число Не является странным';
    }
}
