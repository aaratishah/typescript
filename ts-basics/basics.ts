
function combine(input1: string | number, input2: string | number){
    let result:string | number;
    if(typeof input1 === 'number' && typeof input2 === 'number'){
        result = +input1 + +input2
    }else{
        result = input1.toString() + input2.toString()
    }
    return result
}

console.log(combine(20, 30));
console.log(combine('40', '30'));
console.log(combine('John', 'Doe'));