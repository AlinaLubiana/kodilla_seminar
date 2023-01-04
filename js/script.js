"use strict";

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