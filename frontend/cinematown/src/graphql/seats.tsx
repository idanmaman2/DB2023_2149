import { Seat } from "../componnets/seats";
import { client } from "./client";


export default async function getSeatsBySchedule(scheduleID : number , theaterHallId : number ): Promise<{all : Seat[] , free :Seat[] , broken : Seat[] } > {
    const querySTR = `  
        query{
            findAllSeatsBySchedule(id :${scheduleID}){
                columnseat 
                rowseat
                id
      }
      findAllFreeSeatsBySchedule(id :${scheduleID}){
        id
        columnseat 
        rowseat
      }
      findAllBrokenSeatsByTheaterHall(id :${theaterHallId}){
        id
        columnseat 
        rowseat
      }
      
    }
    `
    let resQ = await client.query(querySTR).toPromise();
    return {all : resQ.data.findAllSeatsBySchedule , free :resQ.data.findAllFreeSeatsBySchedule  , broken : resQ.data.findAllBrokenSeatsByTheaterHall }



}