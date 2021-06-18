import { Injectable } from "@angular/core";

@Injectable()
export class DateUtilsService {

    /**
     * Regex para verificar datas no padrão dd/mm/yyyy
     */
    private readonly datePattern = /^(\d{2,2})(\/)(\d{2,2})\2(\d{4}|\d{4})$/;

    constructor(){}

    /**
     * Verifica se o valor informado é do tipo date
     */
    public isInstanceOfDate(value: string){
        const tipo = typeof(value);
        if(value != null && tipo === 'string'){
            return value.match(this.datePattern) !== null ? true : false;
        }else{
            return false;
        }
    }

    /**
     * Recupera um Date de um valor com padrão de data do Brasil (dd/mm/yyyy)
     */
    public getDateValueFromBrasilFormat(value: string){
        try{
            if(value != null){
                var dateSplit = value.split('/');
                return new Date(Number(dateSplit[2]), Number(dateSplit[1]) -1, Number(dateSplit[0]));
            }else{
                return null;
            }
        }catch(error){
            return null;
        }
    }

    /**
     * Retorna uma string com a data formatada para o padrão brasileiro
     */
    public getFormattedDate(date: Date){
        var dd = date.getDate();
        var mm = date.getMonth() + 1;
        var yyyy = date.getFullYear();

        var day: String = '' + date.getDate();
        var month: String = '' + (date.getMonth() + 1);

        if(dd < 10){
            day = '0' + dd;
        }

        if(mm < 10){
            month = '0' + mm;
        }

        return day + '/' + month + '/' + yyyy;
    }
}