function ageCalculator(name, yearOfBirth, currentYear) {
  let result = name + " is " + (currentYear - yearOfBirth) + " years old.";
  return result;
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));

//"Suzie is 32 years old."
