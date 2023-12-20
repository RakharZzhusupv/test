//let num1: number = 5;
//let num2: number = 1;

//if (num1 > num2){
//  console.log (`Наиболшее число: ${num1}`);
//}
//else {
//  console.log(`Наиболшее число: ${num2}`);
//}
//-------------------------------------------------
//Оценка;
let projects: number = 12;
let estimation: number;
if (projects >= 1 && projects < 5) {
  estimation = 1;
  console.log(`Оценка:1`);
} else if (projects >= 5 && projects < 10) {
  estimation = 2;
  console.log(`Оценка:2`);
} else if (projects >= 10 && projects < 15) {
  estimation = 3;
  console.log(`Оценка:3`);
} else if (projects >= 15 && projects < 20) {
  estimation = 4;
  console.log(`Оценка:4`);
} else if (projects >= 20 && projects < 20) {
  estimation = 5;
  console.log(`Оценка:5`);
} else {
  estimation = 0;
  console.log(`Некорректные данные для оценки`);
}

//Результаты;
if (estimation >= 4 && estimation < 5) {
  console.log(`Сотрудник Эффективен.`);
} else if (estimation >= 3 && estimation < 4) {
  console.log(`Сотрудник должен улучшить результаты`);
} else if (estimation >= 2 && estimation < 3) {
  console.log(`Сотрудник должен переквалифицироватся`);
} else if (estimation >= 1 && estimation < 2) {
  console.log(`Сотрудник не эффективен`);
} else {
  console.log(`Некорректные данные для итоговой оценки`);
}
