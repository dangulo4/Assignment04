// IMPORT THE MODULE
import * as calc from './modules/calculator.js';
// COLLECT FIRST NUMBER FROM USER
let a = parseInt(prompt('Enter the first number'));
// COLLECT SECOND NUMBER FROM USER
let b = parseInt(prompt('Enter the second number'));
// SET FLAG FOR DO WHILE LOOP
let flag = 'false';
// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
do {
  let operation = prompt('Select operation: a, s, m, d (Add, Subtract, Multiply, Divide').toLowerCase();
  if (operation == 'a' || operation == 's' || operation == 'm' || operation == 'd') {
    flag = 'true';
    // CHECK TO SEE WHAT OPERATION THEY'RE USING
    // CALL THE APPROPRIATE FUNCTION
    switch (operation) {
      case 'a':
        console.log(`${a} + ${b} = ` + calc.add(a, b));
        break;
      case 's':
        console.log(`${a} - ${b} = ` + calc.subtract(a, b));
        break;
      case 'm':
        console.log(`${a} * ${b} = ` + calc.multiply(a, b));
        break;
      case 'd':
        console.log(`${a} / ${b} = ` + calc.divide(a, b));
        break;
    }
  } else {
    alert('You have entered an invalid operation, try again');
  }
} while (flag == 'false');
