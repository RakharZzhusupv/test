enum Colors {
  Red = "red",
  Green = "green",
  Blue = "blue",
}

let selectedColor: Colors = Colors.Blue;
console.log(selectedColor);

// Абонентская плата
enum Operator {
  Beeline = "Beeline",
  Tele2 = "Tele2",
  Kcell = "Kcell",
  Active = "Active",
}

function getConnectionCost(operator: Operator): string {
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

let selectedOperator: Operator = Operator.Active;
let connectionCost: string = getConnectionCost(selectedOperator);
console.log(connectionCost);

// Соц сеть
enum UserStatus {
  Novice = "Пользователь новичок",
  Guardian = "Пользователь страж",
  Master = "Пользователь магистр",
}

function getUserStatus(yearsRegistered: number): UserStatus {
  let status: UserStatus;

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
const yearsRegistered: number = 4;
const userStatus: UserStatus = getUserStatus(yearsRegistered);
console.log(userStatus);

enum Statuses {
  CREATED,
  SENT,
  RECEIVED,
  COMPLETED,
}

let checkStatus = (currentStatus: Statuses) => {
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
let statusserver: Statuses = Statuses.SENT;
console.log(checkStatus(statusserver));
