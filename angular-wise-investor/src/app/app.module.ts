import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitiateYourProjectComponent } from './initiate-your-project/initiate-your-project.component';
import { SecurityModule } from './security/security.module';
import { MainfeedComponent } from './mainfeed/mainfeed.component';
import { FilterComponent } from './filter/filter.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShareyourexperienceComponent } from './shareyourexperience/shareyourexperience.component';
import { AdminComponent } from './admin/admin.component';
import { ProjectComponent } from './project/project.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminComponent,
    InitiateYourProjectComponent,
    AppComponent,
FilterComponent,
    NavbarComponent,
    InitiateYourProjectComponent,
    ShareyourexperienceComponent,
    MainfeedComponent,
    ProjectComponent,
    FilterComponent,
    // HttpClientModule,

  ],
  imports: [BrowserModule, AppRoutingModule, SecurityModule,FormsModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
