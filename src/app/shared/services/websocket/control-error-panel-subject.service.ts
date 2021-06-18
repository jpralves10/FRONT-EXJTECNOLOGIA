import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable()
export class ControlErrorPanelSubjectService {

    private verificaErro: Subject<any> = new Subject();
    public verificaErro$: Observable<any> = this.verificaErro.asObservable()

    public lancarErro(): void {
        this.verificaErro.next({error: 'erro'});
    }
}