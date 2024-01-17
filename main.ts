// import { seasons } from "./src/scripts/data";
// import { TSeason } from "./src/scripts/types";
// import { TNewHired } from "./src/scripts/types";

// // [1 подзадача]

// let maxIncome: TSeason | null = null;
// let minIncome: TSeason | null = null;
// let maxHired: TSeason | null = null;
// let maxDismissed: TSeason | null = null;

// let maxIncomeValue = Number.MIN_SAFE_INTEGER;
// let minIncomeValue = Number.MAX_SAFE_INTEGER;
// let maxHiredValue = Number.MIN_SAFE_INTEGER;
// let maxDismissedValue = Number.MIN_SAFE_INTEGER;

// Object.entries(seasons).forEach(([season, seasonInfo]) => {
//   // Находим самый прибыльный сезон
//   if (seasonInfo.income > maxIncomeValue) {
//     maxIncomeValue = seasonInfo.income;
//     maxIncome = seasonInfo;
//   }

//   // Находим сезон с самым низким доходом
//   if (seasonInfo.income < minIncomeValue) {
//     minIncomeValue = seasonInfo.income;
//     minIncome = seasonInfo;
//   }

//   // Находим сезон с наибольшим количеством новых сотрудников
//   if (seasonInfo.newHired.length > maxHiredValue) {
//     maxHiredValue = seasonInfo.newHired.length;
//     maxHired = seasonInfo;
//   }

//   // Находим сезон с наибольшим количеством увольнительных
//   if (seasonInfo.dismissed > maxDismissedValue) {
//     maxDismissedValue = seasonInfo.dismissed;
//     maxDismissed = seasonInfo;
//   }
// });

// // Выводим информацию
// console.log("Самый прибыльный сезон:", maxIncome);
// console.log("Сезон с самым низким доходом:", minIncome);
// console.log("Сезон с наибольшим количеством новых сотрудников:", maxHired);
// console.log("Сезон с наибольшим количеством увольнительных:", maxDismissed);

// // [2 подзадача]

// let maxNewHiredDepartment: string | null = null;
// let maxExperiencedDepartment: string | null = null;
// let employeesWithClosedProjectsInfo: { name: string; experience: number }[] =
//   [];
// let departmentWithMaxAverageSalary: string | null = null;

// let maxNewHiredCount = 0;
// let maxExperiencedCount = 0;
// let maxAverageSalary = 0;

// Object.entries(seasons).forEach(([season, seasonInfo]) => {
//   const newHired: TNewHired[] = seasonInfo.newHired;

//   // Находим отдел с наибольшим количеством новых сотрудников
//   if (newHired.length > maxNewHiredCount) {
//     maxNewHiredCount = newHired.length;
//     maxNewHiredDepartment = newHired[0].department;
//   }

//   // Находим отдел с наибольшим количеством сотрудников с опытом от 3 лет
//   const experiencedEmployees = newHired.filter(
//     (employee) => employee.experience > 3
//   );
//   if (experiencedEmployees.length > maxExperiencedCount) {
//     maxExperiencedCount = experiencedEmployees.length;
//     maxExperiencedDepartment = experiencedEmployees[0].department;
//   }

//   // Собираем информацию о сотрудниках с закрытыми проектами
//   const closedProjectsEmployees = newHired.filter(
//     (employee) => employee.exProject > 0
//   );
//   employeesWithClosedProjectsInfo = employeesWithClosedProjectsInfo.concat(
//     closedProjectsEmployees.map((employee) => ({
//       name: employee.name,
//       experience: employee.experience,
//     }))
//   );

//   // Находим отдел с самой большой средней зарплатой
//   const averageSalary =
//     newHired.reduce((sum, employee) => sum + employee.salary, 0) /
//     newHired.length;
//   if (averageSalary > maxAverageSalary) {
//     maxAverageSalary = averageSalary;
//     departmentWithMaxAverageSalary = newHired[0].department;
//   }
// });

// // Выводим информацию
// console.log(
//   "Отдел с наибольшим количеством новых сотрудников:",
//   maxNewHiredDepartment
// );
// console.log(
//   "Отдел с наибольшим количеством сотрудников с опытом от 3 лет:",
//   maxExperiencedDepartment
// );
// console.log(
//   "Информация о сотрудниках с закрытыми проектами:",
//   employeesWithClosedProjectsInfo
// );
// console.log(
//   "Отдел с самой большой средней зарплатой:",
//   departmentWithMaxAverageSalary
// );

/////////////////////////////////////////////////////////////////////////////////////////////////
// type TUser = {
//   name:string
//   age:number

// }
// const getResult = (status: boolean) =>{
//         return new Promise((resolve, reject) => {
//           setTimeout (()=>{
//           let user:TUser = {
//               name:"test",
//               age:17
//           }
//             if(status){
//               resolve("user")
//             }
//             else{
//               reject("Ошибка выполнения")
//             }

//           }, 1000)
//         })
// }
// const getInfoUser = async () =>{
//   let user = await (getResult(true)) as TUser
//   console.log("Инфа о пользователе: ", user)
// }
// getInfoUser().catch((error)=> { console.log(error)})

// fetch("https://jsonplaceholder.typicode.com/postd/1")
// .then(data =>{
//   return data.json()
// })
//  .then(newData => {
//   console.log (newData)
//  });

////////////////////////////////////////////////////////////////////////////////////////////


// type TUsser = {
//   postId: number;
//   id: number;
//   name: string;
//   email: string;
//   body: string;
// };
// const getData = () => {
//   return fetch("https://jsonplaceholder.typicode.com/posts/1/comments");
// };
// const formatData = async () => {
//   let data = (await (await getData()).json()) as TUsser[];
//   let longstBodyUser: TUsser | null = null;
//   data.forEach((item) => {
//     if (!longstBodyUser || item.body.length > longstBodyUser.body.length) {
//       longstBodyUser = item;
//     }
//   });
//   return longstBodyUser;
// };
// formatData()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//////////////////////////////////////////////////////////////////////////////////////

