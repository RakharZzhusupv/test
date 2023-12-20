"use strict";
function calculateSalary(totalHours, overtimeHours, weekendHours, holidayHours, vacationHours) {
    // Расчет базовой зарплаты
    const hourlyRate = 2000; // Почасовая ставка сотрудника
    const baseSalary = totalHours * hourlyRate;
    // Расчет надбавки за переработку
    function calculateOvertimeBonus(overtimeHours, bonusPercentage) {
        return (overtimeHours * hourlyRate * bonusPercentage) / 100;
    }
    const weekendBonusPercentage = 15;
    const holidayBonusPercentage = 20;
    const vacationBonusPercentage = 30;
    let bonus = 0;
    let overtimeType = "";
    if (overtimeHours > 20) {
        bonus = calculateOvertimeBonus(overtimeHours, weekendBonusPercentage);
        overtimeType = "выходные";
    }
    else if (10 <= overtimeHours && overtimeHours <= 20) {
        bonus = calculateOvertimeBonus(overtimeHours, weekendBonusPercentage);
        overtimeType = "выходные";
    }
    else if (overtimeHours > 10) {
        bonus = calculateOvertimeBonus(overtimeHours, holidayBonusPercentage);
        overtimeType = "праздничные";
    }
    else if (1 <= overtimeHours && overtimeHours <= 10) {
        bonus = calculateOvertimeBonus(overtimeHours, vacationBonusPercentage);
        overtimeType = "отпускные";
    }
    else {
        overtimeType = "без переработки";
    }
    // Расчет итоговой зарплаты
    const totalSalary = baseSalary + bonus;
    // Вывод результатов
    console.log(`Начальная зарплата: ${baseSalary}`);
    console.log(`Надбавка за переработку в ${overtimeType}: ${bonus}`);
    console.log(`Итоговая зарплата: ${totalSalary}`);
}
// Использования функции
// 1)Общее количество отработанных часов в месяц;
// 2)Количество часов переработки;
// 3)Количество часов переработки в выходные;
// 4)Количество часов переработки в праздничные дни;
// 5)Количество часов переработки в отпускные дни;
calculateSalary(160, 10, 5, 3, 8);
