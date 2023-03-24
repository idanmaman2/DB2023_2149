
import { useParams } from "@solidjs/router";
import { createResource, ResourceReturn } from "solid-js";
import { createClient } from "@urql/core";
import { Show, createSignal, For } from 'solid-js';
import { Movie, MovieCard } from "../componnets/movie"

export default function MoviesPage() {
    const params = useParams();
    var client: any = createClient({ url: `http://localhost:8080/graphql` });
    const [moviesState, moviesStateSet] = createSignal(null)
    console.log(`cool ${params.id}`)
    const [movie]: ResourceReturn<Movie, unknown> = createResource((): Movie => client.query(`  
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
        return props.data["findMovieById"]
    }
    )
    );






    return <Show
        when={movie()}
        fallback={<p>Loadin...</p>}>
        <div class="flex flex-col items-center">
            <h1>{movie()!.name} </h1>
            <h1>{movie()!.duration} </h1>
            <h1>{movie()!.reales_date} </h1>
            <h1>{movie()!.rating} </h1>
            <h1>{movie()!.description} </h1>
            <h1>{movie()!.name} </h1>
            <For each={movie()!.poster_images["imagesHigh"]}>
                {
                    (im, i) => <img src={im}></img>
                }
            </For>





        </div>

    </Show>




}