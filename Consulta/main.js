import Agenda from "./Agenda.js";
import Consulta from "./Consulta.js";

class main{
    constructor(){
        this._agenda = new Agenda(
            document.querySelector("#tableConsultation"),
            document.querySelector("#tableInfo")
        );
        
        document.querySelector("#btnAdd").addEventListener("click", () => {
            let form = document.querySelector("#form");
            form.classList.add("was-validated");

            if (form.checkValidity() == true) {
                let date = document.querySelector("#consDate").value;
                date = date.split("-");
                date = new Date(date[0], date[1]-1, date[2]);

                let time = document.querySelector("#time").value;

                let patientName = document.querySelector("#patientName").value;

                let objConsultation = {
                    date: date,
                    time: time,
                    patientName: patientName
                };

                console.log(objConsultation);

                let consultation = new Consulta(objConsultation);

                this._agenda.addConsultation(consultation);
            }
        });
    }
}

let m = new main();