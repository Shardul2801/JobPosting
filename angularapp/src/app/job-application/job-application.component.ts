import { Component, OnInit } from '@angular/core';
import { JobApplication } from 'src/models/job-application.model';
import { JobPosition } from 'src/models/job-position.model';
import { JobService } from '../services/job.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-job-application',
  templateUrl: './job-application.component.html',
  styleUrls: ['./job-application.component.css']
})
export class JobApplicationComponent implements OnInit {
  jobApplicationForm :FormGroup
  constructor(private js:JobService, private fb :FormBuilder) { }

  applyForJob(){
    this.js.applyForJob(this.jobApplicationForm.value).subscribe(()=>{})
  }
  ngOnInit(): void {
    this.jobApplicationForm = this.fb.group ({
      
    })
  }

}
