import { Component ,EventEmitter,OnInit,Output} from '@angular/core';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {
  @Output() nouvelAssignment = new EventEmitter<Assignment>();
  ajouterActivee = false;
  titre = "Le Devoir Sélectionné";
  ajouterActive = true;
  etat = true;
  assignmentSelectionne?: Assignment;
  //form
  nomDevoir: string = "";
  dateRendu?: Date ;
  onSubmit() {
    console.log(this.nomDevoir + "Date : " + this.dateRendu);
    const newAssignments = new Assignment();
    newAssignments.nom = this.nomDevoir;
    newAssignments.dateDeRendu = this.dateRendu||new Date();
    newAssignments.rendu = false;
    this.nouvelAssignment.emit(newAssignments);

  }
  assignmentClique(assignment: Assignment) {
    this.assignmentSelectionne = assignment;
    
  }
  constructor() { }
  ngOnInit(): void {
      
  }
  
}
