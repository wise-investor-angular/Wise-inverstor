import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import axios from 'axios';
import { Router } from '@angular/router';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

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
        firstName: f.value.username,
        lastName: f.value.lastname,
      })
      .then((data) => {
        // alert('Data Sended');
        this.isDisabled = true;
        this.router.navigate(['login']);
      });
  }
  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_jikcy3f',
        'template_p16p97x',
        e.target as HTMLFormElement,
        'user_ii1uikO7mDCjWaf51oJtk'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
}
