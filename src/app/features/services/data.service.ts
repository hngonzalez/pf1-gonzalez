import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
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
    {idPerson: 1, name: 'Franco', lastname: 'Gonzalez', email: 'fulanito@outlook.com', courses: [{idCourse: 1, name: 'Análisis Matemático', idClassroom: 1},{idCourse: 2, name: 'Organización Empresarial', idClassroom: 2}]},
    {idPerson: 2, name: 'Matias', lastname: 'Gonzalez', email: 'fulanito@outlook.com', courses: [{idCourse: 1, name: 'Análisis Matemático', idClassroom: 1},{idCourse: 2, name: 'Organización Empresarial', idClassroom: 2}]},
    {idPerson: 3, name: 'Franco', lastname: 'Gonzalez', email: 'fulanito@outlook.com', courses: []},
    {idPerson: 4, name: 'Laura', lastname: 'Gonzalez', email: 'fulanito@outlook.com', courses: [{idCourse: 2, name: 'Organización Empresarial', idClassroom: 2}]},
    {idPerson: 5, name: 'Miguel', lastname: 'Gonzalez', email: 'fulanito@outlook.com', courses: []},
  ];
  dataCourses: Course[] = [
    {idCourse: 1, name: 'Análisis Matemático', idClassroom: 1},
    {idCourse: 2, name: 'Organización Empresarial', idClassroom: 2}
  ]
  dataClassrooms: Classroom[] = [
    {idClassroom: 1, name: 'Aula B254'},
    {idClassroom: 2, name: 'Aula A361'},
    {idClassroom: 3, name: 'Aula C255'},
  ]

  constructor() { }

  getStudents(): Observable<Person[]> {
    return of(this.dataPersonsList);
  }

  getCourses(): Course[] {
    return this.dataCourses;
  }

  getClassrooms(): Classroom[] {
    return this.dataClassrooms;
  }

  getDataCoursesById(personId: number): Promise<Person> {
    let index = this.dataPersonsList.findIndex((person:Person) => {
      return person.idPerson == personId;
    })

    return new Promise((resolve, rejects) => {
      const person = this.dataPersonsList[index];
      if (person) {
        return resolve(person)
      }
      rejects({mensaje: 'error'})
    })
  }

  addStudent(student: Person): void {
    student.idPerson = this.dataPersonsList.length + 1;

    this.dataPersonsList.push(student);
  }

  addClassroomToStudent(idPerson: number, course: Course) {
    let indexToEdit = this.dataPersonsList.findIndex((person:Person) => {
      return person.idPerson == idPerson;
    })

    this.dataPersonsList[indexToEdit].courses.push(course);
  }

  addCourse(course: Course) {
    course.idCourse = this.dataCourses.length + 1;
    
    this.dataCourses.push(course);
  }

  addClassroom(classroom: Classroom) {
    classroom.idClassroom = this.dataClassrooms.length + 1;
    
    this.dataClassrooms.push(classroom);
  }

  editStudent(student: Person) {
    let indexToEdit= this.dataPersonsList.findIndex((person:Person) => {
      return person.idPerson == student.idPerson;
    })
  
    this.dataPersonsList[indexToEdit].name = student.name;
    this.dataPersonsList[indexToEdit].lastname = student.lastname;
    this.dataPersonsList[indexToEdit].email = student.email;
  }

  editCourse(course: Course) {
    console.log(course)
    let indexToEdit= this.dataCourses.findIndex((courseElement:Course) => {
      return courseElement.idCourse == course.idCourse;
    })
  
    this.dataCourses[indexToEdit].name = course.name;
  }

  editClassroom(classroom: Classroom) {
    let indexToEdit= this.dataClassrooms.findIndex((classroomElement: Classroom) => {
      return classroomElement.idClassroom == classroom.idClassroom;
    })
  
    this.dataClassrooms[indexToEdit].name = classroom.name;
  }

  removeClassroom(idPerson: number, idCourse: number) {
    let indexClassToRemove = this.dataPersonsList.findIndex((person:Person) => {
      return person.idPerson == idPerson;
    })

    let indexClass2ToRemove = this.dataPersonsList[indexClassToRemove].courses.findIndex((course: Course) => {
      return course.idCourse == idCourse;
    })

    this.dataPersonsList[indexClassToRemove].courses.splice(indexClass2ToRemove,1);
  }

  deleteStudent(student: Person) {
    let indexToDelete = this.dataPersonsList.findIndex( (person:Person) => {
      return person.idPerson == student.idPerson;
    })

    this.dataPersonsList.splice(indexToDelete, 1);
  }
}
