import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InitiateYourProjectComponent } from './initiate-your-project/initiate-your-project.component';
import { SecurityModule } from './security/security.module';

@NgModule({
  declarations: [AppComponent, InitiateYourProjectComponent],
  imports: [BrowserModule, SecurityModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
