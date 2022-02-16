import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InitiateYourProjectComponent } from './initiate-your-project/initiate-your-project.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShareyourexperienceComponent } from './shareyourexperience/shareyourexperience.component';
import { AdminComponent } from './admin/admin.component';
@NgModule({
  declarations: [
    AdminComponent,
    InitiateYourProjectComponent,
    AppComponent,
    NavbarComponent,
    ShareyourexperienceComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
