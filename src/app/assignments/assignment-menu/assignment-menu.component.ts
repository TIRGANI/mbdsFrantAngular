import { Component } from '@angular/core';
import { Assignment } from '../assignment.model';
import { AssignmentServiceService } from 'src/app/shared/assignment-service.service';

@Component({
  selector: 'app-assignment-menu',
  templateUrl: './assignment-menu.component.html',
  styleUrls: ['./assignment-menu.component.css']
})
export class AssignmentMenuComponent {
constructor(private assignmentService: AssignmentServiceService) { }
  assignments:Assignment[] = [];
  generatedata(){
    this.assignmentService.peuplerBD();
  }
}
