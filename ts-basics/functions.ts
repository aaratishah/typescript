function add(n1: number, n2: number): number{   //number is the return type
    return n1+n2
}

function printResult(n: number) : void{    //void return type..don't need to mention as ts will infer the return type itself
    console.log("result: " + n);            // no return statement
}

function printResults(n: number) : undefined{    //undefined return type => when u return nothing
    console.log("result: " + n); 
    return;
}

printResult(add(20, 30))

let combineResult: (a: number, b: number) => number //accepts function with 2 arg and return type number

// combineResult = printResult  ----> printResult function has only one arg

combineResult = add

console.log(combineResult(30, 70));

function addAndHandle(n1: number, n2: number, cb: (n: number) => void){
    const result = n1 + n2
    cb(result)
}

addAndHandle(40, 50, (result) => {
    console.log(result);
    
})