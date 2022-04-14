//1.

var ages = [3, 9, 23, 64, 2, 8, 28, 93];
var firstElement = ages.shift();//removes and returns first element
var lastElement = ages.pop();//removes and returns last element
var newAge = lastElement - firstElement;


console.log(newAge);
//93-3 equals 90

ages.push(newAge);
//90 gets added to the array

var firstElement = ages.shift();
var lastElement = ages.pop();
var newAge = lastElement - firstElement;
//Since 90 is the last Element and 8 is the first element now, newAge is 81

console.log(newAge);

// Use a loop to iterate through the array and calculate the average age. 
// Print the result to the console.

var sumAges = 0;
//we're just listing this variable out so we can use it in our loop

for (let number of ages) {
    sumAges += number;
}

averageAge = sumAges / ages.length;


console.log(averageAge);//25






//*************************************************//





//2.



// Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
// Use a loop to iterate through the array and calculate the average number of letters per name. 
// Print the result to the console.



const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let sumNames = 0;


for (let name of names) {
    sumNames = sumNames + name.length;

}
averageLength = sumNames / names.length;
console.log(averageLength);


// Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.

let concatNames
//we need to establish a variable here, but leave it empty to fill later

for (let i of names) {
    concatNames = names.join(", ");
    //telling it to loop through the iterate through each index of the names array  
    //concatenate the names with a space and comma each time through the loop
};

console.log(concatNames);






//*************************************************//


//5.
// Create a new array called nameLengths. 
//Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
//For example:
// namesArray = ["Kelly", "Sam", "Kate"] //given this array
// nameLengths = [5, 3, 4] //create this new array

let nameLengths = names.map(function (element) {
    return element.length;
});

console.log(nameLengths);



//6.

// Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
// Print the result to the console.

const sumNameLengths = nameLengths.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
});

console.log(sumNameLengths); //23


// 7.

// Write a function that takes two parameters, word and n, as arguments 
// and returns the word concatenated to itself n number of times.

let concatWords = ['Word', 'Word', 'Word'];
//we first need to establish a variable to be make sure it's working
//Then we need to create a new variable to hold the concatenated words
const concatAll = concatWords.reduce(function(n, word) {
    return word + n
});

console.log(concatAll);



//8.

