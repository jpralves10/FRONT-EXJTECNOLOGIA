import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { BreadcrumbComponent } from "./components/breadcrumb/breadcrumb.component";
import { HeaderComponent } from './components/header/header.component'
import { ToolbarLateralComponent } from "./components/toolbar-lateral/toolbar-lateral.component";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { BreadcrumbService } from "./services/breadcrumb/breadcrumb.service";
import { ExcelService } from "./services/excel/excel.service";
import { AlunosService } from "./services/http/service-alunos/alunos.service";
import { DateUtilsService } from "./utils/date-utils.service";
import { StringUtilsService } from "./utils/string-utils.service";
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from "@angular/router";
import { LogoutComponent } from './components/logout/logout.component';
import { LoginComponent } from './components/header/login/login.component';
import { CadastrarComponent } from './components/header/cadastrar/cadastrar.component';
import { ConfirmedModalComponent } from './components/confirmed-modal/confirmed-modal.component';
import { ApresentacaoModalComponent } from './components/home/apresentacao-modal/apresentacao-modal.component';
import { BrowserModule } from "@angular/platform-browser";
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        NgxSpinnerModule,
        NgMultiSelectDropDownModule.forRoot(),
    ],
    declarations: [
        HeaderComponent,
        HomeComponent,
        FooterComponent,
        ToolbarLateralComponent,
        ToolbarComponent,
        BreadcrumbComponent,
        FooterComponent,
        HomeComponent,
        LogoutComponent,
        LoginComponent,
        CadastrarComponent,
        ConfirmedModalComponent,
        ApresentacaoModalComponent
    ],
    exports: [
        HeaderComponent,
        HomeComponent,
        FooterComponent,
        ToolbarLateralComponent,
        ToolbarComponent,
        BreadcrumbComponent,
        LogoutComponent,
        LoginComponent
    ],
    providers: [
        DateUtilsService,
        StringUtilsService,
        ExcelService,
        BreadcrumbService,
        AlunosService
    ]
})
export class SharedModule {}