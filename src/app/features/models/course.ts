export class Course {
    idCourse!: number;
    name!: string;
    
    constructor(idCourse?: number, name?:string) {
        this.idCourse = idCourse;
        this.name = name;
    }
}
