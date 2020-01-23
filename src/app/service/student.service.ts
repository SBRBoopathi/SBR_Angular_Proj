import { Injectable } from '@angular/core';

@Injectable({
  providedIn : 'root'
})

export class StudentService{

  students = [
    {"id" : 1001, "name" : "Irshad", "marks" : 90},  
    {"id" : 1002, "name" : "Imran", "marks" : 80},  
    {"id" : 1003, "name" : "Rahul", "marks" : 70},  
    {"id" : 1004, "name" : "Ajay", "marks" : 85},  
    {"id" : 1005, "name" : "Sunny", "marks" : 60} 
  ]
  constructor(){

  }
  getStudents(){
    return this.students;
  }
}