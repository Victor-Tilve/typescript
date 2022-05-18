const person:{
    name: string;
    age: number;
    hobbies: string[];
    role: [number,string]
} = {
name: "Victor",
age: 27,
hobbies: ['Sport','Coooking'],
role: [2,'author ']
};

person.role.push('admin');
person.role[0] = 10;

console.log(person)