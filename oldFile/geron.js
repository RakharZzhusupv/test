"use strict";
let totalVisitors = 385;
let day1Visitors = 95;
let day2Visitors = day1Visitors * 2;
let day3Visitors = totalVisitors - day1Visitors - day2Visitors;
console.log(`1  В третий день её посетили ${day3Visitors} человек.`);
//end;
let totalVino = 1200;
let school = 200;
let Daycare = 1000;
let boxesWeight = 10;
let boxesSentToDaycare = Daycare / boxesWeight;
console.log(`2  В детсий сад было отправлено ${boxesSentToDaycare} ящиков винограда.`);
//end;
let lengt = 70;
let width = 40;
let area = lengt * width;
let perimeter = 2 * (lengt + width);
console.log(`3  Площадь участка: ${area}кв.м`);
console.log(`   Периметр участка: ${perimeter}м.`);
//end;
let pagesBook1 = 236;
let pagesBook2 = 148;
let pagesPerDay = 8;
let totalPages = pagesBook1 + pagesBook2;
let daysToRead = totalPages / pagesPerDay;
console.log(`4  Для прочтения этих книг нужно ${daysToRead} дней`);
//end;
//домашка;
let bmw = Math.floor(Math.random() * (25 - 15 + 1) + 15);
let audi = Math.floor(Math.random() * (25 - 15 + 1) + 15);
// Задача 1: Найти сумму машин
let sumOfCars = bmw + audi;
console.log(`Сумма машин: ${sumOfCars}`);
// Задача 2: Найти разность машин
let differenceOfCars = bmw - audi;
console.log(`Разность машин: ${differenceOfCars}`);
// Задача 3: Найти деление машин
let divisionOfCars = bmw / audi;
console.log(`Деление машин: ${divisionOfCars}`);
// Задача 4: Найти произведение марок машин
let productOfCars = bmw * audi;
console.log(`Произведение марок машин: ${productOfCars}`);
