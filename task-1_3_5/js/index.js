'use strict';

/*
ЗАДАНИЕ 1:
Напиши функцию logItems(array), которая получает массив 
и использует цикл for, который для каждого элемента массива 
будет выводить в консоль сообщение в формате 
[номер элемента] - [значение элемента].

Нумерация должна начинаться с 1. К примеру для первого 
элемента массива ['Mango', 'Poly', 'Ajax'] с индексом 0 
будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'.

Вызовы функции для проверки работоспособности твоей реализации.
*/


const logItems = (array) => array.map((item, index) => index + 1 + '-' + item);


console.log('ЗАДАНИЕ №1 ----------------------')
console.log(String(logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'])))
console.log(String(logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50])))

//------------------------------------------

/*
ЗАДАНИЕ 3:
Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку 
(в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.
Вызовы функции для проверки работоспособности твоей реализации.
*/


const findLongestWord = (string) => {
    const arrWords = string.split(' ');
    for (let i = 1; i < arrWords.length; i ++) {
        if(arrWords[i].length < arrWords[i - 1].length) {
            const tmp = arrWords[i];
            arrWords[i] = arrWords[i - 1];
            arrWords[i - 1] = tmp;
        };
    };
   return arrWords[arrWords.length - 1];
};


console.log('ЗАДАНИЕ №3 ----------------------')
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
console.log(findLongestWord('Google do a roll Google')); // 'Google'
console.log(findLongestWord('May the force be with you')); // 'force'


// //------------------------------------------

/*
Задание 5
Напиши функцию checkForSpam(str), принимающую 1 параметр string - строку. 
Функция проверяет ее на содержание слов spam и sale. Если нашли зарещенное слово 
то функция возвращает true, если запрещенных слов нет функция возвращает false. 
Слова в строке могут быть в произвольном регистре.

Вызовы функции для проверки работоспособности твоей реализации.
*/


const checkForSpam = (str) => str.toLowerCase().includes('sale'.toLowerCase()) || 
str.toLowerCase().includes('spam'.toLowerCase());


console.log('ЗАДАНИЕ №5 ----------------------')
console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true