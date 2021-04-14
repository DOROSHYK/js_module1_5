// Пиши код ниже этой строки
function addOverNum(numFirst, ...args) {
  let total = 0;

  for (const arg of args) {
    
    if (numFirst < arg) {
      total += arg;
     
    }
  }

    return total;
    // console.log(numFirst(5))
  // Пиши код выше этой строки
}
// console.log(numFirst(5))
// addOverNum();