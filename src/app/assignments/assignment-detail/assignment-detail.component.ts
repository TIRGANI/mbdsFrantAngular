import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {
  @Input() assignmentTransmit?: Assignment;
  @Output() deleteAssignment=new EventEmitter<Assignment>();
  assignmentSelectionne?: Assignment;
  constructor() { }

  ngOnInit(): void {
  }
  accessor() {

  }
 /* modifiermm(enevnt: any) {
    if (!this.assignmentTransmit?.rendu) return ;
    else if (this.assignmentTransmit.rendu == true) {
      this.assignmentTransmit.rendu = false;
    } else {
      this.assignmentTransmit.rendu = true;
    }

  }*/
onDelete(){
  if(this.assignmentTransmit){
    this.deleteAssignment.emit(this.assignmentTransmit);
  }
}
assignmentClique(assignment: Assignment) {
  this.assignmentSelectionne = assignment;
}

}


