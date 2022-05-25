class Department {
    private employees:string[] = [];
    constructor(private readonly id:string,public name:string) {
    }

    describe(this:Department){
        console.log(`Department: ${this.id}, Name: ${this.name}`);
    }

    addEmployee(employee:string){
        this.employees.push(employee);
    }
    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees);
        
    }
}

class ITDepartment extends Department{
    constructor (id:string, public admins:string[]){
    super(id,'IT');
    }
}

class AccountingDepartment extends Department{
    constructor(id:string, private reports:string[]){
        super(id,'Accounting');
    }

    addReport (text:string){
        this.reports.push(text)
    }
    printReport(){
        console.log(this.reports);
        
    }
}

const  accounting = new AccountingDepartment('id1',['First Report']);
const  it = new ITDepartment('id1',['Max']);

// accounting.addEmployee('Max');
// accounting.addEmployee('Manu');
it.addEmployee('Max');
it.addEmployee('Manu');

// accounting.describe();
// accounting.printEmployeeInformation();
it.describe();
it.name = 'NEW NAME';
it.printEmployeeInformation();
// const accountingCopy = {
//     name:'Dummy',
//     describe:accounting.describe
// };

// accountingCopy.describe();
// console.log(typeof accountingCopy);
// console.log(typeof accounting);


console.log(it);
console.log(accounting);
