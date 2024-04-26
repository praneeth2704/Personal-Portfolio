
//Type 1 of declaration of function
// function getMultiply(num1,num2){ // Its an standard type
//     return num1*num2;
// }
// console.log(getMultiply(5,6));

// //Type 2
// const diffOfNumbers = function(a,b){ // functions can be declared with the variables also and better to use const key word rather than let  or var;
//     return a-b;
// }
// console.log(diffOfNumbers(4,2));

// //Type 3
// const sumOfNumbers = (a,b) => { // better to use 'const' variable declaration rather than 'let' or 'var';
//     let sum = a+b;
//     return sum;
// }
// console.log(sumOfNumbers(2,3));

// let crr =[87,86,85,83,82];
// crr.sort();
// console.log(crr);

// let arr = [23,4,3,23,4,5,56];
// arr.sort();
// console.log(arr);

// let brr = [9,7,5,4,3,2,1];
// brr.sort();
// console.log(brr);
let arr = [10,20,30,40,50];
let getSum =(arr) => {
    let sum=0;
    arr.forEach((value) => {
        sum=sum + value;
    })
    return sum;   
};

console.log(getSum(arr));



// console.log(typeof(arr));

// let ans=arr.map((number) => {
//     return number;
// });

// console.log(ans);

// let ans1=arr.filter((number) => {
//     return number%2===0;
// });
// console.log(ans1);

// let ans2=arr.reduce((acc, curr) => {
//         return acc-curr;
// }, 1);
// console.log(ans2);