const add = (a: number, b: number = 1) => a +b;
const printOutput: (a:number | string) => void = output => console.log(output);

const button = document.querySelector('button');

if(button){
    button.addEventListener('click', event => console.log(event));
}
printOutput(add(5));
// -----------------------

{
const hobbies = ['Sports','Cooking', 'Painting'];
const activieHobbies = ['Hiking',...hobbies];
console.log(activieHobbies);

const person ={
    name: 'Victor',
    age: 27,
}

const copyPerson = {
    lastName: 'Tilve',
    ...person
}
//rest parameters
const add = (...numbers: number[]) => {
    return numbers.reduce((curResult,curlValue)=>{
        return curResult + curlValue;
    },0);
}

const addedNumbers = add(5,10,2,3.7);
console.log(addedNumbers);

/* Array and object destructuring */

const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies,hobby1,hobby2, remainingHobbies);

//name must be the same than in the object, at least you specifify mapping
// const {name:firstName,age} = person;
//
const {name,age} = person;
console.log(name,age);


}