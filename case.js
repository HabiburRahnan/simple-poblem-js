const userName = "Habibur Rahman";
const userInput = "Habibur RahMaN";
console.log(userName.toUpperCase());
console.log(userInput.toUpperCase());
console.log(userName.toLocaleLowerCase());
if (userName.toLowerCase() === userInput.toLowerCase()) {
  console.log("valid number");
} else {
  console.log("unvalid number");
}
