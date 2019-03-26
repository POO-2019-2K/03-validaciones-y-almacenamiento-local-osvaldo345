import Agenda from ".problema1./agenda.js";
import Empleado from ".problema1./Empleados.js";

class Main {
  constructor() {
    let agenda = new Agenda(
      document.querySelector("#agenda"),
      document.querySelector("#info")
    );

    document.querySelector("#btnAdd").addEventListener("click", () => {
      let form = document.querySelector("#form");
      form.classList.add("was-validated");

      if (form.checkValidity() === true) {
        let id = document.querySelector("#id").value;
        let name = document.querySelector("#name").value;
        let sBirthday = document.querySelector("#birthday").value;
        sBirthday = sBirthday.split("-");

        let birthday = new Date(sBirthday[0], sBirthday[1] - 1, sBirthday[2]);

        let contratacion = document.querySelector("#contratacion").value;
        let sueldo = document.querySelector("#sueldo").value;

        let objEmployee = {
          name: name,
          id: id,
          birthday: birthday,
          contratacion: contratacion,
          sueldo: sueldo
        };

        let employee = new Empleado(objEmployee);

        agenda.addEmployee(employee);

      }

      console.log(form.checkValidity());



    });
  }
}

let m = new Main();