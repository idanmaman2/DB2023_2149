import { Movie } from "../componnets/movie";
import { client } from "./client";


export default async function  getFindAllMovies() : Promise<Movie[]> {
    let querySTR : string = `  
    query{
      findAllMovies{
        id
        name
        description
        rating
        poster_images
        trailer
        reales_date
        duration
        genres{
          name
          id
        }
      }
      }
    `
    let resQ = await client.query(querySTR).toPromise() ; 
   return resQ.data.findAllMovies
 
}



export  async function  getFindAllMoviesOld() : Promise<Movie[]> {
  let querySTR : string = `  
  query{
    findAllMoviesSortedByDateOld{
      id
      name
      description
      rating
      poster_images
      trailer
      reales_date
      duration
      genres{
        name
        id
      }
    }
    }
  `
  let resQ = await client.query(querySTR).toPromise() ; 
 return resQ.data.findAllMoviesSortedByDateOld

}



export async function getMoviebyID(id : string) : Promise<Movie> {
  let querySTR : string = `  
  query{
      findMovieById(id:${id}){
          id
          name
          description
          rating
          poster_images
          trailer
          reales_date
          duration
          genres{
            name
            id
          }
      }
    }
    `
 let resQ = await client.query(querySTR).toPromise() ; 
 return resQ.data.findMovieById  ; 




}