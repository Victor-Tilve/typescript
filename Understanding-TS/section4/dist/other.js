"use strict";
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