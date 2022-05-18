function add (num1: number, num2: number){
    return num1 + num2;
}

function printResult(num: number): void  {
    console.log('Result: ' + num)
}

function addAndHandle(n1:number,n2:number,cd:(num:number)=>void){
    const result = n1 + n2;
    cd(result);  
}

printResult(add(5,12));


//arrow function notation () => number;  for defining an obkect as a function type and specify the parameters and values for returning
// let combineValues: (num1: number, num2:number) => number;

const combineValues = add;
// combineValues = 5;

console.log( combineValues(5,8))

addAndHandle(10,20,(result) => {
    console.log(result)
})