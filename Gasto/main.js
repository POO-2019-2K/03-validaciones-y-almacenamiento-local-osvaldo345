import Agenda from "./Agenda.js";
import Gasto from "./Gasto.js";

class main{
    constructor(){
        this._agenda = new Agenda(
            document.querySelector("#tablaGasto"),
            document.querySelector("#tablaInfo")
        );
        
        document.querySelector("#btnAdd").addEventListener("click", () => {
            
            let form = document.querySelector("#form");
            form.classList.add("was-validated");

            if (form.checkValidity() == true) {
                
                let fecha = document.querySelector("#fecha").value;
                fecha = fecha.split("-");
                fecha = new Date(fecha[0], fecha[1]-1, fecha[2]);
                
                
                let tipo = document.querySelector("#tipo").value;
    
                let concepto = document.querySelector("#concepto").value;
        
                let monto = document.querySelector("#monto").value;

                let objGasto = {
                    fecha: fecha,
                    tipo: tipo,
                    concepto: concepto,
                    monto: monto
                };

                let gasto = new Gasto(objGasto);
                
                this._agenda.addGasto(gasto);
            }
        });
    }
}

let m = new main();