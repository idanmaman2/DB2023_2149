
import { useParams } from "@solidjs/router";
import { createResource, ResourceReturn } from "solid-js";
import { createClient } from "@urql/core";
import { Show, createSignal, For } from 'solid-js';
import { Movie, MovieCard } from "../componnets/movie"
import { client } from "../graphql/client";
import { getMoviebyID } from "../graphql/movie";
import ScheduleTable from "../componnets/shcedule_table";

export default function MoviesPage() {
    const params = useParams();

    const [moviesState, moviesStateSet] = createSignal(null)
    console.log(`cool ${params.id}`)
    const [movie]: ResourceReturn<Movie, unknown> = createResource(() => getMoviebyID(params.id) );
    return <Show
        when={movie()}
        fallback={<p>Loading...</p>}>
        <div>
            <h1 class="flex justify-center items-center text-8xl font-mono m-5 mb-20">{movie()!.name}</h1>
            <div class="flex" >
                <div class="w-[30vw] h-[50vh] flex items-center justify-center ">
                    <img class="m-5 w-[30vw] h-[50vh] border-black border-[1vw] " src={movie()!.poster_images}></img>
                </div>
                <div class="w-[70vw] h-[50vh]   flex items-center justify-center">
                    <iframe class="w-[75%] h-[100%]" src={movie()!.trailer}></iframe>
                </div>
            </div>
            <div class=" flex" >
                <div class="w-[30vw] h-[20vh] flex items-start p-[4%]  justify-center ">
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
                <div class=" p-5 w-[70vw] h-[20vh]  flex items-center justify-center">
                    <div>
                        <h1 class="m-5 text-5xl font-bold">Description</h1>
                        <div class="m-5">
                        <p class="text-4xl font-extralight ">{movie()?.description}</p>
                        </div>
                       
                    </div>

                </div>
            </div>
            <div class="mt-[10vh] ml-[3vw] mr-[3vw]">
            <h1 class="text-6xl m-5 font-extralight">
                Buy Tickets
            </h1>
            <ScheduleTable schedules={movie()!.schedules}></ScheduleTable>
            </div>
        </div>

    </Show>




}