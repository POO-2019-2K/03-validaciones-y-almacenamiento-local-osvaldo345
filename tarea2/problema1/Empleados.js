export default class Empleados {
    constructor(employee) {
      this._id = employee.id;
      this._name = employee.name.toUpperCase();
      this._birthday = employee.birthday;
      this._contratacion = employee._contratacion;
      this._sueldo = employee.sueldo;
      this._months = [
        "Ene",
        "Feb",
        "Mar",
        "Abr",
        "May",
        "Jun",
        "Jul",
        "Ago",
        "Sep",
        "Oct",
        "Nov",
        "Dic"
      ];
    }

    get id() {
      return this._id;
    }
  
  
    get name() {
      return this._name;
    }
  
    
    get birthday() {
      return this._birthday;
    }
  
    getBirthdayAsString() {
      let date =
        this._birthday.getDate() +
        "/" +
        this._months[this._birthday.getMonth()] +
        "/" +
        this._birthday.getFullYear();
  
      return date;
    }
  
    getAge() {
      let oneDay = 24 * 60 * 60 * 1000;
      let oneYear = oneDay * 365;
      let differenceMs = new Date() - this._birthday;
      let age = Math.trunc(differenceMs / oneYear);
  
      return age;
    }
    getAntiguedad() {
        let oneDay = 24 * 60 * 60 * 1000;
        let oneYear = oneDay * 365;
        let differenceMs = new Date() - this._birthday;
        let age = Math.trunc(differenceMs / oneYear);
    
        return age;
      }
  }
  