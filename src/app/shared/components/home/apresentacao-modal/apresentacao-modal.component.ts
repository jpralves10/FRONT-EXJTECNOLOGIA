import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-apresentacao-modal',
  templateUrl: './apresentacao-modal.component.html',
  styleUrls: ['./apresentacao-modal.component.css']
})
export class ApresentacaoModalComponent implements OnInit {

  private readonly bodyTag: string = 'body'
  private readonly modalClass: string = 'modal'
  private readonly hiddenClass: string = 'hidden'
  private readonly autoClass: string = 'auto'

  public confirmacao = false
  public modalCancelButtonText: string = 'Cancelar'
  public modalConfirmButtonText: string = 'Ok'

  public modalTitle: string = 'Bem-vindo!'
  public modalConfirmationMessage: string = `Olá, querido leitor. Obrigado por estar aqui.
  Somos uma plataforma focada em criar e publicar conteúdos de alta qualidade e
  totamente gratuitos. Nosso principal objetivo é proporcionar artigos relevantes sobre 
  tecnologia e desenvolvimento de software. Artigos com embasamento teórico e 
  prático, abrangendo assuntos como desenvolvimento, arquitetura, data science, metodologias e 
  DevOps, dentre outros, proporcionando uma rica experiência para você. Sinta-se a vontade para 
  contactar-nos, mandar dicas e informações, estamos abertos a ouvir e melhorar nosso conteúdo. 
  Obrigado!`

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
