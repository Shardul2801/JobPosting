import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobPostingFormComponent } from './job-posting-form/job-posting-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JobApplicationComponent } from './job-application/job-application.component';
// import { JobPostingFormComponent } from './job-posting-form/job-posting-form.component';
@NgModule({
  declarations: [
    AppComponent,
    JobPostingFormComponent,
    JobApplicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
