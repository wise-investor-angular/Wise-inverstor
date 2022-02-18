import { Component, OnInit ,Input} from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {

  
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





