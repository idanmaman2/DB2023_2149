import { Schedule } from "./shecudle"
import { Theater } from "./theater"

export interface Thetaer_Hall{
    id : number 
    theater : Theater
    schedules : Schedule[]
    sizeRow : number 
    sizeCol : number 
}
