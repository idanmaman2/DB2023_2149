
import { useParams } from "@solidjs/router";
import { createResource,ResourceReturn } from "solid-js";
import { createClient } from "@urql/core";
import {  Show, createSignal, For } from 'solid-js';
import {Movie, MovieCard} from "../componnets/movie"

export default function MoviesPage(){
    const params = useParams();
    var client: any = createClient({ url: `http://localhost:8080/graphql` });
    const [moviesState, moviesStateSet] = createSignal(null)
    console.log(`cool ${params.id}`)
    const [movie] : ResourceReturn<Movie,unknown> = createResource(():Movie => client.query(`  
    query{
        findMovieById(id:${params.id}){
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
      `).toPromise().then((props: { data: any }) => {
        
        console.log(JSON.stringify(props.data));
        return props.data["findMovieById"]}
    )
    );






    return <Show
    when={movie()}
    fallback={<p>Loadin...</p>}>
        <div>
        <MovieCard movie={movie()!}></MovieCard>
    </div>
 
    </Show>




}