import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitiateYourProjectComponent } from './initiate-your-project/initiate-your-project.component';
import { SecurityModule } from './security/security.module';
import { MainfeedComponent } from './mainfeed/mainfeed.component';

import { NavbarComponent } from './navbar/navbar.component';

import { ShareyourexperienceComponent } from './shareyourexperience/shareyourexperience.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AdminComponent,
    InitiateYourProjectComponent,
    AppComponent,

    NavbarComponent,
    InitiateYourProjectComponent,
    ShareyourexperienceComponent,
    MainfeedComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SecurityModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
