// Define an array of possible operations
// Extract the union type of the array elements as the Operation type
const operations = ["add", "subtract"] as const;
type Operation = typeof operations[number];

// Parse the command line arguments
const args = process.argv.slice(2);
if (args.length !== 3) {
  console.error("Usage: node calc.js <operation> <num1> <num2>");
  process.exit(1);
}

// Parse the operation and check it is valid
const operation = args[0] as Operation;
if (!operations.includes(operation)) {
  console.error(`Invalid operation: ${operation}, possible operations: ${operations.join(", ")} `);
  process.exit(1);
}

// Parse the numbers and check they are valid
const num1 = parseInt(args[1]);
const num2 = parseInt(args[2]);
if (isNaN(num1) || isNaN(num2)) {
  console.error("Invalid arguments: <num1> and <num2> must be numbers");
  process.exit(1);
}

// Perform the operation and print the result
let result;
if (operation === "add") {
  result = num1 + num2;
} else {
  result = num1 - num2;
} 

console.log(result);
