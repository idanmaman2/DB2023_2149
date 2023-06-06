import { Movie } from "./movie"
import { Thetaer_Hall } from "./theater_hall"

export interface Schedule{
    id : number 
    time : string 
    is_3D : Boolean 
    movie : Movie 
    theater_hall : Thetaer_Hall 
}




export default function ScheduleCard(props : {schedule :Schedule }){
    return <div class="flex">
            <p class="m-3">{props.schedule.id}</p>
            <p class="m-3"> {props.schedule.is_3D ? "true" : "false"}</p>
        </div>
}