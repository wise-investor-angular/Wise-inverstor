import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitiateYourProjectComponent } from './initiate-your-project/initiate-your-project.component';
import { SecurityModule } from './security/security.module';

import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InitiateYourProjectComponent,
    // HttpClientModule,
  ],
  imports: [BrowserModule, AppRoutingModule, SecurityModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
