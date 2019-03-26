import Consulta from "./Consulta.js";

export default class Agenda{
    constructor(tableConsultation, tableInfo){
        this._tableConsultation = tableConsultation;
        this._tableInfo = tableInfo;
        this._sunAppointments = 0;
        this._monAppointments = 0;
        this._tueAppointments = 0;
        this._wedAppointments = 0;
        this._thuAppointments = 0;
        this._friAppointments = 0;
        this._satAppointments = 0;
        this._consultations = [];
        this._initTable();

    }

    _initTable(){
        if (localStorage.getItem("consultation")) {
            this._consultations = JSON.parse(localStorage.getItem("consultation"));
            
            this._consultations.forEach( (consultation, index) => {
                consultation.date = new Date(consultation.date);
                
                this.showInTable(new Consulta(consultation));                
            });
        };
    }

    addConsultation(consultation){
        let objConsultation = {
            date: consultation._date,
            time: consultation._time,
            patientName: consultation._patientName
        }

        this._consultations.push(objConsultation);

        localStorage.setItem("consultation", JSON.stringify(this._consultations));
        this.showInTable(consultation);
    }

    showInTable(consultation){
        let row = this._tableConsultation.insertRow(-1);

        let cellDate = row.insertCell(0);
        let cellTime = row.insertCell(1);
        let cellPatientName = row.insertCell(2);
        let cellMissingDays = row.insertCell(3);
        
        cellDate.innerHTML = consultation.getDateAsString();
        cellTime.innerHTML = consultation._time;
        cellPatientName.innerHTML = consultation._patientName;
        cellMissingDays.innerHTML = consultation._getMissingDays();

        switch (consultation._date.getDay()) {
            case 0:
                this._sunAppointments++;
                break;
            case 1:
                this._monAppointments++;
                break;
            case 2:
                this._tueAppointments++;
                break;
            case 3:
                this._wedAppointments++;
                break;
            case 4:
                this._thuAppointments++;
                break;
            case 5:
                this._friAppointments++;
                break;
            case 6:
                this._satAppointments++;
                break;
            default:
                break;
        }

        this._tableInfo.rows[1].cells[1].innerHTML = this._monAppointments;
        this._tableInfo.rows[2].cells[1].innerHTML = this._tueAppointments;
        this._tableInfo.rows[3].cells[1].innerHTML = this._wedAppointments;
        this._tableInfo.rows[4].cells[1].innerHTML = this._thuAppointments;
        this._tableInfo.rows[5].cells[1].innerHTML = this._friAppointments;
        this._tableInfo.rows[6].cells[1].innerHTML = this._satAppointments;
        this._tableInfo.rows[7].cells[1].innerHTML = this._sunAppointments;
    }


} 