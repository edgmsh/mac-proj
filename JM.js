/**
 * Add four (4) numbers.
 */
const addFourNumbers = function(num1, num2, num3, num4) {

  // Code your solution here.
  return num1 + num2 + num3 + num4;

};

console.log(addFourNumbers(1, 1, 1, 1)); // Expected: 4
console.log(addFourNumbers(0, 0, 0, 0)); // Expected: 0
console.log(addFourNumbers(1, 2, 3, 4)); // Expected: 10
console.log(addFourNumbers(100, -12, 36, -99)); // Expected: 25

const sumLargestNumbers = function(data) {
  // Put your solution here
  let inArray = data;
  let sum = 0;

  let done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < inArray.length; i += 1) {
      if (inArray[i - 1] < inArray[i]) {
        done = false;
        let tmp = inArray[i - 1];
        inArray[i - 1] = inArray[i];
        inArray[i] = tmp;
      }
    }
  }

  sum = inArray[0] + inArray[1];

return sum;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

const conditionalSum = function(values, condition) {
  // Your code here
  let sum = 0;
  for (let i = 0; i < values.length; i++ ){
    if (condition === "even" && values[i] % 2 === 0 ){
      sum += values[i];
    } else if (condition === "odd" && values[i] % 2 !== 0 ){
      sum += values[i];
    };
  }
 return sum; 
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));

const numberOfVowels = function(data) {
  // Put your solution here
  let count = 0;
  for (let i = 0; i < data.length; i++ ){
    if(['a','e','i','o','u'].includes(data[i])){
      count++;
    };
  };
  return count;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));

const instructorWithLongestName = function (instructors) {
  // Put your solution here
  let inArray = instructors;
  let done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < inArray.length; i += 1) {
      if (inArray[i - 1]["name"].length < inArray[i]["name"].length) {
        done = false;
        let tmp = inArray[i - 1];
        inArray[i - 1] = inArray[i];
        inArray[i] = tmp;
      }
    } 
  }
  return inArray[0];
};

console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" },
  ])
);

// Create Objects Array

var arrayCarObjects = [
  {brand: "Honda",        topSpeed: 45},
  {brand: "Ford",         topSpeed: 6},
  {brand: "Toyota",       topSpeed: 240},
  {brand: "Chevrolet",    topSpeed: 120},
  {brand: "Ferrari",      topSpeed: 1000}
  ];
  
  // Sort Objects Numerically
  
 // arrayCarObjects.sort((a, b) => (a.topSpeed - b.topSpeed));
  
  // Sort Objects Alphabetically
  
  arrayCarObjects.sort((a, b) => (a.brand.length < b.brand.length) ? 1 : -1);

  console.log(arrayCarObjects);

  const urlEncode = function(text) {
    // Put your solution here
    let inText = text.trim();
    let outText = "";
    for (var i = 0; i < inText.length; i += 1) {
      if (inText[i] === " ") {
        outText = outText + "%20";
      } else {
        outText = outText + inText[i];
      }
    }

    return outText;
  };
  
  console.log(urlEncode("Lighthouse Labs"));
  console.log(urlEncode(" Lighthouse Labs "));
  console.log(urlEncode("blue is greener than purple for sure"));

  const checkAir = function (samples, threshold) {
    // Code here!
    countDirt = 0;
    for (var i = 0; i < samples.length; i += 1) {
        if (samples[i] === 'dirty') {
          countDirt ++;
        }
    };

    if (countDirt / samples.length >= threshold) {
      return "Polluted";
    } else {
      return  "Clean";
    }
  };
  
  console.log(checkAir(
    ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
    0.3
  ));
  
  console.log(checkAir(
    ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
    0.25
  ));
  
  console.log(checkAir(
    ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
    0.9
  ))

  const judgeVegetables = function(vegetables, metric) {
    // Your code in here ... 
    arrayCarObjects = vegetables;
    arrayCarObjects.sort((a, b) => (a[metric] - b[metric]));

    return arrayCarObjects[arrayCarObjects.length - 1].submitter;
  };
  
  const vegetables = [
    {
      submitter: "Old Man Franklin",
      redness: 10,
      plumpness: 5,
    },
    {
      submitter: "Sally Tomato-Grower",
      redness: 2,
      plumpness: 8,
    },
    {
      submitter: "Hamid Hamidson",
      redness: 4,
      plumpness: 3,
    },
  ];
  
  console.log(judgeVegetables(vegetables, 'redness'));
  console.log(judgeVegetables(vegetables, 'plumpness'));

  const removeDuplicates = function(arr) {
    // Your solution here.
    let i;
    let value;
    for (let x = 0; x < arr.length; x++) {
      i = x + 1;
      value = arr[x];
      while (i < arr.length) {
        if (arr[i] === value) {
          arr.splice(i, 1);
        } else {
          i++;
        }
      }
    }
    return arr;
  };
  
  console.log(
    removeDuplicates([1, 2, 2, 2, 3, 4, 5]),
    removeDuplicates(['a', 'b', 'b', 'c', 'd', 'e', 'e', 'a', 'f']),
  );

  const reverseWords = function(str) {

    // Your solution here.
    let strWordArr = str.split(" ");
    let reverseWord=[];  
    for(let i=(strWordArr.length) - 1;i >= 0;i--){
        reverseWord.push(strWordArr[i]); 
    };
    return reverseWord.join(' ');
  };
  
  console.log(
    reverseWords('hello and welcome to Lighthouse Labs'),
    reverseWords('am I Yoda')
  );

  const sumEvenIndices = function (arr) {
    // Your solution here.
    let sum = 0;
    for (let x = 0; x < arr.length; x++) {
      if (x % 2 === 0){
        sum += arr[x];
      }
    };
    return sum;
  };
  
  console.log(sumEvenIndices([1, 2, 3, 4, 5, 6, 7]), sumEvenIndices([3, 6, 9, 100, 1]));

  const findMissingNumber = function(arr) {

    // Your solution here.
    let num;
    for (let x = 0; x < arr.length; x++) {
      if (arr[x] + 1 !== arr[x + 1]){
        return arr[x] + 1;
      }
    };
  };
  
  console.log(
    findMissingNumber([1, 2, 3, 4, 6, 7, 8, 9, 10]),
    findMissingNumber([100, 101, 102, 103, 105, 106, 107]),
    findMissingNumber([-3, -2, -1, 1, 2, 3])
  );

  const arrayIntersections = function(arr1, arr2) {

    // Your solution here.
    let i;
    let value;
    let arr3 = [];
    for (let x = 0; x < arr1.length; x++) {
      i = 0;
      value = arr1[x];
      while (i < arr2.length && arr2[i] !== value) {
        i++;
      }
      if (arr2[i] === value) {
          arr3.push(value);
      }
    }
    return arr3;
  };
  
  console.log(
    arrayIntersections([-2, -1, 1, 2, 3], [1, 2, 3, 4, 5, 6]),
    arrayIntersections(['dog', 'cat', 'fish'], ['centipede', 'fish', 'bird']),
    arrayIntersections([1, 'hello', true], [2, 'goodbye', true])
  );

  const isPalindrome = function(str) {

    // Your solution here.
    let original = str;
    let reversed = original.split('').reverse().join('');
    if (str === reversed) {
      return true ;
    } else {
      return false ;
    }
  };
  
  console.log(
    isPalindrome('racecar'),
    isPalindrome('abba'),
    isPalindrome('abc'),
    isPalindrome('abracadabra'),
    isPalindrome('kayak'),
  );

  const average = function(arr) {

    // Your solution here.
    let sum = 0;
    for (let x = 0; x < arr.length; x++) {
      sum += arr[x];
    }
    return sum / arr.length;
  };
  
  console.log(
    average([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
    average([1000, -1000, 50, -999]),
    average([1, 2, 3])
  );

