import { Component, OnInit,Input } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ProjectComponent } from '../project/project.component';
import axios from 'axios';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  projects = [];
  searchText = '';
  // @Input() projects: any;
@Input()project: any;
  constructor() {}

  ngOnInit() {
    this.getData();
  }
  console() {
    console.log(this.projects);
  }
  getData() {
    axios
      .get('http://localhost:3000/api/pr/data')
      .then(({ data }) => {
        console.log(data);
        this.projects = data;
      })
      .catch((err) => {
        console.log(err);
      });
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

// @Component({
//   selector: 'app-admin',
//   templateUrl: './admin.component.html',
//   styleUrls: ['./admin.component.css'],
// })
