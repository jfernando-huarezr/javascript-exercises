const reverseString = function(string) {
    if (string==="") return string

    let splitString = string.split("")
    splitString = splitString.reverse()
    
    return splitString.join("")
};

// Do not edit below this line
module.exports = reverseString;
