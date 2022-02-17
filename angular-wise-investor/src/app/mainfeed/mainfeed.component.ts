import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-mainfeed',
  templateUrl: './mainfeed.component.html',
  styleUrls: ['./mainfeed.component.css']
})
export class MainfeedComponent implements OnInit {
 feeds=[]
  constructor() { }

  ngOnInit(){
    this.getFeed()
  }
getFeed(){
  axios.get("http://localhost:3000/api/mainfeed/getthefeed")
  .then(({data})=>{
    console.log(data);
    this.feeds=data
    
  })
  .catch((err)=>{
    console.log(err);
    
  })
}
aa(){
  console.log(this.feeds);
  
}
}
