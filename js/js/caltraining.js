// 'use strict'
// const showThis = function () {
//     console.log();
//     console.log('showThis -> this', this);
// }

// showThis();

// const objekt = {
//     a: 8,
//     b: 6,
// };

// showThis.call(objekt);


// function testSize(num) {
//   // Only change code below this line
// if (num < 5) {
//   return Tiny;
// } 
// else if (num < 10) {
//     console.log('Small'); 
// }
//  else if (num < 15) {
//   return Medium;
// }
//  else if (num < 20) {
//   return Large;
// }
//  else if (num >= 20) {
// return Huge;
// }
//   // Only change code above this line
// }

// testSize(7);




// const result = [];

// for (var i = 0; i < 5; i++) {
//   result[i] = () => {
    
//     }
//    console.log(+i);
    
//   }

const result = [];

for (var i = 0; i < 5; i++) {
  result[i] = (function number(n) {
    return () => { console.log(n); }
  })(i);
    
  }


result[0](); // 5, ожидаем 0
result[1](); // 5, ожидаем 1
result[2](); // 5, ожидаем 2
result[3](); // 5, ожидаем 3
result[4](); // 5, ожидаем 4



// const createCounter = function () {
//   /*
//    * Локальная переменная privateValue доступна только в замыкании.
//    * Получить к ней доступ во внешнем коде невозможно.
//    */
//   let privateValue = 0;

//   const increment = function () {
//     privateValue += 1;
//     console.log(privateValue);
//   };

//   return {
//     increment,
//   };
// };

// const counterA = createCounter();
// counterA.increment(); // 1
// counterA.increment(); // 2
// counterA.increment();
// counterA.increment();
// counterA.increment();


// const counterB = createCounter();
// counterB.increment(); // 1
// counterB.increment(); // 2
// counterB.increment(); // 3