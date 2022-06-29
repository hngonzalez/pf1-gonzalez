import { Classroom } from './../models/classroom';
import { Course } from './../models/course';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  dataPersonsList: Person[] = [
    {idPerson: 1, name: 'Franco', lastname: 'Gonzalez', email: 'fulanito@outlook.com', courses: [1,2]},
    {idPerson: 2, name: 'Matias', lastname: 'Gonzalez', email: 'fulanito@outlook.com', courses: [1,2]},
    {idPerson: 3, name: 'Franco', lastname: 'Gonzalez', email: 'fulanito@outlook.com', courses: []},
    {idPerson: 4, name: 'Laura', lastname: 'Gonzalez', email: 'fulanito@outlook.com', courses: [2]},
    {idPerson: 5, name: 'Miguel', lastname: 'Gonzalez', email: 'fulanito@outlook.com', courses: []},
  ];
  dataCourses: Course[] = [
    {idCourse: 1, name: 'Análisis Matemático'},
    {idCourse: 2, name: 'Organización Empresarial'}
  ]
  dataClassrooms: Classroom[] = [
    {idClassroom: 1, name: 'Aula B254'},
    {idClassroom: 2, name: 'Aula A361'},
    {idClassroom: 3, name: 'Aula C255'},
  ]

  constructor() { }

  getStudents(): Person[] {
    return this.dataPersonsList;
  }

  getCourses(): Course[] {
    return this.dataCourses;
  }

  getDataCoursesById(coursesId: number[]): Course[] {
    let arrayCourses: Course[] = [];

    this.dataCourses.forEach((element:any) => {
      if (coursesId.includes(element.idCourse)) {
        arrayCourses.push(element);  
      }
    });

    
    return arrayCourses;
  }

  getClassrooms(): Classroom[] {
    return this.dataClassrooms;
  }

  addStudent(student: Person): void {
    this.dataPersonsList.push(student);
  }

  editStudent(student: Person) {
    let indexToEdit= this.dataPersonsList.findIndex((person:Person) => {
      return person.idPerson == student.idPerson;
    })
  
    this.dataPersonsList[indexToEdit].name = student.name;
    this.dataPersonsList[indexToEdit].lastname = student.lastname;
    this.dataPersonsList[indexToEdit].email = student.email;
  }

  removeClassroom(student:Person, idCourse: number) {
    let indexClassToRemove = this.dataPersonsList.findIndex((person:Person) => {
      return person.idPerson == student.idPerson;
    })

    let index = this.dataPersonsList[indexClassToRemove].courses.indexOf(idCourse); 
    let array2: Course[] = [];

    if (index !== -1) {
      this.dataPersonsList[indexClassToRemove].courses.splice(index,1);
      

      this.dataCourses.forEach((element:any) => {
        if (this.dataPersonsList[indexClassToRemove].courses.includes(element.idCourse)) {
          array2.push(element);  
        }
      });
    }
    
    return array2;
  }

  deleteStudent(student: Person): Person[] {
    let indexToDelete = this.dataPersonsList.findIndex( (person:Person) => {
      return person.idPerson == student.idPerson;
    })

    this.dataPersonsList.splice(indexToDelete, 1);

    return this.dataPersonsList;
  }
}
