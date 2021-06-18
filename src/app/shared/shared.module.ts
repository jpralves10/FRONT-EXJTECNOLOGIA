import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

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

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
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
        HomeComponent
    ],
    exports: [
        HeaderComponent,
        HomeComponent,
        FooterComponent,
        ToolbarLateralComponent,
        ToolbarComponent,
        BreadcrumbComponent
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