export const SortPeople = (people) => {
	return people.sort((a, b) => a.age - b.age).sort((a, b) => a.name.localeCompare(b.name));

	// Сначала сортируем по возрасту а потом с помощью метода localeCompare() мы сравниваем поле a.name с полем b.name.
};

// Переделать