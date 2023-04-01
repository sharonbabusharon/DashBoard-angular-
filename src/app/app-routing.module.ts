import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AppComponent } from './app.component';
import { AreaChartComponent } from './area-chart/area-chart.component';
import { CardsComponent } from './cards/cards.component';
import { EmployeesComponent } from './employees/employees.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LeadEmployeeComponent } from './lead-employee/lead-employee.component';
import { MainComponent } from './main/main.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {path:'' ,component:MainComponent},
  {path:'add-employee' ,component:AddEmployeeComponent},
  {path:'gallery' , component:GalleryComponent},
  {path:'employees', component:EmployeesComponent},
  {path:'lead-employee' ,component:LeadEmployeeComponent},
  {path:'card' ,component:CardsComponent},
  {path:'area-chart' ,component:AreaChartComponent},
  {path:'pie-chart' ,component:PieChartComponent},
  {path:'table' ,component:TableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
