import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Course } from '../../models/course';

@Component({
  selector: 'app-new-classroom',
  templateUrl: './new-classroom.component.html',
  styleUrls: ['./new-classroom.component.css']
})
export class NewClassroomComponent implements OnInit {
  @Input() dataCourses?: Course[];
  classroomForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { 
    this.classroomForm = this.fb.group({
      idPerson: new FormControl(""),
      name: new FormControl("", [Validators.required]),
      lastname: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      course: new FormControl("", [Validators.required])
    })
  }

  ngOnInit(): void {
    console.log(this.dataCourses);
  }

}
