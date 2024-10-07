
const someObject = { name: "Pollo", sound: "Pock pock" };

const keysOfSomeObject = Object.keys(someObject);

for (const key of keysOfSomeObject) {
  const value = someObject[key];

  console.log(key, value); 
}

const valuesOfSomeObject = Object.values(someObject);
for (const value of valuesOfSomeObject) {
  console.log(value); 
}

for (const key in someObject) {
  const value = someObject[key];

  console.log(key, value); 
}

const steel = {
  name: "1084",
  type: "Carbon Steel",
  composition: {
    iron: 98.45,
    carbon: 0.8,
    manganese: 0.6,
    phosphorus: 0.08,
    sulfur: 0.06,
  },
  forging_min_temp: 900,
  forging_max_temp: 1200,
};
//let key = "composition";

for (const key in steel["composition"]) {
  //const value = someObject[key];

  //console.log(key, value); 
  console.log(key); 
}

for (const value of Object.keys(steel["composition"])) {
  console.log(value); 
}

console.log(Object.keys(steel["composition"]));

let sum =0.00;

for (const value of Object.values(steel["composition"])) {
  sum += value;
}

console.log(sum);

let total = 0.00;

for (const key in steel["composition"]) {
  total +=steel["composition"][key];
}
console.log(total); 

let count = 0;

for (const value of Object.values(steel)) {
  if (!isNaN(value)) {
    count += 1;
  }
}
console.log(count); 