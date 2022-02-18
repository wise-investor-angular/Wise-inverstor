import { Component, OnInit, Input } from '@angular/core';
import { filter } from 'rxjs/operators';
// import 'rxjs/add/operator/filter';
import { InitiateYourProjectComponent } from '../initiate-your-project/initiate-your-project.component';
import axios from 'axios';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
search=''
myBudget=0
@Input() projects: any;
@Input()project: any;
  constructor() { }

  ngOnInit(): void {
  }
  bysearch() {
    console.log(this.projects)
    
  }
  byBudget() {

  }
  handleDelete(id: any) {
    axios
      .delete(`http://localhost:3000/api/tutorial/del/${id}`)
      .then((response) => {
        console.log(response);
        location.reload();
      });
  } 
}


