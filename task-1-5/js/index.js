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


const logItems = (array) => array.map(item => array.indexOf(item) + '-' + item);


console.log('ЗАДАНИЕ №1 ----------------------')
console.log(String(logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'])))
console.log(String(logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50])))


//------------------------------------------

/*
ЗАДАНИЕ 2:
Напиши скрипт подсчета стоимости гравировки украшений. 
Для этого создай функцию calculateEngravingPrice(message, pricePerWord) 
принимающую строку (в строке будут только слова и пробелы) и цену гравировки 
одного слова, и возвращающую цену гравировки.
*/


const calculateEngravingPrice = (message, pricePerWord) => message.split(' ').length * pricePerWord;


console.log('ЗАДАНИЕ №2 ----------------------')
console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10,)); // 80
console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20,)); // 160
console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 40)); // 200
console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 20)); // 100

//------------------------------------------

/*
ЗАДАНИЕ 3:
Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку 
(в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.
Вызовы функции для проверки работоспособности твоей реализации.
*/


const findLongestWord = (string) => string.split(' ').sort((a, b) => b.length - a.length)[0];


console.log('ЗАДАНИЕ №3 ----------------------')
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
console.log(findLongestWord('Google do a roll')); // 'Google'
console.log(findLongestWord('May the force be with you')); // 'force'

//------------------------------------------

/*
ЗАДАНИЕ 4:
Напиши функцию formatString(string) принимающую строку в параметр string.
    Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
    Если длина больше 40 символов, то функция обрезает строку до 40-ка символов 
    и добавляет в конец строки троеточие '...', после чего возвращает укороченную версию.
*/

const formatString = (string) => string.length > 40 ? string.slice(0, 39) + '...' : string;


console.log('ЗАДАНИЕ №4 ----------------------')
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));
// вернется форматированная строка

//------------------------------------------

/*
Задание 5
Напиши функцию checkForSpam(str), принимающую 1 параметр string - строку. 
Функция проверяет ее на содержание слов spam и sale. Если нашли зарещенное слово 
то функция возвращает true, если запрещенных слов нет функция возвращает false. 
Слова в строке могут быть в произвольном регистре.

Вызовы функции для проверки работоспособности твоей реализации.
*/


const checkForSpam = (str) => str.toLowerCase().includes('sale' || 'spam' );


console.log('ЗАДАНИЕ №5 ----------------------')
console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

// -----------------------------------------