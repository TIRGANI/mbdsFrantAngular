import { Component,OnInit } from '@angular/core';
import { Assignment } from './assignment.model';
import { AssignmentServiceService } from '../shared/assignment-service.service';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent {
  assignments:Assignment[] = [];
  assignementSelectionne?: Assignment;
constructor(private assignmentService: AssignmentServiceService) { 
}

ngOnInit(): void {
  this.getAssignments();
    // this.ajouterActive = false;
  
}
getAssignments(): void {
  this.assignmentService.getAssignments().subscribe(assignments => this.assignments = assignments);
}

  titre = "Le Devoir Sélectionné";
  ajouterActive = true;
  etat = true;
  assignmentSelectionne?: Assignment;


  ajouterActivee = false;
  //form
  nomDevoir: string = "";
  picker: Date = new Date("2022-01-22");
  onSubmit() {
    console.log(this.nomDevoir + "Date : " + this.picker);
    this.assignments.push({ nom: this.nomDevoir, dateDeRendu: this.picker, rendu: false});

  }
  assignmentClique(assignment: Assignment) {
    this.assignmentSelectionne = assignment;

  }
  formVisible = false;
  onAddAssignmentBtnClick() {
    this.formVisible = true;
  }
  onNouvelAssignment(assignment: Assignment) {
    //this.assignments.push(assignment);
    this.assignmentService.addAssignments(assignment);
    this.formVisible = false;
  }
  onNouvelAssignmentdelete(assignment: Assignment) {
    //traitement delete assignment
    //this.assignments.emit(assignment);
    this.formVisible = true;
  }
}
