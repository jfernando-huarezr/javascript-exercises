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

const multiply = function(arr) {
  if (!arr.length) return 0
  

  const answer = arr.reduce((totalMul, element) => {
    return totalMul*element
  }, 1)

  return answer
};


const power = function(num1,num2) {
  return Math.pow(num1,num2)
};

const factorial = function(num) {
	if (num == 0) return 1
  return factorial(num-1)*num
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
