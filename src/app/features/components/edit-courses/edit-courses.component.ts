import { DataService } from './../../services/data.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
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
}
