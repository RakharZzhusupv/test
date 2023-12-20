//Электронные часы;
let n: number = 200;

let minutes: number = 59;
let hours: number = 23;

//Количество прошедших минут
let minutesPassed: number = n % 60;
//Количество прошедших часов
let hoursPassed: number = Math.floor(n / 60);

console.log(`1  ${hoursPassed} : ${minutesPassed}`);

//Гипотенуза;
let a: number = 3;
let b: number = 4;

let hypotenuse: number = Math.sqrt(a ** 2 + b ** 2);

console.log(`2  Гипотенуза треугольника с катетами ${a} и ${b} равна: ${hypotenuse}`);

