import { Schedule } from "./shecudle";
import { Thetaer_Hall } from "./theater_hall";


export interface Seat{
    id : number; 
    columnseat: number;
    rowseat: number;
    theaterHall: Thetaer_Hall;



}


export default function SeatCard(seat : Seat){
    return <div>{seat.id}</div>
    



}