// const fn = function (message, callback) {

//     console.log(message);
//     console.log(callback);
//     fnA(100);
// }
// const fnA = function (number) {
//     console.log('fna function', number);
// }


// fn('ioioioio', fnA);

// const doit = function (a, b, callback) {
//     const doIt = callback(a, b)
//   console.log(doIt);
// }

// const plus = function (x, y) {
//     return x + y;
// }


// const sub = function (x, y) {
//     return x * y;
// }



// doit(3, 3, function (x, y) {
//     return x + y;
// });
// doit(3, 3, function (x, y) {
//     return x * y;
// });

// 4 ЗАДАЧА 4 МОДУЛЯ
// const pizzaPalace = {
//     pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
    
//   order(pizzaName, makePizza, onOrderError) {
    //   console.log(pizzaPalace
    //   );
//       for (let pizza of this.pizzas) {
//           if (pizza === pizzaName) {
//               console.log(makePizza(pizzaName));
         
//           }
//       }
//   console.log(onOrderError(`В ассортименте нет пиццы с названием ${pizzaName}.`));
          
      
//   },
// };


// Колбэк для onSuccess
// function makePizza(pizzaName) {
   
//     console.log(`Ваш заказ принят. Готовим пиццу ${pizzaName}.`);
// }

// Колбэк для onError
// function onOrderError(error) {
//   return `Ошибка! ${error}`;
// }

//  pizzaPalace.order('Аль Копчино', makePizza, onOrderError);
//  pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
//  pizzaPalace.order('Биг майк', makePizza, onOrderError);
//  pizzaPalace.order('Венская', makePizza, onOrderError);

//// // // // // // // // // // // // // // // // // // // // // // // // // // // //  