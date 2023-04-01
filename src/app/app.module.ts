import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import { FooterComponent } from './footer/footer.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import { EmployeesComponent } from './employees/employees.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { LeadEmployeeComponent } from './lead-employee/lead-employee.component';
import { CardsComponent } from './cards/cards.component';
import { TableComponent } from './table/table.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { AreaChartComponent } from './area-chart/area-chart.component';
import {MatCardModule} from '@angular/material/card';
import { HighchartsChartModule } from 'highcharts-angular';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    AsideComponent,
    FooterComponent,
    EmployeesComponent,
    GalleryComponent,
    AddEmployeeComponent,
    LeadEmployeeComponent,
    CardsComponent,
    TableComponent,
    PieChartComponent,
    AreaChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatCardModule,
    HighchartsChartModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
