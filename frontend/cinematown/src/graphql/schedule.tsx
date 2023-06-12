import { client } from "./client";

export default async  function getAvailableScheduleBYMoviesAndTheaterAndDate(movieID : number, theaterID : number , date : Date){
    let stdate =`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    let querySTR : string = `  
    query{
        findAllAvailableScheduleBYMoviesAndTheaterAndDate(date : "${stdate}" , movie : ${movieID}, theater :${theaterID}){
          time 
          id 
        }
      }
      `
   let resQ = await client.query(querySTR).toPromise() ; 
   return resQ.data.findAllAvailableScheduleBYMoviesAndTheaterAndDate  ; 
}
export  async  function getScheduleById(schedID : number ){
  let querySTR : string = `  
  query{
  findScheduleById(id :${schedID}){
    time
    theater_hall{
      sizeRow
      sizeCol
      id
    	theater{
        street_name
        city_name
      }
    }
    movie{
      name
    }
    
  }
}
    `
 let resQ = await client.query(querySTR).toPromise() ; 
 return resQ.data.findScheduleById  ; 
}