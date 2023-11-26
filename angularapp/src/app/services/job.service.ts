import { Injectable } from '@angular/core';
import { JobApplication } from 'src/models/job-application.model';
import { JobPosition } from 'src/models/job-position.model';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class JobService {
  private apiUrl = "https://8080-abdddcaefddefe307837046ebabcbbfabeeffone.premiumproject.examly.io/api/job"

  constructor(private httpclient:HttpClient) { }

  getJobPostings():Observable<any[]>{
    return this.httpclient.get<any[]>(this.apiUrl + '/positions');
  }

  getJobApplications():Observable<any[]>{
    return this.httpclient.get<any[]>(this.apiUrl + '/applications');
  }

  getPositionTitles():Observable<any[]>{
    return this.httpclient.get<any[]>(this.apiUrl + '/position_title');
  }

  httpOptions = {headers: new HttpHeaders({'content-type':'application/json'})}
  createJobPosition(jobPositionData:JobPosition):Observable<any>{
    return this.httpclient.post<any>(this.apiUrl + '/position/add',jobPositionData, this.httpOptions)
  }

  applyForJob(newJobPosition:JobApplication):Observable<any>{
    return this.httpclient.post<any>(this.apiUrl + '/application/add',newJobPosition,this.httpOptions);
  }

  updateApplicationStatus(applicationId:number,applicantName:string, newStatus:string):Observable<any>{
    return this.httpclient.put<any>(this.apiUrl + '/application/update/' + applicationId ,{applicantName:applicantName,status:newStatus},this.httpOptions)
  }

  markJobAsClosed(jobId:number):Observable<any>{
    return this.httpclient.put<any>(this.apiUrl +'/position/update' + jobId ,{isClosed:false},this.httpOptions);
  }

  getTotalApplicantsByJobPositionId(jobPositionId:number):Observable<any>{
    return this.httpclient.get<any>(`${this.apiUrl}/applications/by-job-position?jobPositionId=${jobPositionId}`)
  }

}
