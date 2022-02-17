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
    // var x = parseInt(this.search);
    // if (isNaN(x) == false) {
    //   return this.projects.filter((elem) => {
    //     return elem.budget < parseInt(this.search);
    //   });
    // } else {
    //   return this.projects.filter((elem) => {
    //     return elem.field.toLowerCase().match(this.search.toLowerCase());
    //   });
    // }
  }
  byBudget() {
    // return this.projects.filter((elem) => {
    //   return elem.budget < this.myBudget;
    // });
  }

sarah(){
  alert("wachbik metghachech")
}
}
