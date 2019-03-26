export default class consulta{
    constructor(consultation){
        this._date = consultation.date;
        this._time = consultation.time;
        this._patientName = consultation.patientName;
        this._getMissingDays();
    }

    _getMissingDays(){
        let oneDay = 24 * 60 * 60 * 1000;
        let difference = this._date.getTime() - new Date(new Date().toDateString()).getTime();
        return Math.round(difference / oneDay);
    }

    getDateAsString(){
        let today = new Date().getTime();
        let cDate = this._date.getTime();

        if(today > cDate){
            return "--/--/--"
        }else{
            let date = this._date.toString().split(' ');
            return date[0] + "/ " + date[1] +"-"+ date[2] + "-" + date[3];
        }
    }
}