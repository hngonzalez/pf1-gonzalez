import { DataService } from './../../services/data.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Course } from '../../models/course';

@Component({
  selector: 'app-edit-courses',
  templateUrl: './edit-courses.component.html',
  styleUrls: ['./edit-courses.component.css']
})
export class EditCoursesComponent implements OnInit {
  studentCourses?: Course[];
  availableCourses?: any;
  newCourse?: Course;
  loaded: boolean = true;
  exist: boolean = false;
  
  constructor(
    public dialogRef: MatDialogRef<EditCoursesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private _dataService: DataService
  ) { }

  ngOnInit(): void {
    this.availableCourses = this._dataService.getCourses();
    this.studentCourses = this._dataService.getDataCoursesById(this.data.elementRow.courses);
  }

  removeClassroom(idCourse: number) {
    this.studentCourses = this._dataService.removeClassroom(this.data.elementRow, idCourse);
  }

  onCourseChange() {
    this.studentCourses.forEach(element => {
      console.log(element)
      if (element.idCourse == this.newCourse.idCourse) {
        
        this.exist = true;
        setTimeout(() => {
          this.exist = false;
        }, 1500);
      }
    });
    if (!this.exist) {
      this.studentCourses.push(this.newCourse);
      this._dataService.addClassroomToStudent(this.data.elementRow.idPerson, this.newCourse);
      this.loaded = false;
      setTimeout(() => {
        this.loaded = true;
      }, 1500);
    }
  }
}
