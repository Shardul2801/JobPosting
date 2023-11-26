import { Component, OnInit } from '@angular/core';
import { JobApplication } from 'src/models/job-application.model';
import { JobPosition } from 'src/models/job-position.model';
import { JobService } from '../services/job.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-job-applications',
  templateUrl: './job-applications.component.html',
  styleUrls: ['./job-applications.component.css']
})
export class JobApplicationsComponent implements OnInit {
  jobApplicationForm :FormGroup
  jobPositions: JobPosition[]=[]
  constructor(private js:JobService, private fb :FormBuilder) { }

  applyForJob(){
    this.js.applyForJob(this.jobApplicationForm.value).subscribe(()=>{})
  }
  ngOnInit(): void {
    this.jobApplicationForm = this.fb.group ({
      jobPositionId: [''],
      applicantName:[''],
      status:['Pending']

    })

    this.js.getJobPostings().subscribe((data:JobPosition[])=>{
      this.jobPositions = data;
    })
  }

}
