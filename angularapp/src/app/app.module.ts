import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobPostingFormComponent } from './job-posting-form/job-posting-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JobApplicationsComponent } from './job-applications/job-applications.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { ViewJobPostingsComponent } from './view-job-postings/view-job-postings.component';
import { ViewJobApplicationsComponent } from './view-job-applications/view-job-applications.component';
// import { JobPostingFormComponent } from './job-posting-form/job-posting-form.component';
@NgModule({
  declarations: [
    AppComponent,
    JobPostingFormComponent,
    JobApplicationsComponent,
    NavigationMenuComponent,
    ViewJobPostingsComponent,
    ViewJobApplicationsComponent
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
