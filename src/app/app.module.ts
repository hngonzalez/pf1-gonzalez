import { MaterialModule } from './modules/material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './features/pages/dashboard/dashboard.component';
import { ListComponent } from './features/components/list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './features/components/register/register.component';
import { NewStudentComponent } from './features/components/new-student/new-student.component';
import { NewCourseComponent } from './features/components/new-course/new-course.component';
import { NewClassroomComponent } from './features/components/new-classroom/new-classroom.component';
import { EditCoursesComponent } from './features/components/edit-courses/edit-courses.component';
import { EditStudentComponent } from './features/components/edit-student/edit-student.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ListComponent,
    RegisterComponent,
    NewStudentComponent,
    NewCourseComponent,
    NewClassroomComponent,
    EditCoursesComponent,
    EditStudentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
