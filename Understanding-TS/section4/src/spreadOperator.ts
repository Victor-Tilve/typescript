// const userName = 'Victor';
// let age = 27;
// age = 30;

// let result;
// function add(a:number, b:number){
//     result = a + b;
//     return result;
// }
// console.log(result)

const hobbies = ['Sports','Cooking'];
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
console.log(copyPerson)