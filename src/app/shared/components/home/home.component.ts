import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ApresentacaoModalComponent } from './apresentacao-modal/apresentacao-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {}

  public apresentacaoShowDialog(){

    const confirmationModalTitle = 'Deseja prosseguir com a operação';
    const confirmationModalMessage = 'Os dados não salvos serão perdidos.';
    
    const apresentacaoModalComponent: NgbModalRef = this.modalService.open(ApresentacaoModalComponent, {
      centered: true,
      windowClass: 'modal-rules',
      backdrop: 'static',
      size: 'lg'
    });
    
    const modalComponentInstance: ApresentacaoModalComponent = 
    apresentacaoModalComponent.componentInstance;
    /*modalComponentInstance.modalTitle = confirmationModalTitle;
    modalComponentInstance.modalConfirmationMessage = confirmationModalMessage;
    */
    apresentacaoModalComponent.result.then(
      () =>{},
      () =>{}
    );
  }
}
