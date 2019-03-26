export default class Gasto{
    constructor(gasto){
        this._fecha = gasto.fecha;
        this._tipo = gasto.tipo;
        this._concepto = gasto.concepto;
        this._monto = Number(gasto.monto)
    }

    getFechaString(){
        let fecha = this._fecha.toString().split(' ');
        return fecha[0] + "/ " + fecha[1] +"-"+ fecha[2] + "-" + fecha[3];
    }
}