"use strict";
let initialCost = 5000;
let condition = "Аварийное";
let finalCost = 0;
if (condition === "новый") {
    finalCost = initialCost;
}
else if (condition === "б/у") {
    finalCost = initialCost * 0.85;
}
else if (condition === "Аварийное") {
    finalCost = initialCost * 0.25;
}
else {
    console.error(`Неверное состояние товара`);
}
console.log(`Стоимоть товара с учетом надбавки - ${finalCost} тенге при состонии ${condition}`);
