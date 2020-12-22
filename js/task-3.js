// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого продуктивного (который выполнил больше всех задач). Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате "имя":"кол-во задач".

const findBestEmployee = function (employees) {
  // твой код
  // console.log(employees);
  // let values = Object.values(employees);
  // return Object.keys(employees)[values.indexOf(Math.max(...values))];

  let bestEmployee = 0;
  for (let key in employees)
    if (!(employees[key] <= employees[bestEmployee])) {
      // console.log(employees[key]);
      // console.log(key);
      // console.log(bestEmployee);
      bestEmployee = key;
    }
  return bestEmployee;
};

// const employee = Object.keys(employees);
// const values = Object.values(employees);
// for (key in employees) {
//   console.log(employees[key] );
// const maxTasks = values.indexOf(Math.max(...values));
// return employee[maxTasks];
// }
// };
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
