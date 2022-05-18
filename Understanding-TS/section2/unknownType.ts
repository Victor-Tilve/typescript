let userInput2: any;
let userInput: unknown;
let userName: string;


userInput = 5;
userInput = 'Max'

// userName = userInput2; // with any type typescript just give up and let you do whatever you want
// userName = userInput;


//unknown type is better than any, but fi you have a hint you acan use an union type
if ( typeof userInput === 'string'){
    userName = userInput;
}