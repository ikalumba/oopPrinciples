//Encapsulation
class Employee {

    setEmpDetails(name, id, phoneNo) {
        this.name = name;
        this.id = id;
        this.phoneNo = phoneNo;
    }

    getEmpName() {
        return this.name;
    }
    
    getEmpId() {
        return this.id;
    }
    
    getEmpPhoneNo() {
        return this.phoneNo;
    }
}

let emp1 = new Employee();
emp1.setEmpDetails('Marvin', 1, '0781304333');
console.log(emp1.getEmpName()); // Output: Marvin
console.log(emp1.getEmpId()); // Output: 1
console.log(emp1.getEmpPhoneNo()); // Output: 0781304333