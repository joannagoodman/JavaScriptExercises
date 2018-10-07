
var massJohn = 160;
var heightJohn = 1.69;

var massMark = 160;
var heightMark = 2.2;

var BMIMark = massMark/ (heightMark * heightMark);
var BMIJohn = massJohn/ (heightJohn * heightJohn);

console.log(BMIMark, BMIJohn);

var markHigherBMI = BMIMark > BMIJohn;

console.log('Is Mark\'s BMI higher than John\'s ' + markHigherBMI);

