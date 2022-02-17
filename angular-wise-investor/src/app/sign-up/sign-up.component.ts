import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  onSubmit(f: NgForm) {
    console.log(f.value);
    console.log(f.valid);
    axios
      .post('http://localhost:3000/api/user/signUp', {
        email: f.value.email,
        password: f.value.password,
        firstName :f.value.username,
        lastName:f.value.lastname,
      })
      .then((data) => {
        // alert('Data Sended');
      });
  }
}
