import { JobPosition } from "./job-position.model"

export class JobApplication {
    id:number
    jobPositionId:number
    jobPosition? :JobPosition
    applicantName:string
    status: string
}
