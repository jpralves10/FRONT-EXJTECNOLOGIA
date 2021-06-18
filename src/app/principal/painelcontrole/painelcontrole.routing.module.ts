import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PainelcontroleComponent } from "./painelcontrole.component";

const routes: Routes = [
    {
        path: '',
        component: PainelcontroleComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PainelControleRoutingModule {}