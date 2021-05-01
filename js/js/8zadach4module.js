const pizzaPalace = {
  company: 'Pizza Palace',
};

const burgerShack = {
  company: 'Burger Shack',
};

function composeMessage(customerName) {
  console.log( `${customerName}, всегда рады вас видеть в «${this.company}».`);
}
// Пиши код ниже этой строки
console.log(composeMessage());
const pizzaPalaceComposer = composeMessage.bind(pizzaPalace);
const pizzaPalaceMessage = pizzaPalaceComposer('Манго');

// const burgerShackComposer = composeMessage;
// const burgerShackMessage = burgerShackComposer('Поли');

// const greet = function (guest) {
// console.log(`${guest}, welcome to ${this.name}!`);
// };

// const hotel = { name: 'Resort Hotel' };

// const hotelGreeter = greet.bind(hotel, 'Mango');

// hotelGreeter(); 