import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServeService } from '../serve.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  onSubmit(f: NgForm) {
    const loginobserver = {
      // next: (x: number) => console.log('Observer'),
      // error: (err: Error) => console.error(err),
    };
    // this.securityservice.login(f.value).subscribe(loginobserver);
    console.log(f.value);
    console.log(f.valid);
  }
}
