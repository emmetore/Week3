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
console.log(averageLength);//3.8333333333333335


// Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.

let concatNames
//we need to establish a variable here, but leave it empty to fill later

for (let i of names) {
    concatNames = names.join(", ");
    //telling it to loop through the iterate through each index of the names array  
    //concatenate the names with a space and comma each time through the loop
};

console.log(concatNames);
//'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'





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





//*************************************************//




//6.

// Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
// Print the result to the console.

const sumNameLengths = nameLengths.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
});

console.log(sumNameLengths); //23





//*************************************************//




// 7.

// Write a function that takes two parameters, word and n, as arguments 
// and returns the word concatenated to itself n number of times.

let concatWords = ['Word', 'Word', 'Word'];

const concatAll = concatWords.reduce(function (n, word) {
    return word + n
});

console.log(concatAll);//WordWordWord



//*************************************************//




//8.
// Write a function that takes two parameters, firstName and lastName, 
// and returns a full name. (the full name should be the first and the 
// last name separated by a space)


function fullName(firstName, lastName) {
    console.log(firstName + " " + lastName);
    return firstName + lastName
};

fullName("John", "Doe");
//John Doe



//*************************************************//




//9.
// Write a function that takes an array of numbers and 
// returns true if the sum of all the numbers in the array is greater than 100.

function greaterThan100([a, b]) {
    return (a + b) > 100;
}

console.log(greaterThan100([2, 4, 66, 7]));
//false



//*************************************************//




//10.
// Write a function that takes an array of numbers and returns the average of all the elements in the array.

// we want to first find the value of each element
// then we want to find the sum of all the values
// then we want to divide by the lenght of the array

let arrayX = [1, 3, 5, 67, 8];

let arrayLength = arrayX.length
let arraySum = arrayX.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
});

console.log(arrayLength);//5
console.log(arraySum);//84

let arrayAverage

function calculateAverage(element) {
    return arraySum / arrayLength;

}


console.log(calculateAverage());//16.8







//*************************************************//


//11.
//write a function that takes two arrays of numbers and returns true if the average
//of the elements in the first array is greater than the average of the elements in the second array


let arrayOne = [1, 4, 456, 567, 835, 6];
let arrayOneLength = arrayOne.length
let arrayOneSum = arrayOne.reduce(function (previousVal, currentVal) {
    return previousVal + currentVal;
});
let arrayOneAverage = arrayOneSum / arrayOneLength;
console.log(arrayOneAverage);//311.5


let arrayTwo = [1, 2, 34, 555, 6];
let arrayTwoLength = arrayTwo.length
let arrayTwoSum = arrayTwo.reduce(function (previousVal, currentVal) {
    return previousVal + currentVal;
});
let arrayTwoAverage = arrayTwoSum / arrayTwoLength;
console.log(arrayTwoAverage);//119.6


function compareAverages([array1], [array2]) {
    return arrayOneAverage > arrayTwoAverage

};

console.log(compareAverages([], []));//true






//*************************************************//


//12.
//Write a function called willBuyDrink that takes a boolean isHotOutside, and a number 
// moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.



function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside === true && moneyInPocket > 10.50) {
        return true;
    };

};

console.log(willBuyDrink(true, 12.50));//true




//*************************************************//



//13. 
//Create a function of your own that solves a problem. 
//In comments, write what the function does and why you created it.



//i want to create a function that adds a new score(number) to an array, 
//then sorts all the numbers in the array and returns a message, "New High Score!";

const scores = [3, 4, 5, 6, 7, 8];

function getHiScore([element]) {
    scores.sort().reverse();
    console.log(scores)//[9, 8, 7, 6, 5, 4, 3]
    if (scores[0] >= scores[1]) {
        console.log("New High Score!");
    }




};

scores.push(9);
getHiScore([]);
//New High Score!