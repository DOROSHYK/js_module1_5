// 6 задача

// function Storage(items) {
//     this.items = items;
    
// }
// Storage.prototype.getItems = function () {
//     console.log(this.items);
// };
// // console.log(Storage.prototype);

// Storage.prototype.addItem = function (newItem) {
//     console.log(this.items.push(newItem));
// };

// Storage.prototype.removeItem = function (item) {
//     console.log(this.items.splice(1, 1));
// };

// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
// // console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// // storage.addItem('Дроид');
// // console.log(storage.addItem()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер');
// console.log(storage.removeItem()); // ["Нанитоиды", "Антигравитатор", "Дроид"]


// 7 задача

// function StringBuilder(baseValue) {
//     this.value = baseValue;
// };

// StringBuilder.prototype.getValue = function () {
//    return this.value;
// };

// StringBuilder.prototype.padEnd = function (str) {
// this.value = this.value + str;
// };
// StringBuilder.prototype.padStart = function (str) {
//  this.value =   str + this.value ;
// };

// StringBuilder.prototype.padBoth = function (str) {
//  this.value = str + this.value + str;
// };



// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='