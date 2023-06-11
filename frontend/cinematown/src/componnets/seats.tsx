import { Schedule } from "./shecudle";
import { Thetaer_Hall } from "./theater_hall";


export interface Seat{
    id : Number; 
    columnseat: Number;
    rowseat: Number;
    theaterHall: Thetaer_Hall;



}


export default function SeatCard(seat : Seat){
    return <div>{seat.id.valueOf()}</div>
    



}