export function isPalindrome(string) {
    // Удаляем все пробелы из строки и приводим ее к нижнему регистру
    string = string.replace(/\s/g, "").toLowerCase();

    // Проверяем, является ли строка палиндромом
    if (string === string.split("").reverse().join("")) {
        return 'Вводный текст - полиндром!';
    } else {
        return 'Вводный текст - НЕ полиндром!';
    }
}


export function isPalindrome_2(string) {
    // Удаляем все пробелы из строки и приводим ее к нижнему регистру
    string = string.replace(/\s/g, "").toLowerCase();

    // Инициализируем указатели
    let left = 0;
    let right = string.length - 1;

    // Пока указатели не пересекутся
    while (left < right) {
        // Если символы на указателях не совпадают, строка не является палиндромом
        if (string[left] !== string[right]) {
            return 'Вводный текст - НЕ полиндром!';
        }

        // Перемещаем указатели
        left++;
        right--;
    }

    // Если все символы совпали, строка является палиндромом
    return 'Вводный текст - полиндром!';
}
