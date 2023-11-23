export function jsonToLinkedList(json) {
    // Парсим JSON
    const data = JSON.parse(json);

    // Создаем голову списка
    let head = null;
    let current = null;

    // Проходим по каждому объекту в JSON
    for (let i = 0; i < data.length; i++) {
        // Создаем узел списка
        const node = {
            value: data[i],
            next: null
        };

        // Если это первый узел, делаем его головой списка
        if (i === 0) {
            head = node;
            current = node;
        } else {
            // Добавляем узел в конец списка
            current.next = node;
            current = node;
        }
    }

    // Возвращаем голову списка
    return head;
}
