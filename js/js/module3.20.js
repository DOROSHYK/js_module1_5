const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];
// console.log(products

//     )

function calculateTotalPrice(productName) {
  // Пиши код ниже этой строки
  let calculatePrice = 0;
  for (const product of products) {
    console.log(product);
    if (product.name === productName) {
      calculatePrice = product.price * product.quantity;

    }

  }
 console.log(calculateTotalPrice('Сканер'))
  // Пиши код выше этой строки
}
