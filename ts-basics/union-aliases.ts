type combinable = number | string
type result = "as-number" | "as-text"

function combine(input1: combinable, input2: combinable, resultConversion: result){
    let result:combinable;
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === "as-number"){
        result = +input1 + +input2
    }else{
        result = input1.toString() + input2.toString()
    }
    return result
}

console.log(combine(20, 30, "as-number"));
console.log(combine('40', '30', "as-number"));
console.log(combine('John', 'Doe', "as-number"));
console.log(combine('John', 'Doe', "as-text"));