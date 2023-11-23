import moment from "moment/moment";

export const getMoment = () => {

	let date = moment();

	console.log(`Дата: ${date.format("DD-MM-YYYY")}`);
	console.log(`Вермя: ${date.format("HH:MM")}`);
	console.log(`День: ${date.format("dddd", "ru")}`);
}