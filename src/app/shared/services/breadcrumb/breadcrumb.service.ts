import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpStatus } from "../../constants/http-status.constants";
import { Breadcrumb } from "../../model/breadcrumb.model";
import { StringUtilsService } from "../../utils/string-utils.service";
import { EnvironmentService } from "../environment/environment.service";

@Injectable()
export class BreadcrumbService {

    private readonly homeExJBreadcrumb: Breadcrumb;

    private readonly breadcrumbPropertyName: string = 'breadcrumb';

    constructor(
        private route: ActivatedRoute,
        private stringUtilsService: StringUtilsService,
        //private contractService: ContractService,
        private environmentService: EnvironmentService
    ){
        this.homeExJBreadcrumb = {
            visible: true,
            label: 'ExJ',
            url: this.environmentService.envModel.urlExJ,
            isLinkEnabled: true,
            isExternalLink: true,
            isPathParam: false,
            idPathParam: '',
            externalServiceName: undefined
        }
    }

    /**
     * Método que retorna a lista de Breadcrumbs para exibição de acordo com a rota raiz
     * Os itens do array estão em ordem hierárquica, sendo o item 0 o link para o sistema ExJ
     */
    public getBreadcrumbsFromRootRoute(rootRoute: ActivatedRoute): Array<Breadcrumb>{
        let breadcrumbs: Array<Breadcrumb> = [];
        breadcrumbs.push(this.homeExJBreadcrumb);
        
        return this.getBreadcrumbsFromChildren(rootRoute && rootRoute.firstChild, breadcrumbs);
    }

    //Privates

    private getBreadcrumbsFromChildren(
        route: ActivatedRoute | any, 
        breadcrumbs: Array<Breadcrumb>,
        baseUrl: string = this.stringUtilsService.emptyString): Array<Breadcrumb> {

        if(route && route.routeConfig){
            var breadcrumb: Breadcrumb | any;
            if(route.routeConfig.data !== undefined && 
                route.routeConfig.data.breadcrumb !== undefined &&
                route.routeConfig.data.breadcrumb.visible === true){
                    breadcrumb = 
                        this.createBreadcrumbFromRoute(route, !!route.firstChild, baseUrl);
                    breadcrumbs.push(breadcrumb);
                }
            
            return this.getBreadcrumbsFromChildren(
                route.firstChild, breadcrumbs, breadcrumb ? breadcrumb.url : '');
        } else {
            return breadcrumbs;
        }
    }

    private createBreadcrumbFromRoute(
        route: ActivatedRoute,
        hasChild: boolean,
        baseUrl: string = this.stringUtilsService.emptyString
    ): Breadcrumb {
        const breadcrumbRoute: Breadcrumb = route.routeConfig?.data &&
            route.routeConfig.data[this.breadcrumbPropertyName];
        
        let url: string = `${baseUrl}/${route.routeConfig?.path}`;
        const isExternalLink: boolean = false;
        const linkEnabled = breadcrumbRoute.isLinkEnabled == undefined ?
        true : breadcrumbRoute.isLinkEnabled;

        if(breadcrumbRoute.isPathParam){
            url = `${baseUrl}/` + this.getPathParam(route, breadcrumbRoute);
        }

        let breadcrumb: Breadcrumb = {
            visible: true,
            isExternalLink: isExternalLink,
            isLinkEnabled: hasChild ? false : linkEnabled,
            label: breadcrumbRoute.externalServiceName !== undefined ? '' : breadcrumbRoute.label,
            url: url,
            isPathParam: breadcrumbRoute.isPathParam,
            idPathParam: breadcrumbRoute.idPathParam,
            externalServiceName: breadcrumbRoute.externalServiceName
        }

        this.getBreadCrumbLabel(route, breadcrumb, breadcrumbRoute);

        return breadcrumb;
    }

    private getBreadCrumbLabel(
        route: ActivatedRoute,
        breadcrumb: Breadcrumb,
        breadcrumbRoute: Breadcrumb
    ): void {
        /*switch(breadcrumbRoute.externalServiceName){
            case 'ContractService':
                this.callExternalService(
                    breadcrumb,
                    breadcrumbRoute,
                    Number(this.getPathParam(route, breadcrumbRoute))
                )
                break;
            default:
                breadcrumb.label = breadcrumbRoute.label;
                break;
        }*/

        breadcrumb.label = breadcrumbRoute.label;
    }

    private getPathParam(route: ActivatedRoute, breadcrumb: Breadcrumb): string | null {
        if(breadcrumb.isPathParam){
            var value: string | any;
            route.params.subscribe(params => value = params[breadcrumb.idPathParam]);
            return value.toString();
        }
        return null;
    }

    /*private callExternalService(
        breadcrumb: Breadcrumb,
        breadcrumbRoute: Breadcrumb,
        param: number
    ): void {
        const limitConst = 0;
        const offsetConst = 0;

        let contracts = {} as ContractServiceResponse;
        let status: Array<ContractStatusEnum> = [
            ContractStatusEnum.Aprovado,
            ContractStatusEnum.AguardandoAprovacao,
            ContractStatusEnum.EmCriacao
        ]

        this.contractService.getContracts(limitConst, offsetConst, status).subscribe(res => {
            if(res != null){
                let contracts = res
                let contracts = contracts.result.find(contractObj => contractObj.id === param);
                if(contract){
                    breadcrumb.label = contract.name;
                }
            }
        }, (err) => {
            if(err.status == HttpStatus.zero || HttpStatus.isError(err.status)){
                breadcrumb.label = breadcrumbRoute.label;
            }
        })
    }*/
}