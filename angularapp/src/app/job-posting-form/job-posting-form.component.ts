import { Component, OnInit } from '@angular/core';
import { JobService } from '../services/job.service';
import { JobApplication } from 'src/models/job-application.model';
import { JobPosition } from 'src/models/job-position.model';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-job-posting-form',
  templateUrl: './job-posting-form.component.html',
  styleUrls: ['./job-posting-form.component.css']
})
export class JobPostingFormComponent implements OnInit {
  jobPostingForm:FormGroup
  constructor(private js:JobService, private fb:FormBuilder) { }


  submitJobPosting(){
    if(this.jobPostingForm.valid){
      this.js.createJobPosition(this.jobPostingForm.value).subscribe(()=>{})
    }
    else{
      
    }

  }
  ngOnInit(): void {
    this.jobPostingForm = this.fb.group({
      title:['',[Validators.required]],
      department:['',[Validators.required]],
      location:[''],
      responsibilities:[''],
      qualifications:[''],
      applicationDeadline:[''],
    })
  }

}
