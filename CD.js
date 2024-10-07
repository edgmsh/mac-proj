const whereCanIPark = function (spots, vehicle) {
  // Code here!
  let parking = [];
  let parkingTypes = [];

  if (vehicle === "regular") {
    parkingTypes = ['R'];
  } else if (vehicle === "small") {
    parkingTypes = ['R','S'];
  } else if (vehicle === "motorcycle") {
    parkingTypes = ['R','S','M'];
  };

  for (let i = 0; i < spots.length; i++ ){
    for (let x = 0; x < spots[i].length; x++ ){
    if(parkingTypes.includes(spots[i][x])){
      parking.push([x,i]);
      return parking;;
    };
  };
};

return false;

};

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
));

const student = {
  name: "Lora Baines", 
  age: 28,
  school: "Lighthouse Labs",
  favouriteLanguage: "JavaScript",
  startDate: "2023-07-09",
};

for (const key in student) {
  console.log("The student's", key, "is", student[key]);
};

const multiDimensionalArr = [];
const arr1 = [];
const arr2 = [];
const arr3 = [];
arr1.push(1);
arr1.push(2);
arr1.push(3);
arr2.push(4);
arr2.push(5);
arr2.push(6);
arr3.push(7);
arr3.push(8);
arr3.push(9);
multiDimensionalArr.push(arr1);
multiDimensionalArr.push(arr2);
multiDimensionalArr.push(arr3);
console.log("multiDimensionalArr:", multiDimensionalArr);

const sumAllArry = function (inArray) {
let sum = 0;

for (let i = 0; i < inArray.length; i++ ){
  for (let x = 0; x < inArray[i].length; x++ ){
    sum += inArray[i][x];
  }
}

return sum;
};

console.log(sumAllArry(multiDimensionalArr));

const sumMultiDimensionalArr = function (arr) {
  let sum = 0;

  for (const subArr of arr) {
    for (const num of subArr) {
      sum += Number(num);
    }
  }

  return sum;
};

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

const chooseStations = function (stations) {
  // Your code in here ...
  let locations = [];
  for (const subArr of stations) {
      if (subArr[1] >= 20 && (subArr[2] === "school" || subArr[2] === "community centre")) {
        locations.push(subArr[0]);
      };
    };
    return locations;
  };


console.log(chooseStations(stations));

const pet = {
  // Add your object properties and/or methods here
  hunger: 0,
  energy: 0,
  playfulness: 0,
  feed: function() {
    pet.hunger ++;
  },
  sleep: function() {
    pet.energy ++;
  },
  play: function() {
    pet.playfulness ++;
  },
  status: function() {
    console.log( `Pet Status - Hunger:${pet.hunger} Energy:${pet.energy} Playfulness:${pet.playfulness}`);
  }
};
pet.feed();
pet.sleep();
pet.sleep();
pet.play();
pet.play();
pet.play();
pet.status();


const concert = {
  name: "Rockin' Road Trip",
  location: "New York City",
  date: "July 4, 2023",
  bands: [
    {
      name: "The Rolling Stones",
      genre: "rock",
      songs: [
        {
          title: "Satisfaction",
          duration: 233,
        },
        {
          title: "Gimme Shelter",
          duration: 272,
        },
        {
          title: "Jumpin' Jack Flash",
          duration: 220,
        },
      ],
    },
    {
      name: "The Black Keys",
      genre: "rock",
      songs: [
        {
          title: "Lonely Boy",
          duration: 204,
        },
        {
          title: "Howlin' For You",
          duration: 210,
        },
        {
          title: "Gold on the Ceiling",
          duration: 223,
        },
      ],
    },
    {
      name: "Kendrick Lamar",
      genre: "hip-hop",
      songs: [
        {
          title: "HUMBLE.",
          duration: 177,
        },
        {
          title: "DNA.",
          duration: 185,
        },
        {
          title: "Alright",
          duration: 307,
        },
      ],
    },
  ],
};

const createPlaylist = function(concertObject) {
  // Your logic here.
  let songs = [];
  let bandsArr = concertObject.bands;

  for (let i = 0; i < bandsArr.length; i ++ ){
    for (const [key, value] of Object.entries(bandsArr[i])) {
      if (key === "songs") {
        for (let x = 0; x < value.length;x ++){
          for (const [key1, value1] of Object.entries(value[x])) {
            if (key1 === "title") {
              songs.push(value1);
            }
         }
       }
     } 
   }
  }
  return songs;
  };

console.log(createPlaylist(concert));