import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { SingleStudentComponent } from './single-student/single-student.component';
import { GeneralStatsComponent } from './general-stats/general-stats.component';
import { ClassStatsComponent } from './class-stats/class-stats.component';


const routes: Routes = [
  { path : '', component: Page1Component},
  { path : 'page2', component: Page2Component},
  { path : 'student', component: SingleStudentComponent},
  { path : 'generaly', component: GeneralStatsComponent},
  { path : 'classroom/:id', component: ClassStatsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
