import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import {Observable,of} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { db_test } from './data';
@Injectable({
  providedIn: 'root'
})
export class AssignmentServiceService {
  assignments: Assignment[] = [
    { nom: "Devoir 1", dateDeRendu: new Date("2022-01-22"), rendu: true},
    { nom: "Devoir 2", dateDeRendu: new Date("2022-01-22"), rendu: false },
    { nom: "Devoir 3", dateDeRendu: new Date("2022-01-22"), rendu: true },
    { nom: "Devoir 4", dateDeRendu: new Date("2022-01-22"), rendu: false},
  ];
  constructor(private http:HttpClient) { }
 // constructor() { }
  URI="https://mbdsback2023.herokuapp.com/api/assignments";
  getAssignments():Observable<Assignment[]> {
    return (this.http.get<Assignment[]>(this.URI));
    //return of(this.assignments);
  }
  addAssignments(assignment:Assignment):Observable<any>{
    console.log(assignment);
    return this.http.post<Assignment>(this.URI,assignment);
    
   // return of("bien");
  }
  peuplerBD(){
    db_test.forEach(assignment => {
      let a = new Assignment();
      a.id = +assignment.id;
      a.nom = assignment.nom;
      a.dateDeRendu =new Date(assignment.dateDeRendu);
      a.rendu = assignment.rendu;
      this.addAssignments(a)
      .subscribe(assignment =>
       console.log(assignment)
      );
    });
  }
}
