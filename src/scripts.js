import "../styles/style.css";
import { isPalindrome, isPalindrome_2 } from "./Tasks/task_1";
import { isStrangeNumber } from "./Tasks/task_2";
import { MathX } from "./Tasks/task_3";
import { WordEnding } from "./Tasks/task_4";
import { jsonToLinkedList } from "./Tasks/task_5";
import { SortPeople } from "./Tasks/task_6";
import { callFunctionsInOrder } from "./Tasks/task_7";
import { CloserFunction } from "./Tasks/task_8";
import { convertJsonToString } from "./Tasks/task_9";
import { convertStringToJson } from "./Tasks/task_10";
import { outerFunction } from "./Tasks/task_11";
import { Book } from "./Tasks/task_12";
import { Rectangle } from "./Tasks/task_13";
import { loadImage } from "./Tasks/task_14";
import { AsyncFunc } from "./Tasks/task_15";
import { getMoment } from "./Tasks/task_16";
import { GetApiGraph, getApiGraphPost, handleInput, useDebounce } from "./Tasks/task_17";
import { fillLocalStorage } from "./Tasks/task_18";
import { ApiVkGet } from "./Tasks/task_19";
import { chromeStackSize, fillStack } from "./Tasks/task_21";
import { documentWrite } from "./Tasks/task_22";
import { analyzePassword } from "./Tasks/task_23";
import { get24Posts } from "./Tasks/task_24";
import { createAndStyleElement } from "./Tasks/task_25";
import { traverseDOM } from "./Tasks/task_26";
import { animateElement } from "./Tasks/task_27";
import { createAndAddElement } from "./Tasks/task_28";
import { handleSubmit } from "./Tasks/task_29";

// // 1 

// console.log(isPalindrome('ага'));
// console.log(isPalindrome_2('ага'));

// // 2

// console.log(isStrangeNumber(6));

// // 3

// console.log(MathX.primeNumbers(10));

// // 4

// console.log((WordEnding.getWordEnding(2, ['сообщение', 'сообщения', 'сообщений'])));

// // 5

// console.log(jsonToLinkedList('[{"name": "Alice"}, {"name": "Bob"}, {"name": "Charlie"}]'));

// // 6

// console.log(SortPeople(
//     [
//         { name: 'John', age: 25 },
//         { name: 'Alice', age: 30 },
//         { name: 'Bob', age: 20 },
//         { name: 'Charlie', age: 25 }
//     ]
// ));

// // 7

// const functions = [
//     function() {
//       console.log("Функция 1");
//     },
//     function() {
//       console.log("Функция 2");
//     },
//     function() {
//       console.log("Функция 3");
//     }
//     // Добавьте остальные функции по аналогии
// ];

// callFunctionsInOrder(functions);

// // 8

// const functions2 = [
//     function() {
//         return 1;
//     },
//     function() {
//         return 2; 
//     },
//     function() {
//         return 3;
//     }
//     // Добавьте остальные функции по аналогии
// ];


// console.log(CloserFunction(functions2));

// 9

// console.log(convertJsonToString({name: 'Tony', city: 'Moscow'}));
// console.log(JSON.stringify({name: 'Tony', city: 'Moscow'}));

// // 10

// console.log(convertStringToJson(convertJsonToString({name: 'Tony', city: 'Moscow'})));
// console.log(JSON.parse(convertJsonToString({name: 'Tony', city: 'Moscow'})));

// // 11

// const inner = outerFunction();
// inner();

// // 12

// console.log(Book.getAuthor());
// Book.setAuthor('NotValera');
// console.log(Book.getAuthor());

// // 13

// const rectangle = new Rectangle(4,5);
// console.log(rectangle.calculatePerimeter());

// // 14  

// // loadImage('https://png.pngtree.com/thumb_back/fw800/background/20230527/pngtree-phoenix-bird-in-flames-wallpapers-wallpapershd-image_2697352.jpg').then((resolve)=> console.log(resolve));

// // 15

// // AsyncFunc()?.then((reslove)=> console.log(reslove));

// // 16

// getMoment();

// 17

// getApiGraphPost();


// 18
 
// fillLocalStorage();

// 19-20

// ApiVkGet();

// 21 

// fillStack();

// 22

documentWrite();

// 23 

// const password = prompt("Введите пароль:");
// const result = analyzePassword(password);
// console.log(result);

// 24

// get24Posts();

// 25 

// const className = 'class25';
// const newElement = createAndStyleElement('div', className);
// console.log(newElement);

// 26

// const rootElement = document.body;

// function logTagInfo(element) {
//    console.log('Tag:', element.tagName.toLowerCase());
// }

// traverseDOM(rootElement, logTagInfo);

// 27

// animateElement();

// 28 

// createAndAddElement();

// 29

// const myForm = document.getElementById('myForm');
// myForm.addEventListener('submit', handleSubmit);
