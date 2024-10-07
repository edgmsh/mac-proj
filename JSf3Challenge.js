/*
const fruits = {
  apple: 42,
  banana: 20,
  cranberry: 13
};

let total = 0;

for (const value of Object.values(fruits)) {
  total += value;
}

console.log("Fruites total: " + total); 

const generateRandomNumber = function () {
  const randomSeed = Math.random();
  const number = randomSeed * 1000;
  const roundedNumber = Math.round(number);

  return roundedNumber;
};

console.log(generateRandomNumber()); 

const sayHello = function () {
  console.log("Hello, world");
};

sayHello();



const isOdd = function (num) {
  return num % 2 !== 0;
};

console.log(isOdd(11)); 

const ageCalculator = function (name,yearOfBirth,currentYear) {
  return name + " is " + (currentYear - yearOfBirth) + " years old.";
};

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));

const howManyHundreds = function (num) {
  return Math.floor(num / 100);
};

console.log(howManyHundreds(1000), "===", 10);
console.log(howManyHundreds(894), "===", 8);
console.log(howManyHundreds(520), "===", 5);
console.log(howManyHundreds(99), "===", 0);
console.log(howManyHundreds(0), "===", 0);

const loopyLighthouse = function (range,multiples,words) {
  for(let num = range[0];num <= range[1]; num++) {
    if (num % multiples[0] === 0 && num % multiples[1] === 0) {
      console.log(words[0] + words[1]);
    } else if (num % multiples[0] === 0) {
      console.log(words[0]);
    } else if (num % multiples[1] === 0) {
      console.log(words[1]);
    } else console.log(num);
  }
};

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);



const range = function (start,end,step) {
  let intAppay = [];
  
  if(start > end || step <=0) {
    return intAppay;
  }

  for(let number = start;number <= end; number+=step) {
    intAppay.push(number);
 }

  return intAppay;
};

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));


const concat = function (inArray1,inArray2) {
  let outAppay = inArray1;
  
  for(let index = 0;index < inArray2.length; index += 1) {
    outAppay.push(inArray2[index]);
 }

  return outAppay;
};

console.log(concat([1, 2, 3], [4, 5, 6]), "=?", [1, 2, 3, 4, 5, 6]);
console.log(concat([0, 3, 1], [9, 7, 2]), "=?", [0, 3, 1, 9, 7, 2]);
console.log(concat([], [9, 7, 2]), "=?", [9, 7, 2]);
console.log(concat([5, 10], []), "=?", [5, 10]);


const merge = function (inArray1,inArray2) {
  let outAppay = inArray1;
  
  for(let index = 0;index < inArray2.length; index += 1) {
    outAppay.push(inArray2[index]);
  }

  return outAppay.sort();
};

console.log(merge([4, 5, 6], [1, 2, 3, 4]), "=?", [1, 2, 3, 4, 4, 5, 6]);
console.log(merge([4], [2, 5, 8]), "=?", [2, 4, 5, 8]);
console.log(merge([1, 2, 6], []), "=?", [1, 2, 6]);

*/

const smartGarbage = function (trash,bins) {
  let outObj = bins;

  outObj[trash] ++;

  return outObj;
};

console.log(smartGarbage("recycling", { waste: 4, recycling: 2, compost: 5 }));