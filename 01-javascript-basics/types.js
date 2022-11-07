// TYPES

const string = "Hello";
console.log(typeof(string)); // => "string"

const number = 42;
console.log(typeof(number)); // => "number"

// STRINGS

const letter = string[0]; // => "H"
const substring = string.substring(1); // => "ello"

const numberString = "42";
console.log(Number.parseInt(numberString), 10); // => 42

const school = "Le Wagon";
const interpolation = `${string} ${school}`;
console.log(interpolation);  // => "Hello Le Wagon";


// ARRAYS

const fruits = ["apple"];

fruits.push("banana"); // CREATE
const fruit = fruits[0]; // READ
fruits[0] = "kiwi"; // UPDATE
fruits.splice(1, 2); // DELETE

fruits.forEach((fruit) => {
  console.log(fruit.toUpperCase())
});

const fruitsUppercase = fruits.map((fruit) => {
  return fruit.toUpperCase();
});

// OBJECTS

const student = {
  firstName: "Boris",
  lastName: "Paillard",
};

student.age = 30; // CREATE
const firstName = student.firstName; // READ
student.firstName = "yanis"; // UPDATE
delete student.age; // DELETE || student.age = undefined;

const values = Object.keys(student).map((key) => {
  return student[key];
});


