'use strict';

/*
Задание 6
Напиши скрипт со следующим функционалом:

    При загрузке страницы пользователю предлагается в prompt ввести число. 
    Ввод сохраняется в переменную input и добавляется в массив чисел numbers.
    Операция ввода числа пользователем и сохранение в массив продолжается до тех пор, 
    пока пользователь не нажмет Cancel в prompt.
    После того как пользователь прекратил ввод нажав Cancel, 
    если массив не пустой, необходимо посчитать сумму всех элементов массива 
    и записать ее в переменную total. Используй цикл for или for...of. 
    После чего в консоль выведи строку 'Общая сумма чисел равна [сумма]'
*/

let input;
const numbers = [];
let total = 0;

const sumUp = (numbers) => {
  numbers.map(number => total += number);
  return console.log(`Общая сумма чисел равна ${total}`)
}; 


const checkInput = () => {
  do {
    input = prompt('Введите число');
    if (input !== null) {
      if (input.trim() === '') {
          alert('Вы ничего не ввели, попробуйте еще раз');
      } else {
        let toNumber = Number(input);
        if (!Number.isNaN(toNumber)) {
            numbers.push(toNumber);
        } else {
            alert('Было введено не число, попробуйте еще раз');
        };
      };
    };
  } while (input !== null);
};


const countEnteredNumbers = (numbers) => {
  checkInput();
  
  if(numbers.length > 0) {
    sumUp(numbers);
  } else {
    console.log('Вы не ввели числа');
  };
};

countEnteredNumbers(numbers);
