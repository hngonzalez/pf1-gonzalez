import { EditStudentComponent } from './../edit-student/edit-student.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../../models/person.model';
import { DataService } from '../../services/data.service';
import { EditCoursesComponent } from '../edit-courses/edit-courses.component';
import { NewStudentComponent } from '../new-student/new-student.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() dataPersonsList?: Person[];
  studentsList?: Person[];
  confirmation: boolean = false;
  
  displayedColumns: string[] = ['idPerson', 'name', 'lastname', 'email', 'curso', 'actions'];
  
  constructor(
    private _dataService: DataService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.confirmation = false;
    this.dataPersonsList = this._dataService.getStudents();
  }

  /**
   * Función para abrir el modal de cursos del estudiante seleccionado
   * @param elementRow elemento a modificar
   */
  openCourses(elementRow: any) {
    const dialogRef = this.dialog.open(EditCoursesComponent, {
      width: '50%',
      height: '80%',
      data: {elementRow},
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  /**
   * Función para editar estudiante
   * @param elementRow elemento a modificar
   */
  editStudent(elementRow: any) {
    const dialogRef = this.dialog.open(EditStudentComponent, {
      width: '50%',
      data: {elementRow},
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  deleteStudent(student: Person) {
    this.dataPersonsList = this._dataService.deleteStudent(student);
    this.confirmation = true;
  }
}
