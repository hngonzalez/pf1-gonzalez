import { Classroom } from './../../models/classroom';
import { Course } from './../../models/course';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent implements OnInit {
  courseForm!: FormGroup;
  availableCourses?: Course[];
  availableClassrooms?: Classroom[];
  classroom?: Classroom;
  selected?: number;
  arCourses: number[] = [];
  saved: boolean = true;
  course!: Course;
  newCourse: string = '';

  constructor(
    private fb: FormBuilder,
    private _dataService: DataService
  ) { }

  ngOnInit(): void {
    this.availableCourses = this._dataService.getCourses();
    this.availableClassrooms = this._dataService.getClassrooms();
    this.courseForm = this.fb.group({
      idCourse: new FormControl(""),
      name: new FormControl("", [Validators.required]),
      idClassroom: new FormControl("", [Validators.required])
    })
  }

  onChange() {
    console.log(this.course)
    this.courseForm.setValue({
      idCourse: this.course.idCourse,
      name: this.course.name,
      idClassroom: this.course.idClassroom
    });
  }

  onChangeClassroom() {
    this.courseForm.setValue({
      idCourse: 0,
      name: this.courseForm.get('name').value,
      idClassroom: this.classroom.idClassroom
    });
  }

  selectionCourse(type: string) {
    this.newCourse = type;
    this.courseForm.reset();
  }

  onSave(type: string) {
    switch (type) {
      case 'New':
        this.saved = false;
        let newCourse = new Course(this.courseForm.get('idCourse').value, this.courseForm.get('name').value, this.courseForm.get('idClassroom').value);
        this._dataService.addCourse(newCourse);
        setTimeout(() => {
          this.saved = true;
        }, 1500);
        break;

      case 'Edit':
        this.saved = false;
        let editCourse = new Course(this.courseForm.get('idCourse').value, this.courseForm.get('name').value);
        this._dataService.editCourse(editCourse);
        setTimeout(() => {
          this.saved = true;
        }, 1500);
        break;

      default:
        break;
    }
  }
}
