import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitiateYourProjectComponent } from './initiate-your-project/initiate-your-project.component';
import { MainfeedComponent } from './mainfeed/mainfeed.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ShareyourexperienceComponent } from './shareyourexperience/shareyourexperience.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AdminComponent,
    InitiateYourProjectComponent,
    AppComponent,
    LoginComponent,
    SignUpComponent,
    NavbarComponent,
    ShareyourexperienceComponent,
    MainfeedComponent,
    // HttpClientModule,
  ],
  imports: [BrowserModule, AppRoutingModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
