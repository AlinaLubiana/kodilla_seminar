"use strict";


// let number = 5;
// const leftBorderList = 1;

// number = 10;
// console.log(number);

// const obj = {
//     a: 50
// };

// obj.a = 10;
// console.log(obj);

// console.log(name);
// var name = 'Ivan';

// {
//     var result = 50;
// }
// console.log(result);



// !!!!!!!!!13. Простое общение с пользователем!!!!!!!!!!!!!


// всплывающее окно
// alert('Hello');

// всплывающее окно с вопросом (с кнопками ок и отмена, ответ мы можем посмотреть в консоле)
// const result = confirm('Are you here?');
// console.log(result); // answer true если мы отвечаем ок

// // ответ от пользователя , ответ попадает в консоль
// const answer = +prompt("Do uoy have 18 years old?", "18"); // + может поменять строку на тип данных намбер
// console.log(answer);
// console.log(typeof(answer)); // typeof- можно посмотреть тип данных

// // всплывающие окна, ответ попадает в body 
// const answers = [];
// answers[0] = prompt('Как вас зовут?', '');
// answers[1] = prompt('Ваша фамилия?', '');
// answers[2] = prompt('Сколько Вам лет?', '');
// document.write(answers);


// // всплывающие окна, ответ в консоль
// const answers = [];
// answers[0] = prompt('Как вас зовут?', '');
// answers[1] = prompt('Ваша фамилия?', '');
// answers[2] = prompt('Сколько Вам лет?', '');
// console.log(answers);
// console.log(typeof(answers));

// !!!!!!!!!!!!14 Интерполяция (ES6)!!!!!!!!!!

// const category = ('toys'); 
// console.log(`https://someurl.com/${category}/5`); // in console: https://someurl.com/toys/5


// // всплывающее окно с текстом Привет, Иван
// const user = "Ivan";
// alert(`Hello, ${user}`);


// // !!!!!!!!!!!!15  Операторы в JS !!!!!!!!!!!!!!
// console.log('arr' + " - object");
// console.log(4 + " - object");
// console.log(4 + +"5");


// let incr = 10, 
//     decr = 10;

// incr++; // oператор инкремента (можно ++incr;) увеличение на 1
// decr--;  // Оператор декримента, уменьшение на 1

// console.log(incr); //(можно console.log(++incr) без добавления 77строки;)
// console.log(decr);

// // оператор и ( &&)
// const isChesked = true;
//       isClose = true;
// console.log(isChesked && isClose);

// // оператор или ( || )

// const isChesked = true;
//       isClose = true;
// console.log(isChesked || isClose);

// // оператор отрицания (!)
// const isChesked = true;
//       isClose = true;
// console.log(isChesked || !isClose);
 
//  тернарный оператор
// const num = 50;
// (num === 50) ? console.log('Ok') : console.log('Error');

// модификация иф (свич) только на строгое соответствие
// const num = 50;
// switch (num){
//     case 49:
//         console.log('не вірно');
//         break;
//     case 100:
//     console.log('не вірно');
//         break;
//     case 50:
//         console.log('it is ok');
//         break;
//     default:
//         console.log('not this time');
//         break; 
// }




// циклы
// let num = 50;

// // while
// while (num <= 55){
//    console.log(num);
//    num++;
// }

// // do
// do {
//    console.log(num);
//    num++;
// }
// while(num < 55);

// for
// for (let i = 1; i < 8; i++){
//    console.log(num);
//    num++;
// }

// for (let i = 1; i < 10; i++){
//    if (i === 6){
//       // break;
//       continue;
//    }
//    console.log(i);
// }

// циклы в цикле (вложенные циклы)
// for (let i = 0; i < 3; i++){
//    console.log(i);
//    for (let j = 0; j < 3; j++){
//       console.log(j);
//    }
// }

// // *
// // **
// // ***
// // ****
// // *****
// // ******

// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++){
//    for(let j = 0; j < i; j++) {
//       result += "*";
//    }
//    result +='\n';
// }
// console.log(result);




// //      *
// //     ***
// //    *****
// //   *******
// //  *********
// // ***********

// const lines = 5;
// let result = '';
// // Проверяется именно переменная result, формируйте строку в ней
// for (let i = 0; i <= lines; i++){
//    for(let j = 0; j < lines - i; j++) {
//       result += " ";
//    }
//    for(let j = 0; j < 2 * i + 1; j++) {
//       result += "*";
//    }
//    result +='\n';
// }
// console.log(result);




// // остановка цикла и переход в главный цикл
// first: for (let i = 0; i < 3; i++){
//    console.log(`first level: ${i}`);
//    for (let j = 0; j < 3; j++){
//       console.log(`second level: ${j}`);
//       for (let k = 0; k < 5; k++){
//          if (k ===2) continue first; // точно также и с брейк
//          console.log(`thirg level: ${k}`);
//       }
//    }
// }


// /*Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд.
// Должен получиться точно такой же массив*/
// function firstTask() {
//    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//    const arr = [3, 5, 8, 16, 20, 23, 50];
//    const result = [];

//    // Пишем решение вот тут
//       for (let i = 0; i < arr.length; i++) {
//          result[i] = arr[i];
//    }
//    console.log(result);
//    // Не трогаем
//    return result;
// }
// firstTask();



// /*Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]*/
// function secondTask() {
//    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//    const data = [5, 10, 'Shopping', 20, 'Homework'];

//    // Пишем решение вот тут
//    for (let i = 0; i < data.length; i++) {
//        if (typeof(data[i]) === 'number') {
//            data[i] = data[i] * 2;
//        } else if (typeof(data[i]) === 'string') {
//            data[i] = `${data[i]} - done`;
//        }
//    }
//    console.log(data);
//    // Не трогаем
//    return data;
// }
// secondTask();

// /*Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
// Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]*/

// function thirdTask() {
//    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//    const data = [5, 10, 'Shopping', 20, 'Homework'];
//    const result = [];
//    // Пишем решение вот тут 
//    for (let i = 1; i <= data.length; i++){
//       result[i-1] = data[data.length - i]
//    }
//    console.log(result);
//    return result;
// }
// thirdTask();




// /* Задание на урок:

// 1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

// 2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
// отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
// возвращаем пользователя к вопросам опять

// 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
// "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
// "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

// 4) Потренироваться и переписать цикл еще двумя способами*/

// 'use strict';

// // Код возьмите из предыдущего домашнего задания

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personslMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// // const a = prompt('Один из последних просмотренных фильмов?', ''),
// //       b = prompt('На сколько оцените его?', ''),
// //       c = prompt('Один из последних просмотренных фильмов?', ''),
// //       d = prompt('На сколько оцените его?', '');

// // personslMovieDB.movies[a] = b;
// // personslMovieDB.movies[c] = d;

// // 1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');

//     //   2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
//     //   отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
//     //   возвращаем пользователя к вопросам опять
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personslMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log ('error');
//         i--; //оператор дикринента (возврат на одну итерацию цикла назад)
//     } 
// }
// // 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
// // "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
// // "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

// if (personslMovieDB.count < 10) {
//     console.log('Просмотрено довольно мало фильмов');
// } else if (personslMovieDB.count >= 10 && personslMovieDB.count < 30) {
//     console.log('Вы классический зритель');
// } else if (personslMovieDB.count >= 30) {
//     console.log('Вы киноман');
// } else {
//     console.log('Произошла ошибка');
// }

// console.log(personslMovieDB);




// // 1) Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку.
// // Пример: вызов функции sayHello('Антон') возвращает строку "Привет, Антон!". В решении вызывать функцию не нужно, программа сделает это за вас.
// // P.S. возвращать - это использовать ключевое слово return.
// // P.S.S. Это классическая функция-модификатор, которых мы дальше по курсу будем создавать еще много в разных видах.
// function sayHello(name) {
//     return `Привет, ${name}!`;
// }
// sayHello('Anton');





// // 2) Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает 
// // массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.
// // Пример: вызов функции returnNeighboringNumbers(5) возвращает массив в виде [4, 5, 6].
// function returnNeighboringNumbers(num) {
//     return [num - 1, num, num + 1];
// }
// returnNeighboringNumbers(5);




// // 3) Создайте функцию, которая будет принимать в себя 2 аргумента, 
// // оба числа. Первое число - это база, второе число - это сколько раз нужно будет повторить это число 
// // в прогрессии. (Смотри пример ниже). Функция должна возвращать строку (или число в особых случаях, 
// // о которых ниже), где эти числа идут по порядку, 
// // разделенные тремя дефисами "---". После последнего числа их не должно быть.
// // Если второй аргумент не является числом, равен или меньше нуля - то
// //  возвращать просто первый аргумент. (Проверяем через оператор typeof)
// // Примеры:
// // Вызов функции getMathResult(5, 3) даст ответ 5---10---15
// // Вызов функции getMathResult(3, 10) даст ответ 3---6---9---12---15---18---21---24---27---30
// // Вызов функции getMathResult(10, 5) даст ответ 10---20---30---40---50
// // Вызов функции getMathResult(10, '5') даст ответ 10
// // Вызов функции getMathResult(10, 0) даст ответ 10
// // Вызов функции getMathResult(20, -5) даст ответ 20
// // Эта задача уже ближе к реальности, когда вам нужно учитывать и тип данных у аргументов, 
// // проверять их и продумывать логику работы внутри. Обратите внимание на прогрессию, она 
// // рассчитывается по простой формуле умножения. Если первый аргумент 5, а второй 3, то число повторяется 3 раза, 
// // каждый раз увеличиваясь на само себя. Это базовая математика, которая и нужна для работы в 95% случае на фронтенде.
// // Да, задача сложнее, но она просто объединяет все то, что мы уже учили.


// function getMathResult(num, times) {
//     if (typeof(times) !== 'number' || times <= 0) {
//         return num;
//     }

//     let str = '';

//     for (let i = 1; i <= times; i++) {
//         if (i === times) {
//             str += `${num * i}`;
//         } else {
//             str += `${num * i}---`;
//         }
//     }
//     return str;
// }

// getMathResult(num, times); 



// // __________________________________________________

// /* Задание на урок:

// 1) Первую часть задания повторить по уроку

// 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
// false - выводит в консоль главный объект программы

// 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
// "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
// genres

// P.S. Функции вызывать не обязательно*/

// 'use strict';

// let numberOfFilms;

// function start () {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     // чтобы человек внес не число! проверка
//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }
// start();

// const personslMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// function rememberMyFilms () {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//               b = prompt('На сколько оцените его?', '');
    
//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personslMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log ('error');
//             i--; //оператор дикринента (возврат на одну итерацию цикла назад)
//         } 
//     }
// }

// rememberMyFilms();

// if (personslMovieDB.count < 10) {
//     console.log('Просмотрено довольно мало фильмов');
// } else if (personslMovieDB.count >= 10 && personslMovieDB.count < 30) {
//     console.log('Вы классический зритель');
// } else if (personslMovieDB.count >= 30) {
//     console.log('Вы киноман');
// } else {
//     console.log('Произошла ошибка');
// }

// function detectPersonalLevel() {
//     if (personslMovieDB.count < 10) {
//         console.log('Просмотрено довольно мало фильмов');
//     } else if (personslMovieDB.count >= 10 && personslMovieDB.count < 30) {
//         console.log('Вы классический зритель');
//     } else if (personslMovieDB.count >= 30) {
//         console.log('Вы киноман');
//     } else {
//         console.log('Произошла ошибка');
//     } 
// }

// // detectPersonalLevel();

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personslMovieDB);
//     }
// }

// showMyDB(personslMovieDB.privat);

// function writeYourGenres () {
//     for (let i = 1; i <= 3; i++) {
//         const genre = prompt(`Ваш любимый жанр под номером ${i}`);
//         personslMovieDB.genres[i - 1] = genre;
//         // personslMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`); // вариант 2 написания 2х верхних рядов
//     }
// }

// writeYourGenres();
// console.log(personslMovieDB);




// // __________________________________________________
// // 1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба 
// // (тоже базовая математика, иногда используется в создании анимаций). Эта функция принимает в 
// // себя целое число со значением длины ребра куба. Ответ выведите в формате строки, который изображен в примерах.
// // Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть строку
// //  "При вычислении произошла ошибка"
// // НЕ ИСПОЛЬЗУЙТЕ ОПЕРАТОР СТЕПЕНИ ** - в онлайн среде браузера он не работает и 
// // тесты будут ломаться. Это из-за того, что этот оператор из более нового стандарта, чем тут доступен.
// // Примеры:
// // calculateVolumeAndArea(5)  => 'Объем куба: 125, площадь всей поверхности: 150'
// // calculateVolumeAndArea(15)  => 'Объем куба: 3375, площадь всей поверхности: 1350'
// // calculateVolumeAndArea(15.5)  => 'При вычислении произошла ошибка'
// // calculateVolumeAndArea('15')  => 'При вычислении произошла ошибка'
// // calculateVolumeAndArea(-15)  => 'При вычислении произошла ошибка'

// function calculateVolumeAndArea() {
//     if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
//         return "При вычислении произошла ошибка";
//     }

//     let volume = 0,
//         area = 0;
    
//     volume = length * length * length;
//     area = 6 * (length * length);
        
//     return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
// }

// calculateVolumeAndArea(5);




// // 2) Напишите функцию, которая будет определять номер купе по переданному ей номеру места. Наглядно:
// // Функция принимает только целое число от 1 до 36.
// // Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:
// // "Ошибка. Проверьте правильность введенного номера места"
// // Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"
// // Пример:
// // getCoupeNumber(33)  => 9
// // getCoupeNumber(7)  => 2
// // getCoupeNumber(300)  => "Таких мест в вагоне не существует"
// // getCoupeNumber(0)  => "Таких мест в вагоне не существует"
// // getCoupeNumber(7.7)  => "Ошибка. Проверьте правильность введенного номера места"
// // getCoupeNumber(-10)  => "Ошибка. Проверьте правильность введенного номера места"
// // getCoupeNumber('Hello')  => "Ошибка. Проверьте правильность введенного номера места"
// // Такая функция вполне реальна и может использоваться для формирования билетов, в том числе и 
// // визуально на сайтах. 
// // Конечно, там будет куда больше условий, но смысл остается таким же.

// function getCoupeNumber(seatNumber) {
//     if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
//         return "Ошибка. Проверьте правильность введенного номера места";
//     }

//     if (seatNumber === 0 || seatNumber > 36) {
//         return "Таких мест в вагоне не существует";
//     }

//     return Math.ceil(seatNumber / 4);
// }

// getCoupeNumber(31);


// // 1) Создайте функцию, которая принимает в себя целое число минут и 
// // возвращает время в нужном формате строки. (Смотри пример). Обратите внимание 
// // на окончание слова "час" - оно меняется в зависимости от цифры. Если вместо 
// // аргумента приходит не число, дробное или отрицательное число - функция возвращает
// //  строку "Ошибка, проверьте данные"
// // Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). 
// // Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд). 
// // Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов). 
// // Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.
// // Пример:
// // getTimeFromMinutes(150) => "Это 2 часа и 30 минут"
// // getTimeFromMinutes(50) => "Это 0 часов и 50 минут"
// // getTimeFromMinutes(0) => "Это 0 часов и 0 минут"
// // getTimeFromMinutes(-150) => "Ошибка, проверьте данные"

// function getTimeFromMinutes(whatOurTime) {
//     if (typeof(whatOurTime) !== 'number' || whatOurTime < 0 || !Number.isInteger(whatOurTime)) {
//         return "Ошибка, проверьте данные";
//     }

//     const hours = Math.floor(whatOurTime / 60);
//     const minutes = whatOurTime % 60;

//     let tymeSrt = '';

//     switch (hours) {
//         case 0: 
//             tymeSrt = 'часов';
//             break;
//         case 1:
//             tymeSrt = 'час';
//             break;
//         case 2:
//         case 3:
//         case 4:
//             tymeSrt = 'часа';
//             break;
//         default: 
//             tymeSrt = 'часов';
//     }

//     return `Это ${hours} ${tymeSrt} и ${minutes} минут`;
// }

// getTimeFromMinutes(150);
// getTimeFromMinutes(50);
// getTimeFromMinutes(0);
// getTimeFromMinutes(-150);




// Напишите функцию, которая принимает в себя 4 числа и 
// возвращает самое большее из них. Если один из аргументов не 
// является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.
// Пример:
// findMaxNumber(1, 5, 6.6, 11); =>  11
// findMaxNumber(1, 5, '6', '10');  =>  0

// function findMaxNumber() {
//     if (typeof(a) !== 'number' ||
//     typeof(b) !== 'number' ||
//     typeof(c) !== 'number' ||
//     typeof(d) !== 'number') {
//     return 0;
//     } else {
//     return Math.max(a, b ,c, d);
//     }
// }
// findMaxNumber(1, 5, 6.6, 11);
// findMaxNumber(1, 5, '6', '10');


// // Создайте функцию, которая будет принимать в себя один аргумент-
// // целое положительное число. Она должна возвращать строку, в которой
// //  будут через пробел выведены числа Фибоначчи. Причем, их количество 
// //  должно быть равно переданному аргументу.
// // Если переданный аргумент не число - вернуть пустую строку. 
// // Решать без применения рекурсии.
// // Пример:
// // fib(4) => ''0 1 1 2"
// // fib(7) => ''0 1 1 2 3 5 8"
// // fib('7') => ''"
// // fib(1) => "0"
// // fib(0) => ''"

// function fib(num) {
//     if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
//     return "";
// }

// let result = '';
// let first = 0;
// let second = 1;

// for (let i = 0; i < num; i++) {
//     if (i + 1 === num) {
//         result += `${first}`;
//         // Без пробела в конце
//     } else {
//         result += `${first} `;
//     }

//     let third = first + second;
//     first = second;
//     second = third;
// }

// return result;
// }
// fib(5);
// fib(4);
// fib(7);
// fib('7');
// fib(1);
// fib(0);



// // функция Callback
// function learnJS(lang, callback) {
//     console.log(`I'm learn ${lang}`);
//     callback();
// }

// function done() {
//     console.log('Я прошел этот урок');
// }

// learnJS('JavaScript', done);





// Объекты, деструктуризация объектов (ES6)

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     color: {
//         border: 'black',
//         bg: 'red'
//     }
// }

// console.log(options.name);
// console.log(options["color"]["border"]); // выводить обьект в обьекте
// delete options.name; //удалить обьект
// console.log(options);


// // перебрать все  свойства внутри обьекта
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]){
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     }
// }

// // функции и методы внутри обьекта
// let counter = 0; // посчитать к-во свойств в обьекте (лет и каунтер ++)
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]){
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);

// console.log(Object.keys(options)); // вывести массив со всеми ключами
// console.log(Object.keys(options).length); // колличество элементов в массиве

// метод внутри опшенс 
// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     color: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log("test2");
//     }
// };

// options.makeTest();





// // диструзуризация обьекта
// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     color: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log("test2");
//     }
// };

// options.makeTest();

// const {border, bg} = options.color;
// console.log(border);





// масссивы и псевдомассивы

// const arr = [1, 2, 3, 6, 8];

// arr.pop(); //удалить последний эллемент из массива
// console.log(arr);

// arr.push(10); //добавление эллемента в конце массива

//     //перебрать все эллементы в масиве вариант 1
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
//     //перебрать все эллементы в масиве вариант 2
// for (let value of arr) {
//     console.log(value);
// }

// // метод forEach
// const arr = [1, 2, 3, 6, 8];
// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`)
// });



// // метод split
// const str = prompt("", "");
// const products = str.split(", ");
// products.sort(); //метод сортировки елемемнов как строки (по алфавиту)
// console.log(products.join('; ')); // обьеденение елементов в массиве join



// //метод сортировки елемемнов по возростанию(числа) 
// const arr = [2, 8, 10, 13, 26];
// arr.sort(compareNum); 
// console.log(arr);

// function compareNum(a, b){
//     return a - b;
// }

// // псевдомассивы у них нет методов







// Передача по ссылке или по значению, Spread оператор (ES6-ES9)

// // Передача по ссылке
// let a = 5;
//     b = a;

// b = b + 5;
// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; // эта запись передает не значение а ссылку на обьект{a: 5, b: 1 };

// copy.a = 10;

// console.log(copy);
// console.log(obj);


// // передача копии обьектов или массивов

// // использование цикла
// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for(key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y:4
//     }
// };

// const newNumbers = copy(numbers); //создали копию
// newNumbers.a = 10;
// newNumbers.c.x = 10; // глубокая копия

// // console.log(newNumbers);
// // console.log(numbers);


// // второй способ передачи с циклами (независимая поверхносная копия обьекта)

// const add = {
//     d: 17,
//     e: 20
// };

// console.log(Object.assign(numbers, add));

// const clone = Object.assign({}, add);
// clone.d = 20;

// // console.log(add);
// // console.log(clone);


// // cоздание копии массива

// const oldArray = ['a', 'b', 'c'];
// const newArrey = oldArray.slice; // создание копии slice

// newArrey[1] = ['dffjsjs']; // поменяли значение 'b' на какуюто фразу
// console.log(newArrey);
// console.log(oldArray);


// // создание поверхностной копии оператор разворота spret

// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook'];
// console.log(internet);


// // пример по сложнее:
// function log (a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// const num = [2, 5, 7];
// log(...num);


// // еще один пример 
// const array = ["a", "b"];
// const newAaray = [...array];

// // еще один пример 
// const q = {
//     one: 1,
//     two: 2
// }; 
// const newObj = {...q};







// // 1) Напишите функцию showExperience, 
// // которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.
// // Пример:
// // showExperience(personalPlanPeter) => '1 month'
// // P.S. желательно использовать деструктуризацию, но не обязательно
// // 2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект 
// // со всеми данными и возвращать строку в нужном виде.
// // Пример:
// // showProgrammingLangs(personalPlanPeter)  =>
// // "Язык js изучен на 20% Язык php изучен на 10%"
// // Причем функция должна работать вне зависимости от количества языков. 
// // Если ни один не указан, то возвращается пустая строка.
// // P.S. Для переноса строки используется \n в конце строки.
// // 3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. 
// // При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.
// // Пример:
// // personalPlanPeter.showAgeAndLangs(personalPlanPeter)
// // => 'Мне 29 и я владею языками: RU ENG'
// // Заметьте, что возраст и языки подставляются автоматически из объекта,
// // а языки всегда в верхнем регистре (большими буквами). Если данные в объекте 
// // поменяются, то и сообщение тоже изменится.

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },

//     showAgeAndLangs: function(plan) {
//         const {age} = plan;
//         const {languages} = plan.skills;
//         let str = `Мне ${age} и я владею языками: `;

//         languages.forEach(function (lang) {
//             str += `${lang.toUpperCase()} `;
//         });
//         return str;
//     }
    
// };

// personalPlanPeter.showAgeAndLangs(personalPlanPeter);


// function showExperience(plan) {
//     const {exp} = plan.skills;
//     return exp;
// }

// showExperience(personalPlanPeter);


// function showProgrammingLangs(plan) {
//     let str = '';
//     const {programmingLangs} = plan.skills;
//     for (let key in programmingLangs) {
//         str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
//     }
//     return str;
// }

// showProgrammingLangs(personalPlanPeter);






// // 1) Напишите функцию showFamily, которая будет принимать в себя массив 
// // строк и возвращать сообщение в нужном формате.
// // showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'
// // Имена подставляются автоматически из массива. Если массив пустой, 
// // то выводится сообщение 'Семья пуста'
// // 2) напишите функцию standardizeStrings, которая будет принимать
// //  в себя массив строк и будет выводить в консоль эти строки в нижнем регистре.
// // Пример:
// // standardizeStrings(favoriteCities)  выведет в консоль
// // lisbon
// // rome
// // milan
// // dublin
// // Это частая задача в реальности, так как от пользователя нам могут 
// // прийти ответы в самых разных форматах. В том числе и с разными буквами :)
// //  Поэтому нам нужно привести строки в один формат для правильной работы.


// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     let str = '';
    
//     arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';

//     arr.forEach(member => {
//         str += `${member} `
//     });

//     return str;
// }

// showFamily(family);


// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     arr.forEach(city => {
//         console.log(city.toLowerCase())
//     })
// }

// standardizeStrings(favoriteCities);










// // // 3) Задача с собеседований. Напишите функцию reverse, которая 
// // // принимает в себя строку и возвращает эту строку в обратном порядке.
// // // Пример:
// // // const someString = 'This is some strange string';
// // // reverse(someString) => 'gnirts egnarts emos si sihT'
// // // Функцию можно применить к любой строке. Если в функцию приходит не 
// // // строка - вернуть сообщение "Ошибка!"
// // // Это очень интересная задача, которую можно решить несколькими способами. 
// // // Её дают для того, чтобы оценить навыки и знания программиста, посмотреть как он думает.
// // //  Как небольшая подсказка, есть метод, который может вам помочь. 
// // //  И часть дополнительных вариантов решения мы тоже изучим в течении курса.
// // // Может показать сложной с первого взгляда, но это совсем не так 🙂

// const someString = 'This is some strange string';

// function reverse(str) {
//     if (typeof(str) !== 'string') {
//         return "Ошибка!";
//     }
//     // Самый оптимальный вариант решения
//     return str.split('').reverse().join('');

//     // Решение при помощи цикла
//     // let newStr = '';
//     // for (let i = str.length - 1; i >= 0; i--) {
//     //     newStr += str[i];
//     // }
//     // return newStr
// }

// reverse(someString);





// // обьектно-ориентированное прогамирование (ООП)
// // прототипно-ориентированное наследование
// let animal = {
//     eats: true
//   };
  
//   // create a new object with animal as a prototype
//   let rabbit = Object.create(animal); // same as {__proto__: animal}
  
//   alert(rabbit.eats); // true
  
//   alert(Object.getPrototypeOf(rabbit) === animal); // true
  
//   Object.setPrototypeOf(rabbit, {}); // change the prototype of rabbit to {}




// // вправа 1
// const names = ['Kasia', 'Tomek', 'Amanda', 'Maja'];
// let namesWomen = [];
//     for (let name in names) {
//         // console.log('name', names[name].slice(-1));
//         if (names[name].slice(-1) == 'a') {
//             // console.log('name', names[name]);
//             namesWomen.push(names[name]);
//         } 
//     };
// console.log('namesWomen', namesWomen);
    

// // вправа 2
// // employeesNames список співробітників (тільки імена!). employeesSalaries повинна бути списком зарплат.
// const employees = {
//     john: {
//       name: 'John Doe',
//       salary: 3000
//     },
//     amanda: {
//       name: 'Amanda Doe',
//       salary: 4000
//     },
//   };

// const employeesNames = [];
// const employeesSalaries = [];

// for(const employeeId in employees) {
//   const employee = employees[employeeId];
//   const name = employee.name.split(' ')[0];
//   employeesNames.push(name);
//   employeesSalaries.push(employee.salary);
// }

// console.log('employeesNames', employeesNames);
// console.log('employeesSalaries', employeesSalaries);



// // // вправа 3 

// // // суму всіх зарплат
// // // найвища зарплата
// // // найнижча зарплата
// // const salaries = [2000, 3000, 1500, 6000, 3000];

// // let result = salaries.reduce(function(sum, elem) {
// // 	return sum + elem;
// // }, 0);
// // console.log(result);


// // function max(salaries) {
// //     let max = salaries[0];
// //     salaries.forEach(function(e) {
// //       if (e > max) max = e;
// //     });
// //     return max;
// //   }
// //   console.log(max(salaries));

// //   function min(salaries) {
// //     let min = salaries[0];
// //     salaries.forEach(function(e) {
// //       if (e < min) min = e;
// //     });
// //     return min;
// //   }
// //   console.log(min(salaries));

// вариант2 задачи 3:
// const salaries = [2000, 3000, 1500, 6000, 3000];

// let sum = 0;
// let highestSalary = salaries[0];
// let lowestSalary = salaries[0];

// for(const salary of salaries) {
//   sum += salary;
//   if(salary > highestSalary) highestSalary = salary;
//   if(salary < lowestSalary) lowestSalary = salary;
// }

// console.log(sum, highestSalary, lowestSalary);


// // // Вправа 4
// // // Для практики у нас є подібний приклад для вас, за винятком того,
// // //  що цього разу вхідними параметрами є об’єкт, а не масив.
// // // Знову ж таки, ваше завдання полягає в тому, щоб знайти та 
// // // відобразити в консолі: суму всіх зарплат, найвища зарплата, найнижча зарплата

// // const persons = {
// //   john: 2000,
// //   amanda: 3000,
// //   thomas: 1500,
// //   james: 6000,
// //   claire: 3000
// // };

// // let sum = 0;
// // let highestSalary = persons.john;
// // let lowestSalary = persons.john;

// // for(const personId in persons) {
// //     const personSalery = persons[personId];
// //     sum += personSalery;
// //     if(personSalery > highestSalary) highestSalary = personSalery;
// //     if(personSalery < lowestSalary) lowestSalary = personSalery;
// // }
// // console.log(sum, highestSalary, lowestSalary);

// // aбо
// const persons = {
//     john: 2000,
//     amanda: 3000,
//     thomas: 1500,
//     james: 6000,
//     claire: 3000
//   }
//   // covert obj to array of its values ([2000, 3000, 1500...])
//   const salaries = Object.values(persons);
  
//   let sum = 0;
//   let highestSalary = salaries[0];
//   let lowestSalary = salaries[0];
  
//   for(const salary of salaries) {
//     sum += salary;
//     if(salary > highestSalary) highestSalary = salary;
//     if(salary < lowestSalary) lowestSalary = salary;
//   }
  
//   console.log(sum, highestSalary, lowestSalary);


// // // задача 5
// const tags = ['news', 'code', 'news', 'sport', 'hot', 'news', 'code'];

// const tagsOrign = [];
// let tagResult = {};
// for (let tag in tags) {
//     // console.log('tag', tags[tag]);
//     if (tags[tag] in tagResult){
//         tagResult[tags[tag]]['appearances'] += 1;
//     } else {
//         tagResult[tags[tag]] = {appearances: 1};
//     } 
// }
// console.log('tagResult', tagResult);




// // функції Завдання 4
// // Напишіть функцію filterEmployees, яка прийматиме два аргументи:
// // масив з об'єктами зі структурою {name: 'Firstname and Surname, salary: salary-amount}
// // мінімальне значення діапазону,
// // максимальне значення діапазону.

// function filterEmployees(arr, min, max) {
//     const filteredArray = [];
  
//     for(const empl of employees) {
//       if(empl.salary > min && empl.salary < max) {
//         filteredArray.push(empl);
//       }
//     }
  
//     return filteredArray;
//   }
// const employees = [
//     { name: 'Amanda Doe', salary: 3000 },
//     { name: 'John Doe', salary: 4000 },
//     { name: 'Claire Downson', salary: 2000 },
//     { name: 'Freddie Clarkson', salary: 6000 },
//     { name: 'Thomas Delaney', salary: 8200 }
//   ];
//   const filteredEmployees = filterEmployees(employees, 2000, 8000);
//   console.log(filteredEmployees);


// // Вправа 5
// // Напишіть функцію, яка приймає один аргумент (будь-який об’єкт), а потім
// //  відображає інформацію про всі властивості цього об’єкту в консолі.
// const obj = {
//     firstName: 'John',
//     lastName: 'Doe'
//   }
  
//   function showObjectParams(obj) {
//     for(const paramId in obj) {
//       const param = obj[paramId];
//       console.log(paramId + ': ' + param);
//     }
//   }
//   showObjectParams(obj);



// // Вправа 6
// // Напишіть функцію forEach, яка прийматиме два аргументи:
// // будь-який масив,
// // будь-яку функцію зворотного виклику.

// const arr = ['John', 'Amanda', 'Thomas'];

// function forEach(arr, cb) {
//     for(let elem of arr){
//         cb(elem);
//     }
// }
// forEach(arr, function(item) { console.log(item); });



// // вправа 7
// // функція яка прийматиме ім’я та прізвище 
// // в аргументі та повертатиме виправлений вигляд.
// function formatName(name){
//     const firstNameAndLastName = name.split(' ');
//     let firstName = firstNameAndLastName[0];
//     let lastName = firstNameAndLastName[1];

//     firstName = firstName.charAt(0).toUpperCase() + firstName.substr(1).toLowerCase()
//     lastName = lastName.charAt(0).toUpperCase() + lastName.substr(1).toLowerCase()
//     return firstName + ' ' + lastName;
// }
// console.log(formatName('aMANDa DOE'));
// console.log(formatName('AMANDA DOE'));
// console.log(formatName('john DOE'));



// // вправа 8
// // Завдання функції — пройти через усі числа в межах заданого 
// // діапазону та повернути масив, який міститиме лише парні числа.

// function getEvensInRange(start, end) {
//     const evensArray = [];
  
//     for(let i = start; i <= end; i++) {
//       if(i%2 === 0) evensArray.push(i);
//     }
  
//     return evensArray;
//   }
//   console.log(getEvensInRange(0, 9)); // повертає [0, 2, 4, 6, 8]
//   console.log(getEvensInRange(7, 12)); // повертає [8, 10, 12]

// // вправа 9 
// // відфільтрувати все що ділеться на 2
// function filter(arr, cb) {
//     const filteredArray = [];
  
//     for(const elem of arr) {
//       if(cb(elem)) filteredArray.push(elem);
//     }
  
//     return filteredArray;
//   }
//   console.log(filter([10, 6, 7], function(item) { return item%2 === 0 }));






// // переменные и строгий режим
// let numder = 5; 
// const leftBorderWidth = 1;

// numder = 10;
// // leftBorderWidth = 2; //'leftBorderWidth' which is a constant.
// console.log(numder);  // 10

// const obj = {
//     a: 50
// };
// obj.a = 10;
// console.log(obj); // { a: 10 }





/* ***********************урок19***************
// Задание на урок:

// 1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
// 'Сколько фильмов вы уже посмотрели?'

// 2) Создать объект personalMovieDB и в него поместить такие свойства:
//     - count - сюда передается ответ на первый вопрос
//     - movies - в это свойство поместить пустой объект
//     - actors - тоже поместить пустой объект
//     - genres - сюда поместить пустой массив
//     - privat - в это свойство поместить boolean(логическое) значение false

// 3) Задайте пользователю по два раза вопросы:
//     - 'Один из последних просмотренных фильмов?'
//     - 'На сколько оцените его?'
// Ответы стоит поместить в отдельные переменные
// Записать ответы в объект movies в формате: 
//     movies: {
//         'logan': '8.1'
//     }

// Проверить, чтобы все работало без ошибок в консоли */

// const numberOfFilms =  +prompt('Сколько фильмов вы уже посмотрели?', ''); //1 создали переменную

// // 2 создаем обьект 
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// // 3 задаем вопросы
// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);





/* ***********************урок20**************** условия */

// if(4 == 9){
//     console.log('Ok');
// } else {
//     console.log('Error');
// }


// const num = 50;

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('A lot');
// } else {
//     console.log('ok');
// }

// // синтаксис условий при помощи тернарного оператора
// const num2 = 50;
// (num2 === 50) ? console.log('ok') : console.log('Error');


// // cокращаем if else с помощью switch (проверяет только на строгое соответствие!!)
// const num3 = 50;
// switch (num3) {
//     case 49:
//         console.log('no!');
//         break;
//     case 100:
//         console.log('no!');
//         break;
//     case 50:
//         console.log('ok!');
//         break;  
//     default: 
//         console.log('not this time');
//         break;  
// }






/* ***********************урок21. (д) Логические операторы****************  */

// оператор (И) &&
// const humburger = true;
// const fries = true;

// if (humburger && fries) {
//     console.log('Я сыт');
// }
// console.log((humburger && fries));


// const humburger = 3;
// const fries = 1;
// const cola = 0;
// if (humburger === 3 && cola && fries === 1) {
//     console.log('Все сыты');
// } else {
//     console.log('мы уходим');
// }


// const humburger = 3;
// const fries = 1;
// const cola = 0;
// console.log(humburger === 3 && cola && fries === 1);


// оператор или
// const humburger = 3;
// const fries = 0;
// const cola = 0;
// if (humburger || cola || fries) {
//     console.log('Все сыты');
// } else {
//     console.log('мы уходим');
// }


// let johnReport, alexReport, samReport, mariaReport = 'done';
// console.log(johnReport || alexReport || samReport || mariaReport);


// homework 21
// console.log( NaN || 2 || undefined ); //2
// console.log( NaN && 2 && undefined ); //NaN
// console.log( 1 && 2 && 3 ); //3
// console.log( !1 && 2 || !3 ); //false
// console.log( 25 || null && !3 ); //25
// console.log( NaN || null || !3 || undefined || 5); //5
// console.log( NaN || null && !3 && undefined || 5); //5
// console.log( 5 === 5 && 3 > 1 || 5); //true

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!') //Done!
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }


// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }

/* **********************22.Цикл***************  */
// // Цикл while
// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// // Цикл do
// let num = 50;
// do {
//     console.log(num);
//     num++;
// }
// while(num < 55);

// // Цикл for
// let num = 50;

// for (let i = 1; i < 8; i++) {
//     // console.log(i);
//     console.log(num);
//     num++;
// } // в консоле будет 50 51 52 53 54 55 56 (повторятся цикл будет 7 раз (т.к і меньше 8))


// continue; break;

// let num = 50;

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         break;
//     }
//     console.log(i);
// } // в консоле 1-5

// let num = 50;

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         continue;
//     }
//     console.log(i);
// } // в консоле 1-5 7-9 (6 пропускаем)
