import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuardService } from "../shared/services/guards/auth-guard.service";
import { PrincipalComponent } from "./principal.component";

const routes: Routes = [
    {
        path: '',
        data: {
            breadcrumb: {visible:false}
        },
        component: PrincipalComponent,
        children: [
            /*{
                path: 'cursos',
                //loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule),
                //canActivateChild: [AuthGuardService],
                data: {
                    breadcrumb: {
                        visible: true,
                        label: 'Cursos'
                    }
                }
            },*/
            /*{
                path: 'painelcontrole',
                loadChildren: () => import('./painelcontrole/painelcontrole.module').then(m => m.PainelControleModule),
                //canActivateChild: [AuthGuardService],
                data: {
                    breadcrumb: {
                        visible: true,
                        label: 'Painel de Controle'
                    }
                }
            }*/
        ]
    },
    {
        path: 'painelcontrole',
        loadChildren: () => import('./painelcontrole/painelcontrole.module').then(m => m.PainelControleModule),
        //canActivateChild: [AuthGuardService],
        data: {
            breadcrumb: {
                visible: true,
                label: 'Painel de Controle'
            }
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PrincipalRoutingModule {}