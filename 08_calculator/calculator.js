const add = function(a,b) {
	return a+b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(arr) {
	
  if (!arr.length) return 0
  

  const answer = arr.reduce((totalSum, element) => {
    return totalSum + element
  }, 0)

  return answer
};

const multiply = function() {

};


const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
