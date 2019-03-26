import Employee from "./Employee.js";
import Agenda from "./Agenda.js";

class main{
    constructor(){
        this._agenda = new Agenda(
            document.querySelector("#tableEmployees"),
            document.querySelector("#tableInfo")
        );

        document.querySelector("#btnAdd").addEventListener("click", () => {
            let form = document.querySelector("#form");
            form.classList.add("was-validated");
            
            if (form.checkValidity() == true){
                let numEmployee = document.querySelector("#numEmployee").value;
                let fullName = document.querySelector("#fullName").value;

                let birthdate = document.querySelector("#birthdate").value;
                birthdate = birthdate.split("-");
                birthdate = new Date(birthdate[0], birthdate[1], birthdate[2]);

                let hireDate = document.querySelector("#hireDate").value;
                hireDate = hireDate.split("-");
                hireDate = new Date(hireDate[0], hireDate[1], hireDate[2]);

                let salary = document.querySelector("#salary").value;

                let objEmploye = {
                    numEmployee: numEmployee,
                    fullName: fullName,
                    birthdate: birthdate,
                    hireDate: hireDate,
                    salary: salary
                };

                let employee = new Employee(objEmploye);

                this._agenda.addEmployee(employee);
            }
        });
    }
}

let m = new main();