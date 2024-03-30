/* Beginner Challenge */

/* Do all of these using proper ES6 syntax
Using the following array of objects,
(1) Write an arrow function that adds a new entry to bookList  */

/* (2) Write an arrow function that removes a specific book from the bookList */
/* (3) Write an arrow function that lists out all the books or all the authors in the book list */

const bookList = [
  { title: "Don Quixote", author: "Miguel de Cervantes" },
  { title: "Ulysses", author: "James Joyce" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "Moby Dick", author: "Herman Melville" },
];

const addNewEntry = (title, author) => {
    bookList.push({ title: title, author: author });
}

/* (1) Write an arrow function that adds a new entry to bookList  */
addNewEntry("Hunger Games", "Suzanne Collins")

console.log(bookList);

/* (2) Write an arrow function that removes a specific book from the bookList */
const removeEntry = (title, author) => {
    for (let i = 0; i < bookList.length; i++) {
        if (bookList[i].title === title && bookList[i].author === author) {
            bookList.splice(i, 1);
        }
} 
}

removeEntry("Don Quixote", "Miguel de Cervantes")

console.log(bookList);

/* (3) Write an arrow function that lists out all the books or all the authors in the book list */
const displayEntries = () => {
    bookList.forEach(({ title, author }) => console.log({ title, author }));
}

displayEntries();


/* Intermediate Challenge */

/* (4) Write a one-line arrow function that takes in a number and returns a string stating whether the
  number is positive or negative using a ternary operator (assume the number will never be zero) */

const numberType = (num) => num >= 0 ? "Positive" : "Negative";

console.log(numberType(3));
console.log(numberType(0));
console.log(numberType(-3));

/* (5) Write a switch statement for a 'day' variable that prints out something based off of what day of
  the week it is i.e. if it's Monday, print "good luck" or wednesday print "hump day" or friday print "party" */
let day = "Sunday"; //you can switch this to get diff messages

switch (day) {
  case "Monday":
    console.log("Good luck for the week!");
    break;
  case "Tuesday":
    console.log("This day will bring you fortune.");
    break;
  case "Wednesday":
    console.log("Hump Day!");
    break;
  case "Thursday":
    console.log("Keep going!");
    break;
  case "Friday":
    console.log("It's almost the weekend!");
    break;
  case "Saturday":
    console.log("Go sleep in you deserve it!");
    break;
  case "Sunday":
    console.log("Shoot it's time to do work...");
    break;
  default:
    console.log("I don't know what day it is.");
}
  

/* (6) Write an arrow function that takes in a number, and uses a for loop to return the sum of every
  number from 1 up to that number
  ex. sumUp(7) = 28 */

const sumUp = (num) => {
  let result = 0;
  for (let i = 0; i < num+1; i++) {
    result = result + i;
  }
  console.log(result);
}
sumUp(7);

/* Harder Challenge */

/* (7) Write an arrow function that converts the temperature from Celsius to Fahrenheit and then tells
    me what I should wear accordingly */
  
const weatherCheck = (temp) => {
  newTemp = ((9 / 5) * temp) + 32;
  console.log(newTemp);
  if (newTemp < 32) {
    console.log("Wear something warm.");
  }
  else if (32 <= newTemp < 50) {
    console.log("It's a bit chilly out, make sure to bring a sweater.");
  }
  else {
    console.log("Just wear what you want!");
  }
}

weatherCheck(3);


/* (8) Write a function that takes in an array and prints out the amount of truthy values in that array
  using .forEach() */

const exampleArray = ["Hello, world!", 8, null, false, "", "0", -22];

/* (9) Using the map function and arrow syntax, return an array of object that contain a fullName field
  and an averageGrade field representing the letter grade that corresponds to their GPA */

const attendance = [
  { firstName: "Clay", lastName: "Tondreau", gpa: 4.0 },
  { firstName: "Tucker", lastName: "Wilson", gpa: 2.0 },
  { firstName: "Eliza", lastName: "Tobin", gpa: 3.7 },
  { firstName: "Sofia", lastName: "Ackerman", gpa: 1.1 },
  { firstName: "Thomas", lastName: "Beddow", gpa: 2.3 },
  { firstName: "Jackson", lastName: "Wolf", gpa: 4.0 },
  { firstName: "Jared", lastName: "Nguyen", gpa: 4.0 },
];

/* Hardest Challenge (Don't do this without completing harder challenges) */

/* Write a function that solves the "every number eventually equals 4" puzzle. The output should be
    an array of the path you took to make it equal four
    ex/ [11, 6, 3, 5, 4], [19, 8, 5, 4] or [252, 18, 8, 5, 4]
    For context: https://puzzling.stackexchange.com/questions/29137/every-number-eventually-equals-4 */

// assuming num < 1,000,000. Pattern holds with higher numbers but just requires more checks
// does not support leading zeros