let totalVisitors: number = 385;
let day1Visitors: number = 95;
let day2Visitors: number = day1Visitors * 2;
let day3Visitors: number = totalVisitors - day1Visitors - day2Visitors;

console.log(`1  В третий день её посетили ${day3Visitors} человек.`);
//end;

let totalVino: number = 1200;
let school: number = 200;
let Daycare: number = 1000;
let boxesWeight: number = 10;
let boxesSentToDaycare: number = Daycare / boxesWeight;

console.log(
  `2  В детсий сад было отправлено ${boxesSentToDaycare} ящиков винограда.`
);
//end;

let lengt: number = 70;
let width: number = 40;
let area: number = lengt * width;
let perimeter: number = 2 * (lengt + width);

console.log(`3  Площадь участка: ${area}кв.м`);
console.log(`   Периметр участка: ${perimeter}м.`);
//end;

let pagesBook1: number = 236;
let pagesBook2: number = 148;
let pagesPerDay: number = 8;

let totalPages: number = pagesBook1 + pagesBook2;
let daysToRead: number = totalPages / pagesPerDay;

console.log(`4  Для прочтения этих книг нужно ${daysToRead} дней`);
//end;

//домашка;
let bmw: number = Math.floor(Math.random() * (25 - 15 + 1) + 15);
let audi: number = Math.floor(Math.random() * (25 - 15 + 1) + 15);

// Задача 1: Найти сумму машин
let sumOfCars: number = bmw + audi;
console.log(`Сумма машин: ${sumOfCars}`);

// Задача 2: Найти разность машин
let differenceOfCars: number = bmw - audi;
console.log(`Разность машин: ${differenceOfCars}`);

// Задача 3: Найти деление машин
let divisionOfCars: number = bmw / audi;
console.log(`Деление машин: ${divisionOfCars}`);

// Задача 4: Найти произведение марок машин
let productOfCars: number = bmw * audi;
console.log(`Произведение марок машин: ${productOfCars}`);
