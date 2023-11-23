export function callFunctionsInOrder(functions) {

   // Функция для вызова следующей функции из массива

   function callNextFunction(index) {
       if (index < functions.length) {
           console.log("Вызываем функцию " + (index + 1));
           functions[index]();
           console.log("Функция " + (index + 1) + " выполнена\n");
           callNextFunction(++index);
       }
   }

   // Вызываем первую функцию
   
   callNextFunction(0);
}