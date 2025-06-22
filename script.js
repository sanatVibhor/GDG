
console.log("This is from my Script.js file")
console.log("JS Fundamentals");
//2.variable and data types
//js gives us 3 ways to declare variables

var name="john"; //function-scoped
let adge=25;    //Block-scoped 
const PI= 3.14; //Block-scoped constant

//best preactices -> use const for values that wont change 
//use let for values that might change
//avoid var in modern JS


//Data Types
//primitive data types
//Numbers

let integer =10;
let decimal=3.14;
let negative=-10
let sum=integer+decimal+negative;
console.log("sum is",sum);


//var vs let vs const
// var name ="apple";
// scope : function scoped which means that it is visible throughout the function
// Hoisted : yes but undefined at start
// Re-Decalaration : yes
// Can be updated ? : yes

// function test(){
//     let x=10;
//     if(true){
//         let x =20;
//         console.log("--->",x); //20
//     }
//     console.log("---->",x); //20
// }

// test();

//var variable is function scoped
//entire x variable is same in the entire test block fucntion
//var ->  fucntion scoped-> re-assign this does not create a new x, it just re-assigns the same x to 20.

// let is block scoped -> the inner x is not the same as outer one
let str='hello world';
let str1= "hello world ";

//boolean
//pay->loading->conformation

let isStudent=true;

//objects

let student = {
    name: "john",
    age:20,
    subject:"CSE"
};

console.log("this is my student object", student);

//arrays

let array1=[1,2,3,4,5];
console.log("this is from array",array1);

console.log( typeof"apple");

//operators
let a=20;
let b=30;
let sum1=a+b;
console.log("Addition of a and b is ", sum1);

//if else control statements

let age1=25;
if(age1>=25){   
    console.log("you can login");
}
else{
    console.log("you cannot enter");
}

//ternary operator

let age2=20;
let status1=age2>=18 ? "adult":"minor";
console.log("ternary operator ",status1);


let arr = [1,2,3,4,5,6,7,8,9,10];
var sum2=0;
for(let i of arr){
    if(i%2==0){
        sum2+=i;
    }
}
console.log("sum of even elements",sum2);

//string arrays

let fruits = ["apple","banana","orange"];
console.log("array of fruits is",fruits);

//add an element tonthe end of an array
let num=[1,2,3];
num.push(4);
console.log(num);

//remove the last element of array

let items=["pen","pencil","eraser"];
items.pop();
console.log("items list",items);

//remove the first element of an array
let items1=["pen","pencil","eraser"];
items1.shift();
console.log(items1)

//find the length of array
let nums =[10,20,30,40];
console.log(nums.length);



// Step 1: Create an array of fruits
let fruits1 = ["banana", "mango"];

// Step 2: Add "apple" to the beginning of the array
// Step 3: Add "orange" and "grape" to the end of the array
// Step 4: Remove the last fruit
// Step 5: Remove the first fruit
// Step 6: Check if "mango" is in the array
// Step 7: Find the index of "grape"
// Step 8: Join all fruits into a single string, separated by hyphens (-)
// Step 9: Print the total number of fruits
// Step 10: Use a for loop to print each fruit with its position (1-based index)

// Write code to perform all the above steps