const removeFromArray = function(arr, ...values) {
    let workArr = [...arr]
    let filtered = []

    for (let i=0; i<values.length; i++) {
        if (workArr.includes(values[i])){

            console.log(values[i])

            workArr = workArr.filter(element => {
                return element !== values[i]
            }) 
        }
    }
    return workArr
};

// Do not edit below this line
module.exports = removeFromArray;
