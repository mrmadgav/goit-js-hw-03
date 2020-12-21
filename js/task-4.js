// Задание 4
// Напиши функцию countTotalSalary(employees) принимающую объект зарплат. Функция считает общую сумму зарплаты работников и возращает ее. Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата".

const countTotalSalary = function (employees) {
  let totalSalary = 0;
  for (let key in employees) {
    totalSalary += employees[key];
  }
  return totalSalary;
};

// твой код
//   const Salary = Object.values(employees);

//   let totalSalary = 0;

//   for (const value of Salary) {
//     totalSalary += value;
//   }
//   return totalSalary;
// };

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
); // 400
