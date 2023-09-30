const sumAll = function(firstNumber,secondNumber) {
    if(firstNumber<0 || secondNumber<0) return 'ERROR'
    if(typeof(firstNumber) !== "number" || typeof(secondNumber) !== "number") return 'ERROR'
    
    let a = 0
    let b = 0

    if (firstNumber > secondNumber) {
        a = firstNumber
        b = secondNumber
    }

    else {
        a = secondNumber
        b = firstNumber
    }
    
    let answer = 0
    for(let i=b; i<=a; i++) {
        answer = answer+i
    }

    return answer
};

// Do not edit below this line
module.exports = sumAll;
