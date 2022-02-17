import { Component, OnInit } from '@angular/core';
import { EmailValidator, NgForm } from '@angular/forms';
import axios from 'axios';
// import { HttpClient } from '@angular/common/http';

// import { ServeService } from '../serve.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
  onSubmit(f: NgForm) {
    console.log(f.value);
    console.log(f.valid);
    axios
      .post('http://localhost:3000/api/user/login', {
        email: f.value.email,
        password: f.value.password,
      })
      .then((data) => {
        alert('Data Sended');
      });
  }
}
