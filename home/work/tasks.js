"use strict";
//Электронные часы;
let n = 200;
let minutes = 59;
let hours = 23;
//Количество прошедших минут
let minutesPassed = n % 60;
//Количество прошедших часов
let hoursPassed = Math.floor(n / 60);
console.log(`1  ${hoursPassed} : ${minutesPassed}`);
//Гипотенуза;
let a = 3;
let b = 4;
let hypotenuse = Math.sqrt(a ** 2 + b ** 2);
console.log(`2  Гипотенуза треугольника с катетами ${a} и ${b} равна: ${hypotenuse}`);
