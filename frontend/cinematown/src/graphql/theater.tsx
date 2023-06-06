import { Movie } from "../componnets/movie";
import { Theater } from "../componnets/theater";
import { client } from "./client";

export default async function getAllTheaters():Promise<Theater[]> {
    const querySTR = `  
        query{
            findAllTheaters{
                city_name
                region_name
                street_name
                id
                lat 
                lon
            }
        }
    `
    let resQ = await client.query(querySTR).toPromise() ; 
    return resQ.data.findAllTheaters



}

export  async function getTheaterById(id:number):Promise<Theater> {
    const querySTR = `  
        query{
            findTheaterById(id:${id}){
                city_name
                region_name
                street_name
                id
                lat 
                lon
            }
        }
    `
    let resQ = await client.query(querySTR).toPromise() ; 
    return resQ.data.findTheaterById



}