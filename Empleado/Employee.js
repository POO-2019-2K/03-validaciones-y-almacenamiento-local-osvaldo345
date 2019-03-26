export default class Employee{
    constructor(employee){
        this._numEmployee = employee.numEmployee;
        this._fullName = employee.fullName;
        this._birthdate = employee.birthdate;
        this._hireDate = employee.hireDate;
        this._salary = Number(employee.salary);
        this._getAge();
        this._getAntiquity();
    }

    _getAge(){
        let oneYear = 24 * 60 * 60 * 1000 * 365;
        let difference = new Date() - this._birthdate.getTime();
        return Math.round(difference / oneYear);
    }

    _getAntiquity(){
        let oneYear = 24 * 60 * 60 * 1000 * 365;
        let difference = new Date() - this._hireDate.getTime();
        return Math.round( difference / oneYear);
    }

    getBirthdateAsString(){
        let date = this._birthdate.getDate() + "-" + this._birthdate.getMonth() + "-" + this._birthdate.getFullYear();
        return date;
    }

    getHireDateAsString(){
        let date = this._hireDate.getDate() + "-" + this._hireDate.getMonth() + "-" + this._hireDate.getFullYear();
        return date;
    }
}