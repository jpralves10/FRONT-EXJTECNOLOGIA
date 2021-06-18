import { Injectable } from "@angular/core";

@Injectable()
export class StringUtilsService {

    private readonly normalize = 'NFD';
    private readonly regex = /[\u0300-\u036f]/g;

    public readonly emptyString: string = '';

    constructor(){}

    /**
     * Remove toda a acentuação de uma string
     */
    public removeAccents(value: string): string {
        var converterParaString: string = value.toString();
        return converterParaString.normalize(this.normalize).replace(this.regex, '') || '';
    }
}