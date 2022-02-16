import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SecurityRoutingModule } from './security-routing.module';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

@NgModule({
  declarations: [LoginComponent, SignUpComponent, ForgetPasswordComponent],
  exports: [LoginComponent, SignUpComponent, ForgetPasswordComponent],
  imports: [CommonModule, SecurityRoutingModule, FormsModule],
})
export class SecurityModule {}
