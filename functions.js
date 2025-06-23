// A JavaScript function is a block of code designed to perform a particular task.

// A JavaScript function is executed when "something" invokes it (calls it).

// function addValues () {
//     console.log("This is Normal function");
// } 

// addValues();  



// function addValues (){
//     let a = 100;
//     let b = 200;
//     // let res = a + b;
//     console.log("This is before return");
//     return a + b;
//     console.log("This is after return");
    
// }

// // console.log();

// console.log(addValues())


///  parameters and arguments

// function addValues (num1, num2) {    // parameters
//     console.log(num1 + num2);  // 200
// }

// addValues(100, 100);   // arguments



// function addValues (num1, num2) {    // parameters
//     return num1 + num2  // 200
    
// }

// console.log(addValues(100, 100));  // arguments


// rest operator ...

// function getValue (...num){
//    return num;
// }


// console.log(getValue(200, 500, 1000, 5000, 4500));



// function infoCode () {
//     let name = "Virat";
//     let age = 50;
//     let stuObj = {
//         stuName : "Pranit"
//     }
//     let arr = [1,2,3,4,5]
//     console.log(name, age, stuObj, arr);
    
// }


// infoCode()



// let userOne = {
//     userName : "Namit",
//     userID : "TCS1010"
// }

// function accessUser (Employee) {
//     console.log( `User details are: 
//                   The Name of TCS Employee or User ${Employee.userName}
//                   And the User ID of Employee is ${Employee.userID}
//                   ` );
// }

// accessUser(userOne)


// let arr = [500, 600, 700]


// function accessArray (getValue) {
//      return getValue[2]
// }

// console.log(accessArray(arr));



// let userDetail = {
//       userName : "Rajan",
//       UserID : "TCS1010",
//       otherDetail : function () {
//         console.log(`The Name of User is ${this.userName} and Id of user ${this.UserID}`);
        
//       }
// }


// console.log(userDetail.otherDetail());


// arrow function

// function One () {

// }


// const addValues = () => {
//     console.log("This is Arrow Function");
    
// }

// addValues()

// const addValues = (a, b) => {
//    return a * b;
// }

// console.log(addValues(100, 200));




// const addValues = () => console.log("This is Single line arrow function");

// addValues();


// const addValues = (a, b) => {return a * b}; 


// console.log(addValues(100, 200));


// IIFE

// function addValues () {
//     console.log("Normal function");
// }

// addValues()

// (function addValues () {
//     console.log("IIFE")
// } ) ();  //iv


// (function addValues (a, b) {
//     console.log("IIFE", a + b)
// } ) (5, 6);  //iv