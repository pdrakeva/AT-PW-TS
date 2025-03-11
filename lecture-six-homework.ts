//Create an array of strings and add a new element at the end of the array. Log the result.
let colors: string[] = ["Blue", "Green", "Red"];
colors.push("White");
console.log("Added element at the end:", colors);

//Create an array of numbers and remove the first element from the array. Log the result.
let numbers: number[] = [3, 5, 6];
numbers.shift();
console.log("Removed first element:", numbers);

//Use the map method to create a new array and divide each number by 2  “num / 2”   from [1, 2, 3, 4, 5].  Log the result.
let numbersMap: number[] = [1, 2, 3, 4, 5];
let numbersDivided = numbersMap.map((num: number) => num / 2);
console.log("Numbers divided by 2:", numbersDivided);

//Use the filter method to create a new array containing only numbers greater than 5 from [3, 7, 1, 9, 12, 4]. Log the result.
let numbersFilter: number[] = [3, 7, 1, 9, 12, 4];
let numbersFiltered = numbersFilter.filter((num) => num > 5);
console.log("Numbers greater than 5:", numbersFiltered);

//Use the sort method to sort an array of numbers [9, 3, 7, 2, 8, 5] in ascending order. Log the result.
let numbersSort: number[] = [9, 3, 7, 2, 8, 5];
numbersSort.sort();
console.log("Numbers sorted in ascending order:", numbersSort);

//Use the slice method to extract the first three elements from ['apple', 'banana', 'cherry', 'date', 'elderberry']. Log the result.
let stringSlice: string[] = ["apple", "banana", "cherry", "date", "elderberry"];
console.log("Extract first three elements:", stringSlice.slice(0, 3));

//Use the splice method to remove the second and third elements from ['car', 'bike', 'bus', 'train', 'boat'] . Log the result.
let stringSplice: string[] = ["car", "bike", "bus", "train", "boat"];
stringSplice.splice(1, 2);
console.log("Removed second and third element:", stringSplice);

//Write a function named “findLargest” that takes three numbers as parameters and returns the largest of them. Use if/else statement to find the largest number. Log the result.
function findLargest(num1: number, num2: number, num3: number): number {
  let maxNum: number;
  if (num1 > num2) {
    maxNum = num1;
  } else {
    maxNum = num2;
  }
  if (num3 > maxNum) {
    maxNum = num3;
  }
  return maxNum;
}

console.log("Largest number is:", findLargest(9, 25, 20));

//Write a function “convertToCentimeters”  which receives parameter “inches” and add default value it and convert to centimeters. Log the result with default parameter and with passed parameter.
function convertToCentimeters(inches: number = 5): number {
  return inches * 2.54;
}

console.log("Inches to cm default value:", convertToCentimeters());
console.log("Inches to cm with parameter:", convertToCentimeters(10));

//Write a function named “calculateArea” that takes a required width parameter and an optional height parameter. If height is not provided, assume the shape is a square.
function calculateArea(width: number, height?: number): number {
  if (height) {
    return width * height;
  } else {
    return width * 2;
  }
}

console.log("Calculated area with height:", calculateArea(3, 9));
console.log("Calculated area without height:", calculateArea(3));
