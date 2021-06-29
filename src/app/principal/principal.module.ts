import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SessionManagerService } from "../shared/services/session-manager/session-manager.service";
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
    ],
    providers: [
        SessionManagerService
    ]
})
export class PrincipalModule {}