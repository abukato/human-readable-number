module.exports = function toReadable (number) {
  if (number === 0)
  return 'zero';  

  let arr = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    100: 'hundred',
  };

  if (number > 0 && number < 21) return arr[number];

  if (number < 100 && number % 10 === 0) return arr[number];

  if (number < 100) {
    if (Math.floor(number / 10) > 0 && number % 10 !== 0) 
    return arr[Math.floor(number / 10) * 10] + ' ' + arr[number % 10];
  }

  if (number >= 100) {
    if (number % 100 === 0) {
      return arr[Math.floor(number / 100)] + ' hundred'
    } else if (number % 10 === 0) {
      return arr[Math.floor(number / 100)] + ' hundred ' + arr[Math.floor(number % 100)];
    } else {
      if (number % 100 <= 20) {
        return arr[Math.floor(number / 100)] + ' hundred ' + arr[Math.abs(Math.floor(number % 100))];
      } else {
        return arr[Math.floor(number / 100)] + ' hundred ' + arr[Math.floor(number % 100 / 10) * 10] + ' ' + arr[number % 10];
      }
    }
  }
}
