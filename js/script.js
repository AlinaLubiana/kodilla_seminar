"use strict";
// вправа 1
// const names = ['Kasia', 'Tomek', 'Amanda', 'Maja'];


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


// задача 5
const tags = ['news', 'code', 'news', 'sport', 'hot', 'news', 'code'];

