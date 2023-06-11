import { Seat } from "../componnets/seats";
import { client } from "./client";


export default async function getSeatsBySchedule(scheduleID : number): Promise<Seat[]> {
    const querySTR = `  
        query{
            findAllSeatsBySchedule(id :${scheduleID}){
                columnseat 
                rowseat
                id
      }
    }
    `
    let resQ = await client.query(querySTR).toPromise();
    return resQ.data.findAllSeatsBySchedule



}