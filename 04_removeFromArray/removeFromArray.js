// const removeFromArray = function (arr, ...args) {
//   const newArray = [];
//   arr.forEach((item) => {
//     if (!args.includes(item)) {
//       newArray.push(item);
//     }
//   });
//   return newArray;
// };

// // Do not edit below this line
// module.exports = removeFromArray;

const removeFromArray = function (arr, ...args) {
  if (typeof arguments[2] === NaN) {
    return;
  }
  if (!args in arr) {
    return;
  }
  return arr.filter((item) => !args.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
