import Gasto from "./Gasto.js";

export default class Agenda{
    constructor(tablaGasto, tablaInfo){
        this._tablaGasto = tablaGasto;
        this._tablaInfo = tablaInfo;
        this._gastosTransporte = 0;
        this._gastosHospedaje = 0;
        this._gastosAlimentos = 0;
        this._otrosGastos = 0;
        this._gastos = [];
        this._initTable();

    }

    _initTable(){
        if (localStorage.getItem("gastos")) {
            this._gastos = JSON.parse(localStorage.getItem("gastos"));
            
            this._gastos.forEach( (gasto, index) => {
                console.log(gasto);
                
                gasto.fecha = new Date(gasto.fecha);
                
                this.showInTable(new Gasto(gasto));                
            });
        };
    }

    addGasto(gasto){        
        let objGasto = {
            fecha: gasto._fecha,
            tipo: gasto._tipo,
            concepto: gasto._concepto,
            monto: gasto._monto
        };
        
        this._gastos.push(objGasto);

        localStorage.setItem("gastos", JSON.stringify(this._gastos));
        
         this.showInTable(gasto);
    }

    showInTable(gasto){
        
        let row = this._tablaGasto.insertRow(-1);

        let cellFecha = row.insertCell(0);
        let cellTipo = row.insertCell(1);
        let cellConcepto = row.insertCell(2);
        let cellMonto = row.insertCell(3);
        
        cellFecha.innerHTML = gasto.getFechaString();
        cellTipo.innerHTML = gasto._tipo;
        cellConcepto.innerHTML = gasto._concepto;
        cellMonto.innerHTML = gasto._monto;

        switch (gasto._tipo) {
            case "Transporte":
                this._gastosTransporte += gasto._monto;
                break;
            case "Hospedaje":
                this._gastosHospedaje += gasto._monto;
                break;
            case "Alimentos":
                this._gastosAlimentos += gasto._monto;
                break;
            case "Otros":
                this._otrosGastos += gasto._monto;
                break;
            default:
                break;
        }

        this._tablaInfo.rows[1].cells[1].innerHTML = this._gastosTransporte;
        this._tablaInfo.rows[2].cells[1].innerHTML = this._gastosHospedaje;
        this._tablaInfo.rows[3].cells[1].innerHTML = this._gastosAlimentos;
        this._tablaInfo.rows[4].cells[1].innerHTML = this._otrosGastos;
    }


} 