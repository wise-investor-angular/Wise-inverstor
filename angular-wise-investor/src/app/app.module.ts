import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { InitiateYourProjectComponent } from './initiate-your-project/initiate-your-project.component';

@NgModule({
  declarations: [
    AppComponent,
    InitiateYourProjectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
