
import { useParams } from "@solidjs/router";
import { createResource, ResourceReturn } from "solid-js";
import { createClient } from "@urql/core";
import { Show, createSignal, For } from 'solid-js';
import { Movie, MovieCard } from "../componnets/movie"
import { client } from "../graphql/client";

export default function MoviesPage() {
    const params = useParams();

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
        <div>
            <h1 class="flex justify-center items-center text-8xl font-mono m-5">{movie()!.name}</h1>
            <div class=" flex" >
                <div class="w-[30vw] h-[50vh] flex items-center justify-center ">
                    <img class="m-5 w-[30vw] h-[50vh] " src={movie()!.poster_images}></img>
                </div>
                <div class="w-[70vw] h-[50vh]   flex items-center justify-center">
                    <iframe class="w-[75%] h-[100%]" src={movie()!.trailer}></iframe>
                </div>
            </div>
            <div class=" flex" >
                <div class="w-[30vw] h-[50vh] flex items-center justify-center ">
                    <div>
                        <div class="flex text-2xl">
                            <h1>Realse Date:</h1>
                            <h1>{movie()!.reales_date}</h1>
                        </div>
                        <div class="flex text-2xl">
                            <h1>Duration:</h1>
                            <h1>{movie()!.duration}</h1>
                        </div>
                        <div class="flex text-2xl">
                            <h1>Rating:</h1>
                            <h1>{movie()!.rating}</h1>
                        </div>
                        <div class="flex text-sm">
                            <h1>ID:</h1>
                            <h1>{movie()!.id.toString()}</h1>
                        </div>
                    </div>

                </div>
                <div class=" p-5 w-[70vw] h-[50vh]  flex">
                    <div>
                        <h1 class="m-5 text-5xl font-bold">Description</h1>
                        <div class="m-5">
                        <p class="text-4xl font-extralight ">{movie()?.description}</p>
                        </div>
                       
                    </div>

                </div>
            </div>
        </div>

    </Show>




}