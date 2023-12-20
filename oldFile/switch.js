"use strict";
var Colors;
(function (Colors) {
    Colors["Red"] = "red";
    Colors["Green"] = "green";
    Colors["Blue"] = "blue";
})(Colors || (Colors = {}));
let selectedColor = Colors.Blue;
console.log(selectedColor);
// Абонентская плата
var Operator;
(function (Operator) {
    Operator["Beeline"] = "Beeline";
    Operator["Tele2"] = "Tele2";
    Operator["Kcell"] = "Kcell";
    Operator["Active"] = "Active";
})(Operator || (Operator = {}));
function getConnectionCost(operator) {
    switch (operator) {
        case Operator.Beeline:
            return "Стоимость подключения Beeline: 1000 тенге";
        case Operator.Tele2:
            return "Стоимость подключения Tele2: 800 тенге";
        case Operator.Kcell:
            return "Подключение к Kcell бесплатное!";
        case Operator.Active:
            return "Стоимость подключения Active: 1200 тенге";
        default:
            return "Неверный оператор связи";
    }
}
let selectedOperator = Operator.Active;
let connectionCost = getConnectionCost(selectedOperator);
console.log(connectionCost);
// Соц сеть
var UserStatus;
(function (UserStatus) {
    UserStatus["Novice"] = "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043D\u043E\u0432\u0438\u0447\u043E\u043A";
    UserStatus["Guardian"] = "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0441\u0442\u0440\u0430\u0436";
    UserStatus["Master"] = "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043C\u0430\u0433\u0438\u0441\u0442\u0440";
})(UserStatus || (UserStatus = {}));
function getUserStatus(yearsRegistered) {
    let status;
    switch (true) {
        case yearsRegistered < 2:
            status = UserStatus.Novice;
            break;
        case yearsRegistered < 4:
            status = UserStatus.Guardian;
            break;
        default:
            status = UserStatus.Master;
            break;
    }
    return status;
}
// Пример использования
const yearsRegistered = 4;
const userStatus = getUserStatus(yearsRegistered);
console.log(userStatus);
var Statuses;
(function (Statuses) {
    Statuses[Statuses["CREATED"] = 0] = "CREATED";
    Statuses[Statuses["SENT"] = 1] = "SENT";
    Statuses[Statuses["RECEIVED"] = 2] = "RECEIVED";
    Statuses[Statuses["COMPLETED"] = 3] = "COMPLETED";
})(Statuses || (Statuses = {}));
let checkStatus = (currentStatus) => {
    switch (currentStatus) {
        case Statuses.CREATED:
            return "заявка создана сотрудником и передана руководителю";
        case Statuses.SENT:
            return "руководитель отправил заявку на исполнение";
        case Statuses.RECEIVED:
            return "сотрудник подтверждает заявку";
        case Statuses.COMPLETED:
            return "бухгалтер подтверждает завершение заявки";
        default:
            return "Такого статуса нет";
    }
};
let statusserver = Statuses.SENT;
console.log(checkStatus(statusserver));
