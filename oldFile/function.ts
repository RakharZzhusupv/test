const prize = (salary: number) => {
  let sal: number = salary;
  let bonusProc: number;
  if (sal <= 300) {
    bonusProc = 0.15;
  } else if (sal > 300 && sal <= 400) {
    bonusProc = 0.1;
  } else {
    bonusProc = 0.2;
  }

  const bonus: number = salary * bonusProc;

  return `добавка премии ${
    bonusProc * 100
  }% от оклада. Итоговая премия: ${bonus} тенге.`;
};

const getEffect = (N: number, K: number, salary: number) => {
  let effect: number = N / K;
  if (effect >= 0.5) {
    console.log(prize(salary));
    return "сотрудник эффективен";
  } else if (effect >= 0.3) {
    return "улучшить результаты";
  } else {
    return "не эффективен";
  }
};

// Пример вызова функции getEffect с передачей оклада в размере 500
console.log(getEffect(2, 4, 120000));
