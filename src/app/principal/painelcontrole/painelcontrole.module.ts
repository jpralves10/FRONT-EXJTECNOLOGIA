import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Ng2TableModule } from "ng2-table";
import { NgxSpinnerModule } from "ngx-spinner";
import { SharedModule } from "src/app/shared/shared.module";
import { PainelcontroleComponent } from "./painelcontrole.component";
import { PainelControleRoutingModule } from "./painelcontrole.routing.module";

@NgModule({
    imports: [
        PainelControleRoutingModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        Ng2TableModule,
        NgxSpinnerModule,
        SharedModule
    ],
    declarations: [
        PainelcontroleComponent
    ],
    exports: [
        PainelcontroleComponent
    ]
})
export class PainelControleModule {}