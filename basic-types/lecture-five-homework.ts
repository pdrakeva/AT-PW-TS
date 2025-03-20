// Exercise 1: Check if a number is even or odd
// Step 1: Declare a variable `num` and assign any number to it.
// Step 2: Declare a variable `isEven` and use a logical expression to check if `num` is even.
// Step 3: Log the result
let num: number = 3;
let isEven: boolean = num % 2 === 0;
console.log("num = ", num, ", isEven", isEven);

// Exercise 2: Check if a string has more than 10 characters
// Step 1: Declare a variable `text` and assign any string to it.
// Step 2: Declare a variable `isLong` and check if the length of `text` is greater than 10.
// Step 3: Log the result
let text: string = "Homework for lecture 5";
let isLong: boolean = text.length > 10;
console.log("text = ", text, ", isLong", isLong);

// Exercise 3: Verify if a number is positive
// Step 1: Declare a variable `number` and assign any number to it.
// Step 2: Declare a variable `isPositive` and check if `number` is greater than 0.
// Step 3: Log the result
let numberHomework: number = 5;
let isPositive: boolean = numberHomework > 0;
console.log("numberHomework = ", numberHomework, ", isPositive", isPositive);

// Exercise 4: Determine if a number is negative or zero
// Step 1: Declare a variable `numCheck` and assign any number to it.
// Step 2: Declare a variable `isNonPositive` and check if `numCheck` is less than or equal to 0.
// Step 3: Log the result
let numCheck: number = -3;
let isNonPositive: boolean = numCheck <= 0;
console.log ("numCheck = ", numCheck, ", isNonPositive", isNonPositive);

// Exercise 5: Check if a string is empty
// Step 1: Declare a variable `message` and assign any string to it.
// Step 2: Declare a variable `isEmpty` and check if `message` is an empty string.
// Step 3: Log the result
let messageHomework: string = "Sample text";
let isEmpty: boolean = messageHomework.length === 0;
console.log ("messageHomework = ", messageHomework, ", isEmpty", isEmpty);

// Exercise 6: Determine if a number is within a range (10 to 100 inclusive)
// Step 1: Declare a variable `rangeNumber` and assign any number to it.
// Step 2: Declare a variable `isInRange` and check if `rangeNumber` is between 10 and 100 (inclusive).
// Step 3: Log the result
let rangeNumber: number = 16;
let isInRange: boolean = rangeNumber >= 10 && rangeNumber <= 100;
console.log("rangeNumber = ", rangeNumber, ", isInRange", isInRange);

// Exercise 7: Check if a number is either 0 or 100
// Step 1: Declare a variable `specialNumber` and assign any number to it.
// Step 2: Declare a variable `isZeroOrHundred` and check if `specialNumber` is either 0 or 100.
// Step 3: Log the result
let specialNumber: number = 5;
let isZeroOrHundred: boolean = specialNumber === 0 || specialNumber === 100;
console.log("specialNumber = ", specialNumber, ", isZeroOrHundred", isZeroOrHundred);

// Exercise 8: Verify if a boolean value is true
// Step 1: Declare a variable `flag` and assign a boolean value.
// Step 2: Declare a variable `isTrue` and check if `flag` is true.
// Step 3: Log the result
let flag: boolean = 1 > 2;
let isTrue: boolean = flag === true;
console.log("flag = ", flag, ", isTrue", isTrue);

// Exercise 9: Check if a number is odd and greater than 50
// Step 1: Declare a variable `oddCheck` and assign any number to it.
// Step 2: Declare a variable `isOddAndLarge` and check if `oddCheck` is odd and greater than 50.
// Step 3: Log the result
let oddCheck: number = 61;
let isOddAndLarge: boolean = oddCheck % 2 != 0 && oddCheck > 50;
console.log("oddCheck = ", oddCheck, ", isOddAndLarge", isOddAndLarge);

// Exercise 10: Determine if a string starts with the letter 'A'
// Step 1: Declare a variable `word` and assign any string to it.
// Step 2: Declare a variable `startsWithA` and check if `word` starts with 'A'.
// Step 3: Log the result
let word: string = "apple";
let startsWithA: boolean = word.startsWith("a");
console.log("word = ", word, ", startsWithA", startsWithA);
