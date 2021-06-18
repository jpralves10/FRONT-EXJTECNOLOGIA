import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Output } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterEvent } from '@angular/router';
import { Observable, Subscription, of } from 'rxjs';
import { Breadcrumb } from '../../model/breadcrumb.model';
import { BreadcrumbService } from '../../services/breadcrumb/breadcrumb.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  @Output() public breadcrumbs: Observable<Array<Breadcrumb>>

  private routerEventsSubscription: Subscription;
  private readonly breadcrumbDisabledClass: string = 'disabled';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private breadcrumbService: BreadcrumbService
  ) { }

  ngOnInit(): void {
    /**
     * Algumas vezes, os eventos de navegação do Router finalizam antes do componente
     * ser inicializado. Por isso, é necessário obter os breadcrumbs na inicialização
     * e depois ativar a função que atualiza eles a cada mudança de rota.
     */
    this.breadcrumbs = of(
      this.breadcrumbService.getBreadcrumbsFromRootRoute(this.activatedRoute.root));

    this.routerEventsSubscription = this.router.events.subscribe((event: RouterEvent | any) => {
      if(event instanceof NavigationEnd){
        this.breadcrumbs = 
          of(this.breadcrumbService.getBreadcrumbsFromRootRoute(this.activatedRoute.root))
      }
    })
  }

  public ngOnDestroy(): void {
    this.routerEventsSubscription.unsubscribe();
  }

  /**
   * Valida se um breadcrumb está habilitado, se é um link externo,
   * e faz o redirecionamento para a página
   * @param breadcrumb para direcionar
   */
  public navigate(breadcrumb: Breadcrumb): void {
    if(breadcrumb.isLinkEnabled){
      breadcrumb.isExternalLink ?
      (this.document.location.href = breadcrumb.url) :
      this.router.navigate([breadcrumb.url]);
    }
  }

  /**
   * Retorna as classes dinâmicas dos itens do breadcrumb
   */
  public calculateBreadcrumbItemClasses(breadcrumb: Breadcrumb): Object {
    let classes: Object | any = {};
    classes[this.breadcrumbDisabledClass] = !breadcrumb.isLinkEnabled;
    return classes;
  }

}
