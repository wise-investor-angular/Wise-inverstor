import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import axios from 'axios';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  onSubmit(f: NgForm) {
    console.log(f.value);
    // console.log(f.valid);
    axios
      .post('http://localhost:3000/api/pr/tutorial', {
        image: f.value.image,
        title: f.value.title,
        budget: f.value.budget,
        field: f.value.field,
        tutorial: f.value.tutorial,
      })
      .then((data) => {
        alert('Data Sended');
        // this.isDisabled = true;
        // this.router.navigate(['login']);
      });
  }
}
