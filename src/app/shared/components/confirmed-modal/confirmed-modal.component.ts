import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirmed-modal',
  templateUrl: './confirmed-modal.component.html',
  styleUrls: ['./confirmed-modal.component.css']
})
export class ConfirmedModalComponent implements OnInit {

  private readonly bodyTag: string = 'body'
  private readonly modalClass: string = 'modal'
  private readonly hiddenClass: string = 'hidden'
  private readonly autoClass: string = 'auto'

  public confirmacao = false
  public modalTitle: string = 'Modal de Confirmação'
  public modalConfirmationMessage: string = 'Deseja confirmar a operação?'
  public modalConfirmButtonText: string = 'SEGUIR'
  public modalCancelButtonText: string = 'VOLTAR'

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void { }

  // Função chamada ao pressionar o botão de cancelamento do modal
  public dismissModal(): void {
    this.activeModal.dismiss();
    this.configScroolsOfOtherOpennedModals();
  }

  // Configura os scrolls da página e de otros modais abertos, caso exista algum
  private configScroolsOfOtherOpennedModals(): void {
    let modal: HTMLElement = document.getElementsByClassName(this.modalClass)[0] as HTMLElement;

    if(!!modal){
      let body = document.getElementsByTagName(this.bodyTag)[0] as HTMLElement;

      if(!!body && !this.confirmacao){
        body.style.overflowY = this.autoClass;
      } else {
        body.style.overflowY = this.hiddenClass;
      }

      modal.style.overflowY = this.autoClass;
    }
  }

  // Função chamada ao apertar o botão de confirmação do modal
  public closeModal(): void {
    this.activeModal.close()
  }
}
