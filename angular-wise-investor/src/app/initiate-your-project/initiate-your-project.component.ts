import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ProjectComponent } from '../project/project.component';
import axios from 'axios';
@Component({
  selector: 'app-initiate-your-project',
  templateUrl: './initiate-your-project.component.html',
  styleUrls: ['./initiate-your-project.component.css'],
})
export class InitiateYourProjectComponent implements OnInit {
  projects=[];
  searchText=''
  constructor() {
    
  }

  ngOnInit() {
    this.getData()
  }
console(){
  console.log(this.projects)
}
  getData(){
    axios.get("http://localhost:3000/api/pr/data").then(({data})=>{
     console.log(data)
      this.projects=data
     }).catch((err)=>{
        console.log(err)
     })
         }
}