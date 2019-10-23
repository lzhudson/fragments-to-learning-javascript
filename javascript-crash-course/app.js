// Using the console
console.log('Hello World');
console.error('Error');
console.warn('Warning');


// Variables
// keywords to create: var, let, const
// let and const have a block-level scope
// var is scope global
// const dont reassing variable and initializing variable to create.
console.log('<-------- Variables -------->');
let age = 30;
console.log(age);

const name = 'Jhon';
// name = 'Victory';
console.log(name);

let score;
score = 10;

console.log(score);
console.log('<--------  -------->');

console.log('<------- Symbols ------->');
const myName = 'Jhon';
const myAge = 30;
const rating = 4.5;
const isCool = true;
const x = null;
// Null is empty
const y = undefined;
// undefined is undefined
let z;
console.log(myName, typeof myName);
console.log(myAge, typeof myAge);
console.log(rating, typeof rating);
console.log(isCool, typeof isCool);
console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
// typeof reveal type the variable
console.log('<--------  -------->');

console.log('<------- Concatenation ------->');
console.log('My name is ' + myName + ' and I am ' + myAge);
// Template String
const hello = `My name is ${myName} and I am ${myAge}`;
console.log(hello);
console.log('<--------  -------->');
console.log('<-------- Property Strings -------->');
const s = 'Hello World';
console.log('String: ' + s);
console.log('Length String ' + s.length);
console.log('Upper case string: ' + s.toUpperCase());
console.log('Get part string: ' + s.substring(0, 5));
console.log('Convert String to Array: ' + s.split('') );
console.log('<--------  -------->');

console.log('<------- Arrays  ------->');
// Arrays - variables that hold multiple values
const numbers = new Array(1,2,3,4,5);
const fruits = ['Apples', 'Oranges', 'Pears'];
console.log(numbers);
console.log(fruits);
// Acess value
// Arrays is zero-based
console.log(fruits[1]);
// push() is add in end off array
fruits.push('Mangos');
// unshift() is add in init off array
fruits.unshift('Strawberries');
// pop() remove last item off array
fruits.pop();
// isArray return if is array or not (true or false)
console.log(Array.isArray(fruits));
// indexOf(valueString) return index of array
console.log(fruits.indexOf('Apples'));
fruits[3] = 'Grapes';
console.log(fruits);
console.log('<--------  -------->');
 
console.log('<------- Object  ------->');
const person = {
  firstName: 'Jhon', 
  lastName:'Doe',
  age: 30, 
  hobbies: ['music', 'movies', 'sports'],
  address: {
    street: '50 main st',
    city: 'Boston',
    state: 'MA'
  }
}
console.log(person);
console.log(person.hobbies[0]);
console.log(person.address.city);

const { firstName, lastName, address:{city} } = person;
console.log(firstName);
console.log(city);

// Add Properties
person.email = 'jhon@gmail.com';

const todos = [
  {
    id:1,
    text: 'Take out trash',
    isCompleted: true
  },
  {
    id:2,
    text: 'Meeting with boss',
    isCompleted: true
  },
  {
    id:3,
    text: 'Dentist appt',
    isCompleted: false
  }
];
console.log(todos);
console.log(todos[1].text);

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);
console.log('<--------  -------->');

 
console.log('<------- Loops ------->');
// For
for(let i = 0; i < 10; i++){
  console.log(`For Loop Number: ${i}`);
}
// While
let i = 0;
while(i < 10){
  console.log(`While loop Number ${i}`);
  i++;
}
for(let i = 0; i < todos.length; i++){
  console.log(todos[i].text);
}
for(let todo of todos) {
  console.log(todo.text);
}

// forEach, map, filter
console.log('<-------- forEach -------->');
todos.forEach(todo => {
  console.log(todo.text);
});
console.log('<--------         -------->');
console.log('<--------   Map   -------->');
const todoText = todos.map(function(todo){
  return todo.text;
});
console.log(todoText);
console.log('<--------         -------->');
console.log('<--------  Filter -------->');
const todoCompleted = todos.filter(function(todo){
  return todo.isCompleted === true;
});
console.log(todoCompleted);
console.log('<--------         -------->');
console.log('<-------- Multplies Methods -------->');
const todoCompletedText = todos.filter(function(todo){
  return todo.isCompleted === true;
}).map(function(todo){
  return todo.text;
});
console.log(todoCompletedText);
console.log('<--------         -------->');

// Conditionals
console.log('<------- Conditionals ------->');
console.log('<------- Conditional IF ------->');
const number = 4; 
const numberTwo = 11;
// Compare value: ==
// Compare value and data type: ===
if(number > 5 || numberTwo > 10){
  console.log('x is 10');
}else if(number > 10){
  console.log('x is greater than 10');
}else {
  console.log('x is less than 10');
}
// Multiplies Comparisons
if(number > 5 || numberTwo > 10){
  console.log('x is more than 5 or y is more than 10');
}else if(number > 10){
  console.log('x is greater than 10');
}else {
  console.log('x is less than 10');
}
// OR
/* if(number > 5){
  if(numberTwo > 10){

  }
} */
const xTwo = 10;
const color = x > 10 ? 'red' : 'blue';
console.log(color);
// Switch
switch(color){
  case 'red':
    console.log('color is red');
  break;
  case 'blue':
    console.log('color is blue');
  break;
  default:
    console.log('color is NOT red or blue');
  break;
}


console.log('<--------         -------->');

console.log('<-------- Functions  -------->');
function addNums(num1 = 1, num2 = 1) {
  // console.log(num1 + num2);
  // Using the return keyword
  return num1 + num2;
}
// NaN: Not a Number (não há numero)
// values default in parameters = num1 = 1, num2 = 1s
// is necessary console for view of return function
console.log(addNums(5,4));
console.log(addNums());
console.log('<-------- Arrow Functions  -------->');
const addNumsTwo = (num1 = 1, num2 = 1) =>{
  return num1 + num2;
}
// One line arrow function, using while after oneline after curlybraces.
const addNumsTwoOneline = (num1 = 1, num2 = 1) => num1 + num2;
console.log(addNumsTwoOneline());
console.log(addNumsTwoOneline(5,5));
// In foreach method
todos.forEach((todo) => console.log(todo));
console.log('<--------         -------->');

console.log('<-------- Constructor Functions & Prototypes  -------->');
// ES5
// Constructor Function
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
}
// Instantiate Object
const person1 = new Person('Jhon', 'Doe', '2-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1970');
console.log(person1);
console.log(person2);
// console.log(person1.dob.getFullYear());
// console.log(person1.getBirthYear());
// console.log(person1.getFullName());
// console.log(person2.getFullName());

// Create Functions With Prototypes
Person.prototype.getBirthYear = function() {
  return this.dob.getFullYear();
}
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
}
console.log(person1.getBirthYear());
console.log(person1.getFullName());
console.log(person2.getFullName());

// ES6
class PersonWithES6 {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }
  getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
  }
  getBirthYear = function() {
    return this.dob.getFullYear();
  }
}
const person3 = new PersonWithES6('Hudson','Holanda', '10-22-2000');
const person4 = new PersonWithES6('Hugo', 'Lorenzo', '11-28-2012');
console.log(person3);
console.log(person4);
console.log('<--------         -------->');
