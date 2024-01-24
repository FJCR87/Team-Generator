// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class manager extends Employee {
    constructor(OfficeNumber){
        this.OfficeNumber = OfficeNumber;

    }

    getRole(){
        console.log()
    }
}