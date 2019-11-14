import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { SingleStudentComponent } from './single-student/single-student.component';
import { GeneralStatsComponent } from './general-stats/general-stats.component';
import { ClassStatsComponent } from './class-stats/class-stats.component';
import { ListStudentsComponent } from './list-students/list-students.component';


const routes: Routes = [
  { path : '', component: GeneralStatsComponent},
  { path : 'page2', component: Page2Component},
  { path : 'student/:id', component: SingleStudentComponent},
  { path : 'general', component: GeneralStatsComponent},
  { path : 'classroom', component: ClassStatsComponent},
  { path : 'list_students', component: ListStudentsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
