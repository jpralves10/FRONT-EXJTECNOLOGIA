import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Ng2TableModule } from "ng2-table";
import { NgxSpinnerModule } from "ngx-spinner";
import { SharedModule } from "src/app/shared/shared.module";
import { CursosRoutingModule } from "./cursos-routing.module";
import { CursosComponent } from "./cursos.component";

@NgModule({
    imports: [
        CursosRoutingModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        Ng2TableModule,
        NgxSpinnerModule,
        SharedModule
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    declarations: [
        CursosComponent
    ],
    exports: [
        CursosComponent
    ]
})
export class PainelControleModule {}