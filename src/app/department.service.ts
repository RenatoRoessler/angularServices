import { Injectable } from '@angular/core';
import { Department } from './models/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private departments: Department[] = [
    {id: 1, name: 'Vestuario'},
    {id: 2, name: 'books'},
    {id: 3, name: 'Eletronicos'},
    {id: 4, name: 'Computadores'}
  ];
  private nextID: number = 5;

  constructor() { }

  getDespartments(): Department[] {
    return this.departments;
  }

  addDepartments(d: Department) {
    this.departments.push( {...d, id: this.nextID++} );
    console.log(this.departments);
  }

  getDepartmentById(id: number): Department {
    return this.departments.find((d) => d.id === id);
  }
}
