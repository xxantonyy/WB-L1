export const get24Posts = async () => {
	let data = []; // Массив для хранения загруженных данных
	let currentPage = 1; // Текущая страница
	let rowsPerPage = 50; // Количество строк на странице

	// Функция для загрузки данных из источника
	function loadData() {
		fetch('http://www.filltext.com/?rows=500&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true')
			.then(response => response.json())
			.then(jsonData => {
				data = jsonData;
				renderTable();
				renderPagination();
			})
			.catch(error => console.log(error));
	}

	// Функция для отображения таблицы с данными
	function renderTable() {
		let tableBody = document.getElementById('data-body');
		tableBody.innerHTML = '';

		let startIndex = (currentPage - 1) * rowsPerPage;
		let endIndex = startIndex + rowsPerPage;

		for (let i = startIndex; i < endIndex && i < data.length; i++) {
			let row = document.createElement('tr');
			let rowData = data[i];

			let firstNameCell = document.createElement('td');
			firstNameCell.textContent = rowData.fname;
			row.appendChild(firstNameCell);

			let lastNameCell = document.createElement('td');
			lastNameCell.textContent = rowData.lname;
			row.appendChild(lastNameCell);

			let phoneCell = document.createElement('td');
			phoneCell.textContent = rowData.tel;
			row.appendChild(phoneCell);

			let addressCell = document.createElement('td');
			addressCell.textContent = rowData.address;
			row.appendChild(addressCell);

			let cityCell = document.createElement('td');
			cityCell.textContent = rowData.city;
			row.appendChild(cityCell);

			let stateCell = document.createElement('td');
			stateCell.textContent = rowData.state;
			row.appendChild(stateCell);

			let zipCell = document.createElement('td');
			zipCell.textContent = rowData.zip;
			row.appendChild(zipCell);

			tableBody.appendChild(row);
		}
	}

	// Функция для отображения пагинации
	function renderPagination() {
		let pagination = document.getElementById('pagination');
		pagination.innerHTML = '';

		let totalPages = Math.ceil(data.length / rowsPerPage);

		for (let i = 1; i <= totalPages; i++) {
			let link = document.createElement('span');
			link.textContent = i;
			link.classList.add('pagination-link');
			if (i === currentPage) {
				link.classList.add('active');
			}
			link.addEventListener('click', function () {
				currentPage = parseInt(this.textContent);
				renderTable();
				renderPagination();
			});
			pagination.appendChild(link);
		}
	}

	// Функция для сортировки таблицы по указанной колонке
	function sortTable(columnIndex) {
		data.sort(function (a, b) {

			// Получаем все ключи строки а и b по индекексу колонки получаем нужный ключь элемента и возвращаем значение нужной колонки
			let valueA = a[Object.keys(a)[columnIndex]];
			let valueB = b[Object.keys(b)[columnIndex]];

			if (typeof valueA === 'string') {
				valueA = valueA.toLowerCase();
			}

			if (typeof valueB === 'string') {
				valueB = valueB.toLowerCase();
			}

			if (valueA < valueB) {
				return -1;
			} else if (valueA > valueB) {
				return 1;
			} else {
				return 0;
			}
		});

		renderTable();
	}

	// Загрузка данных при загрузке страницы
	window.addEventListener('load', function () {
		loadData();
	});

	document.querySelector('.sortTable0').addEventListener('click', () => {
		sortTable(0);
	})
	document.querySelector('.sortTable1').addEventListener('click', () => {
		sortTable(1);
	})
	document.querySelector('.sortTable2').addEventListener('click', () => {
		sortTable(2);
	})
	document.querySelector('.sortTable3').addEventListener('click', () => {
		sortTable(3);
	})
	document.querySelector('.sortTable4').addEventListener('click', () => {
		sortTable(4);
	})
	document.querySelector('.sortTable5').addEventListener('click', () => {
		sortTable(5);
	})
	document.querySelector('.sortTable6').addEventListener('click', () => {
		sortTable(6);
	})

}