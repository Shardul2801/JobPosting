import { Component, OnInit } from '@angular/core';
import { JobService } from '../services/job.service';
import { JobApplication } from 'src/models/job-application.model';
import { JobPosition } from 'src/models/job-position.model';
@Component({
  selector: 'app-view-job-applications',
  templateUrl: './view-job-applications.component.html',
  styleUrls: ['./view-job-applications.component.css']
})
export class ViewJobApplicationsComponent implements OnInit {
  loadJobApplication:JobApplication[]=[]
  constructor(private js:JobService) { }
  
    this.js.getJobApplications().subscribe((data:JobApplication[])=>{
      this.jobApplications=data;
  
  }

  ngOnInit(): void {
  }

}
