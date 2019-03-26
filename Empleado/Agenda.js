import Employee from "./Employee.js";

export default class Agenda{
    constructor(tableEmployees, tableInfo){
        this._tableEmployees = tableEmployees;
        this._tableInfo = tableInfo;
        this._emplWSalary10 = 0;
        this._emplWSalary10_20 = 0;
        this._emplWSalary20 = 0;
        this._totalSalaries = [];
        this._totalAges = [];
        this._employees = [];
        this._initTables();
    }

    _initTables(){
        if (localStorage.getItem("employees")){
            let employees = JSON.parse(localStorage.getItem("employees"));
            employees.forEach( (employee, index) => {
                employee.birthdate = new Date(employee.birthdate);
                employee.hireDate = new Date(employee.hireDate);
                this.showInTable(new Employee(employee));
            });
        }
    } 

    addEmployee(employee){
        let objEmployee = {
            numEmployee: employee._numEmployee,
            fullName: employee._fullName,
            birthdate: employee._birthdate,
            hireDate: employee._hireDate,
            salary: employee._salary
        };

        this._employees.push(objEmployee);
        localStorage.setItem("employees", JSON.stringify(this._employees));

        this.showInTable(employee);
    }

    showInTable(employee){
        let row = this._tableEmployees.insertRow(-1);

        let cellNumEmployee = row.insertCell(0);
        let cellFullName = row.insertCell(1);
        let cellBirthdate = row.insertCell(2);
        let cellHireDate = row.insertCell(3);
        let cellSalary = row.insertCell(4);
        let cellAge = row.insertCell(5);
        let cellAntiquity = row.insertCell(6);

        cellNumEmployee.innerHTML = employee._numEmployee;
        cellFullName.innerHTML = employee._fullName;
        cellBirthdate.innerHTML = employee.getBirthdateAsString();
        cellHireDate.innerHTML = employee.getHireDateAsString();
        cellSalary.innerHTML = employee._salary;
        cellAge.innerHTML = employee._getAge();
        cellAntiquity.innerHTML = employee._getAntiquity();

        if(employee._salary <= 10000){
            this._emplWSalary10++;
        }else if(employee._salary > 10000 && employee._salary <= 20000){
            this._emplWSalary10_20++;
        }else if(employee._salary > 20000){
            this._emplWSalary20++;
        }

        this._totalSalaries.push(employee._salary);
        let salariesAdd = this._totalSalaries.reduce((previous, current) => current += previous);
        let avgSalaries = salariesAdd / this._totalSalaries.length;

        this._totalAges.push(employee._getAge());
        let ageAdd = this._totalAges.reduce((previous, current) => current += previous);
        let avgAges = ageAdd / this._totalAges.length;

        this._tableInfo.rows[1].cells[1].innerHTML = this._emplWSalary10;
        this._tableInfo.rows[2].cells[1].innerHTML = this._emplWSalary10_20;
        this._tableInfo.rows[3].cells[1].innerHTML = this._emplWSalary20;
        this._tableInfo.rows[4].cells[1].innerHTML = avgSalaries;
        this._tableInfo.rows[5].cells[1].innerHTML = avgAges;
    }

}