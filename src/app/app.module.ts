import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { NavClassroomComponent } from './nav-classroom/nav-classroom.component';
import { SingleStudentComponent } from './single-student/single-student.component';
import { GeneralStatsComponent } from './general-stats/general-stats.component';
import { ClassStatsComponent } from './class-stats/class-stats.component';
import { HttpClientModule } from '@angular/common/http';
import { ListStudentsComponent } from './list-students/list-students.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    NavComponent,
    FooterComponent,
    NavClassroomComponent,
    SingleStudentComponent,
    GeneralStatsComponent,
    ClassStatsComponent,
    ListStudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
