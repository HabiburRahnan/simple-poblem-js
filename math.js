const result = Math.pow(3, 2);
console.log(result);

const num1 = 35;
const num2 = 75;

gap = Math.abs(num1 - num2);

if (gap < 5) {
  console.log("You guys can be friend");
} else {
  console.log("you cannot be friend");
}

// FULL NUMBER

const number = 2.500001;
const fullNumber = Math.round(number);

console.log(fullNumber);


// random

const result2 = Math.round(Math.random()*100)
console.log(result2)

for(i = 0; i < 20; i++){
    const random = Math.round(Math.random()*6)
    console.log(random)
}