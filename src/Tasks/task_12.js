export const Book = {
	title: 'Harry',
	author: 'Valera',
	year: 2014,

	getTitle: function () {
		return this.title;
	},
	getAuthor: function () {
		return this.author;
	},
	getYear: function () {
		return this.year;
	},

	setTitle: function (title) {
		this.title = title;
	},
	setAuthor: function (author) {
		this.author = author;
	},
	setYear: function (year) {
		this.year = year;
	},
}
