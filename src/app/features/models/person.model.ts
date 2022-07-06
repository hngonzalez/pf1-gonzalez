export class Person {
    idPerson: number;
    name: string;
    lastname: string;
    email: string;
    courses?: any[];

    constructor(idPerson?: number, name?: string, lastname?: string, email?: string, courses?: number[]) {
        this.idPerson = idPerson;
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.courses = courses;
    }
}
