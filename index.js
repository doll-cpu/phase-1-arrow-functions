// Function expression for divide
const divide = function() {
  return 2000 / 100;
};

// Arrow function for square
const square = (number) => {
  return number * number;
};

// Arrow function for add
const add = (a, b) => {
  return a + b;
};

// Export the functions if you're using a module system
module.exports = { divide, square, add };
