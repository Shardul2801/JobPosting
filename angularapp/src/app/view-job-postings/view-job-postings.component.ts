import { Component, OnInit } from '@angular/core';
import { JobService } from '../services/job.service';
import { JobApplication } from 'src/models/job-application.model';
import { JobPosition } from 'src/models/job-position.model';
@Component({
  selector: 'app-view-job-postings',
  templateUrl: './view-job-postings.component.html',
  styleUrls: ['./view-job-postings.component.css']
})
export class ViewJobPostingsComponent implements OnInit {
  jobPostings:JobPosition[]=[]
  totalApplicant:number
  constructor(private js:JobService) { }
  loadJobPostings(){
    this.js.getJobPostings().subscribe((data:JobPosition[])=>{
      this.jobPostings = data
    })
  }

  fetchTotalApplicants(id:number){
    this.js.getTotalApplicantsByJobPositionId(id).subscribe((data)=>{
      this.totalApplicant = data;
    })
  }

  ngOnInit(): void {
  }

}
