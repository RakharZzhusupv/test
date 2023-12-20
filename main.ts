import { seasons } from "./src/scripts/data";
import { TSeason } from "./src/scripts/types";
import { TNewHired } from "./src/scripts/types";

let maxIncome: TSeason | null = null;
let maxSeasonName: string | null = null;
Object.entries(seasons).forEach(([season, seasonInfo]) => {
  if (!maxIncome || maxIncome.income < seasonInfo.income) {
    maxIncome = seasonInfo;
    maxSeasonName = season;
  }
});

console.log("Максимальный:", maxSeasonName, maxIncome);

let minIncome: TSeason | null = null;
let minSeasonName: string | null = null;
Object.entries(seasons).forEach(([season, seasonInfo]) => {
  if (!minIncome || seasonInfo.income < minIncome.income) {
    minIncome = seasonInfo;
    minSeasonName = season;
  }
});

console.log("Минимальный:", minSeasonName, minIncome);

let maxHired: TSeason | null = null;
let maxHiredSeason: string | null = null;
Object.entries(seasons).forEach(([season, seasonInfo]) => {
  if (!maxHired || seasonInfo.hired > maxHired.hired) {
    maxHired = seasonInfo;
    maxHiredSeason = season;
  }
});

console.log("Больше всего увольнительных за сезон:", maxHiredSeason, maxHired);

let maxDismissed: TSeason | null = null;
let maxDisSeason: string | null = null;
Object.entries(seasons).forEach(([season, seasonInfo]) => {
  if (!maxDismissed || seasonInfo.dismissed > maxDismissed.dismissed) {
    maxDismissed = seasonInfo;
    maxDisSeason = season;
  }
});

console.log("Больше всего новых за сезон:", maxDisSeason, maxDismissed);

let maxDepartment: string | null = null;
let maxNewHiredCount: number = 0;
let maxNewHiredNames: string[] = [];

Object.entries(seasons).forEach(([season, seasonInfo]) => {
  const newHired = seasonInfo.newHired;
  if (newHired.length > maxNewHiredCount) {
    maxDepartment = newHired[0].department;
    maxNewHiredCount = newHired.length;
    maxNewHiredNames = newHired.map((employee) => employee.name);
  }
});

console.log("Отдел:", maxDepartment);
console.log("Количество:", maxNewHiredCount);
console.log("Имена:", maxNewHiredNames.join(", "));
