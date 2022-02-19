import { Component, OnInit } from '@angular/core';
import { EmailValidator, NgForm } from '@angular/forms';
import axios from 'axios';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}
  isDisabled = false;
  Forgetpassword() {
    Swal.fire('A code has been sent to your email')
  }

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
        console.log(data,"daata")
        if(data.data==="bad password"){
          alert("wrong password!!" ||"user not found")
          this.router.navigate(['login']);
        }else
        // alert('Data Sended');
        this.isDisabled = true;
        this.router.navigate(['mainfeed']);
      });
  }
}
