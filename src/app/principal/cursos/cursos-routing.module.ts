import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CursosComponent } from "./cursos.component";

const routes: Routes = [
    {
        path: '',
        data: {
            breadcrumb: {visible:false}
        },
        component: CursosComponent,
        children: [
            {
                path: 'administracao',
                loadChildren: './administracao/administracao.module#AdministracaoModule',
                //canActivateChild: [AuthGuardService],
                data: {
                    breadcrumb: {
                        visible: true,
                        label: 'Administração'
                    }
                }
            },
            {
                path: 'contabilidade',
                loadChildren: './contabilidade/contabilidade.module#ContabilidadeModule',
                //canActivateChild: [AuthGuardService],
                data: {
                    breadcrumb: {
                        visible: true,
                        label: 'Contabilidade'
                    }
                }
            },
            {
                path: 'economia',
                loadChildren: './economia/economia.module#EconomiaModule',
                //canActivateChild: [AuthGuardService],
                data: {
                    breadcrumb: {
                        visible: true,
                        label: 'Economia'
                    }
                }
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CursosRoutingModule {}