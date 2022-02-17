import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { InitiateYourProjectComponent } from './initiate-your-project/initiate-your-project.component';
import { MainfeedComponent } from './mainfeed/mainfeed.component';
import { SignUpComponent } from './security/sign-up/sign-up.component';
import { LoginComponent } from './security/login/login.component';
import { ShareyourexperienceComponent } from './shareyourexperience/shareyourexperience.component';
const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'initiate project', component: InitiateYourProjectComponent },
  { path: 'shareyourexperience', component: ShareyourexperienceComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  {path:'mainfeed', component:MainfeedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
