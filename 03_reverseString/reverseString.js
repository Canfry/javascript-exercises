const reverseString = function (str) {
  const strArr = str.split('');
  const reversedArr = strArr.reverse();
  const result = reversedArr.join('');

  if (str === '') {
    return '';
  }
  return result;
};

// Do not edit below this line
module.exports = reverseString;
