import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import axios from 'axios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  constructor(private router: Router) {}
  isDisabled = false;

  ngOnInit(): void {}
  onSubmit(f: NgForm) {
    console.log(f.value);
    // console.log(f.valid);
    axios
      .post('http://localhost:3000/api/user/signUp', {
        email: f.value.email,
        password: f.value.password,
        firstName :f.value.username,
        lastName:f.value.lastname,

      })
      .then((data) => {
        // alert('Data Sended');
        this.isDisabled = true;
        // this.router.navigate(['login']);
      });
  }
}
