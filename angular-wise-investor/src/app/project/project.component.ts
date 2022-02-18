import { Component, OnInit, Input } from '@angular/core';
import { filter } from 'rxjs/operators';
// import 'rxjs/add/operator/filter';
import { InitiateYourProjectComponent } from '../initiate-your-project/initiate-your-project.component';
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

sarah(){
  alert("wachbik metghachech")
}
}
