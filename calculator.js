// Define the numbers and the operation here
let firstNumber = 3;
let secondNumber = 3;
let operation = "*";

// Write if-statements here
if (operation === "+") {
  console.log("its addition");
  console.log(
    `${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`
  );
} else if (operation === "-") {
  console.log("its subtraction");
  console.log(
    `${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`
  );
} else if (operation === "*") {
  console.log("its multiplication");
  console.log(
    `${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`
  );
} else {
  console.log("its division");
  console.log(
    `${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`
  );
}
