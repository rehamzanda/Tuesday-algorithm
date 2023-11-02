//1. Addition

//Add all the values between 200 and 2700 (inclusively) that are divisible by 3 or 5, but not both 3 and 5. To solve this task you might want to use the modulus operator.
//------------------

//range of numbers between 200 and 2700
//for loop inside this range of numbers
//if those numbers(number divisibleby  3 || number divisibleby 5  && ! number divisibleby 3 && number divisibleby)
//then sum += number 


let sum= 0;
for(let number=200 ; number<=2700 ;number++){
    if((number%5 === 0 || number%3 === 0) && !(number % 3 === 0 && number % 5 === 0)){
        sum += number;
    }
}
console.log(sum);

//2. Shift the Values

//Given any array X, for example [2,1,6,4,-7], create an algorithm that shifts each number by one to the front. When your program is done the output for array [2,1,6,4,-7] should be [-7,4,6,1,2].

//defined an array
//creat a new array to put the shifted elements
//loop through the elements of array but in the other way around
//push the shited values of array to the new array
//print the new array


let shiftedArr=[];
let arrayX= [2,1,6,4,-7];
for(let i=arrayX.length-1 ; i>=0; i--){
    shiftedArr.push(arrayX[i])
    
}
console.log(shiftedArr);


//3. FizzBuzz

//Create an algorithm that inserts the numbers from 1 to 135 into an array, while replacing the values that are divisible by 3 with the word "Fizz", the numbers that are divisible by 5 with the word "Buzz", and the numbers that are divisible with 3 and 5 with the word "FizzBuzz". Your output should look like [1,2, 'Fizz',4, 'Buzz', 'Fizz',7, 8, ...]
 


let result = [];
for (let i = 1; i <= 135; i++) {
  result.push(i);
}
result.forEach(element => {
    if(element%5 === 0 && element%3 === 0){
      result[element-1]= "FizzBuzz"
    }
    else if(element%5 === 0){
      result[element-1]= "Buzz" }
    else if(element%3 === 0){
      result[element-1]= "Fizz"
    }
});
console.log(result);

//4. Fibonacci
//For a Fibonacci sequence starting at 0 and 1 add up all the values below 1,000,000.
//A Fibonacci sequence is an infinite series of numbers that is created by adding the last two numbers in the series. A series would start with the numbers 0 and 1 in place, followed by 1 (0+1), 2 (1+1), 3 (1+2), 5 (3+2), etc.
//0 1 1 2 3 5 8 13 21...


function FebonavcciSeq (n){
let firstElemet = 0;
let secondElement = 1;
let seqsum= 0
let strseq = '01';
for(seqnumber=0; seqnumber< n ; seqnumber++){
  seqsum = firstElemet + secondElement;
  strseq +=seqsum 
  firstElemet = secondElement;
  secondElement = seqsum;
}
 return strseq;

}
let n= 7;
let feboSeq= FebonavcciSeq(n);
console.log(feboSeq)
//5. Remove the Negative

//Given any array X, for example [1,-2,4,1], remove the negative numbers, so that the output becomes: [1,4,1].

// define a new array to save positive number inside it
// for loop inside the arr
//if to check the numbers
// push the positive numbers inside new array
let arrx=[1,-2,4,1];
let newArr= [];
for(let i=0 ; i<arrx.length; i++){
    if(arrx[i]>=0){
       newArr.push(arrx[i]);
    }
}
console.log(newArr);


//6. Communist Censorship

//Given the array of strings X = ['Man', 'I','Love','The','Matrix','Program'], replace every letter of the word Program with *, so the output would be ['Man', 'I','Love','The','Matrix','*******']. Then make your algorithm work for any word of your choice

// an array of string
// loop inside array 
//if element equal to this word ==> true
// replace every element of this element with *

function replaceWord(word){
    let aarayX = ['Man', 'I','Love','The','Matrix','Program'];
    let replacChar;
    let newString='';
    for(let i=0; i<aarayX.length; i++){
        if(aarayX[i] === word){
            let String1 = aarayX[i];
            for (let j = 0; j <  String1.length; j++) {
            replacChar = String1[j];
            replacChar = "*";
            newString += replacChar;
        }
     }   
    }
    return newString;
}

let Program = replaceWord('Matrix')
console.log(Program)


