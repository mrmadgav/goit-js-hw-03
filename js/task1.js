const key = "person";
const height = "height";
const getKey = function () {
  return "age";
};
const hobby = function () {
  return "hobby";
};

// Computed properties
const object = {
  [key]: "Жека",
  [getKey()]: 32,
  [height]: "170",
  [hobby()]: "chess",
};

console.log(object); // {person: 'Mango', age: 2}

const object1 = {
  [key]: "Димас",
  [getKey()]: 31,
  [height]: "175",
};

console.log(object1);

for (const key in object) {
  console.log("Value: ", object[key]);
}
for (const key in object1) {
  console.log("Value: ", object1[key]);
}

const keys = Object.keys(object);
console.log(keys);
const values = Object.values(object);
console.log(values);
const entries = Object.entries(object);
console.log(entries);

for (const key in object) {
    console.log('Value: ', object[key]);
  }



/*
 * На каждой итерации по entries выберем первый элемент подмассива (ключ)
 * в переменную key, а второй (значение) в переменную value
 */
for (const entry of entries) {
  const key = entry[0];
  const value = entry[1];

  console.log(`${key}: ${value}`);
}

for (const entry of entries) {
    const key = entry[0];
    const value = entry[1];
  
    console.log(`${key}: ${value}`);
  }
