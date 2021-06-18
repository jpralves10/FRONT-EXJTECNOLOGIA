import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { PrincipalRoutingModule } from "./principal-routing.module";
import { PrincipalComponent } from "./principal.component";

@NgModule({
    declarations: [
        PrincipalComponent
    ],
    imports: [
        CommonModule,
        PrincipalRoutingModule,
        SharedModule
    ]
})
export class PrincipalModule {}