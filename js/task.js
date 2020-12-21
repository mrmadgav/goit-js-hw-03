// создать объект каталог у которого были бы следующие возможности
// добавить, удалить, создать, изменить, вернуть количество, фильтрация по типу.

const catalog = {
  list: [],

  add: function (product) {
    this.list.push(product);
  },
  remove: function (id) {
    for (let i = 0; i < this.list.length; i++)
      if (product.id === id) this.list.splice(i, 1);
  },
  create: function (name, type, quantity) {
    return { id: this.list.length + 1, name, type, quantity };
  },
  change: function (id, props) {
    let index;
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].id === id) {
        index = i;
        break;
      }
    }
    for (let key in props) this.list[index][key] = props[key];
  },

  filterType: function (type) {
    let response = [];
    for (let product of this.list)
      if (product.type === type) response.push(product);
    return response;
  },
  count: function () {
    let total = 0;
    for (let product of this.list) total += product.quantity;
    return total;
  },
};
let product = catalog.create("apple", "phone", 1000);
catalog.add(product);
let product2 = catalog.create("meizu", "TV", 2000);
// console.log(catalog.create("apple", "phone", 1000));
// catalog.add(product);

catalog.add(product2);

// catalog.remove(1);
console.log(catalog.list);
catalog.change(2, { name: "samsung" });
console.log(catalog.list);

console.log(catalog.filterType("TV"));
console.log(catalog.count());
