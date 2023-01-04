module.exports = function toReadable (n) {
    let tillTen = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let tillTwenty = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    let onlyTens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]

    if (n === 0) {
        return "zero"
    } else if (n < 10) {
      return tillTen[n]
    } else if (n >= 10 && n < 20) {
      return tillTwenty[n%10]
    } else if (n >= 20 && n < 100) {
      return (onlyTens[Math.trunc(n/10)] + " " + tillTen[n%10]).trim()
    } else if (n >= 100 && n < 1000) {
      if (n%100 === 0) {
        return tillTen[n/100] + " hundred"
      } else if (n%100 < 20 && 9 < n%100) {
        return tillTen[Math.trunc(n/100)] + " hundred " + tillTwenty[n%10];
      } else if (n%100 !== 0 && n%10 === 0) {
        return  tillTen[Math.trunc(n/100)] + " hundred " + onlyTens[((n%100)/10)]
      } else if (n%100 < 10 && n%10 !== 0 ) {
        return tillTen[Math.trunc(n/100)] + " hundred " + tillTen[n%100]
      } else if (n%100 < 20 && 9 < n%100) {
        return tillTen[Math.trunc(n/100)] + " hundred " + tillTwenty[n%10];
      } else if (n%100 >= 20 && n%10 !== 0) {
        return tillTen[Math.trunc(n/100)] + " hundred " + onlyTens[Math.trunc((n%100)/10)] + " " + tillTen[n%100%10]
    }
    }
  }


