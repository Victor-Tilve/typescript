"use strict";
const add = (a, b = 1) => a + b;
const printOutput = output => console.log(output);
const button = document.querySelector('button');
if (button) {
    button.addEventListener('click', event => console.log(event));
}
printOutput(add(5));
{
    const hobbies = ['Sports', 'Cooking', 'Painting'];
    const activieHobbies = ['Hiking', ...hobbies];
    console.log(activieHobbies);
    const person = {
        name: 'Victor',
        age: 27,
    };
    const copyPerson = Object.assign({ lastName: 'Tilve' }, person);
    const add = (...numbers) => {
        return numbers.reduce((curResult, curlValue) => {
            return curResult + curlValue;
        }, 0);
    };
    const addedNumbers = add(5, 10, 2, 3.7);
    console.log(addedNumbers);
    const [hobby1, hobby2, ...remainingHobbies] = hobbies;
    console.log(hobbies, hobby1, hobby2, remainingHobbies);
    const { name, age } = person;
    console.log(name, age);
}
//# sourceMappingURL=other.js.map