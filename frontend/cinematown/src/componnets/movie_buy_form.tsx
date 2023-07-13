import { createResource, createSignal, For, Show, Signal, SignalOptions } from "solid-js";
import { getAvailableMoviesByTheaterAndDate } from "../graphql/movie";
import getAvailableScheduleBYMoviesAndTheaterAndDate from "../graphql/schedule";
import { findAllAvailableTheaterByDate } from "../graphql/theater";
import { Movie } from "./movie";
import { Schedule } from "./shecudle";
import { Theater } from "./theater";


export default function MovieBuyForm() {
    let [dateState, dateSetState] = createSignal(new Date());
    let [theaterState] = createResource(dateState, ((date: Date) => findAllAvailableTheaterByDate(date)));
    let [theaterIDState, theaterIDSetState]: Signal<number | null> = createSignal(null);
    let [movieState, movieSetState] = createResource(theaterIDState, (id) => {
        if (id == null) {
            return null;
        }
        return getAvailableMoviesByTheaterAndDate(id, dateState());
    });
    let [movieIdState, movieSetIdState]: Signal<number | null> = createSignal(null);
    let [hoursState] = createResource(movieIdState, (id) =>{
        if(id == null ){
            return null ; 
        }
        return getAvailableScheduleBYMoviesAndTheaterAndDate(id,theaterIDState()!, dateState());
    }); 
    let [hourIDState, hourIDSetState]: Signal<number | null> = createSignal(null);
    let formatDateHHMM = (date: Date) => `${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;
    return <div class="w-full h-full grid-cols-1">
        <h1 class="flex justify-center text-8xl font-bold">Order Tickets</h1>
        <div class="flex justify-center items-center m-10">
            <div class="grid grid-cols-4 w-full h-full ">
                <div class="m-5 border-blue-900 border-4 h-[50%] w-[90%] text-3xl flex bg-gray-500 bg-opacity-30">
                    <div class="w-[20%] h-full ">
                        <svg class="w-full h-full p-3 " preserveAspectRatio="none" viewBox="0 0 30 30" >
                            <path d="M13,8h5v4h-5v-4ZM4,12v-4H0v4H4Zm0,2H0v4H4v-4Zm9,10h5v-4h-5v4Zm-2-4H6v4h5v-4Zm9-2h4v-4h-4v4ZM6,12h5v-4H6v4Zm-2,8H.1c.4,1.96,1.94,3.5,3.9,3.9v-3.9Zm7-6H6v4h5v-4Zm9,6v3.9c1.96-.4,3.5-1.94,3.9-3.9h-3.9Zm3.9-14c-.46-2.28-2.48-4-4.9-4h-1V1c0-.55-.45-1-1-1s-1,.45-1,1v1H8V1c0-.55-.45-1-1-1s-1,.45-1,1v1h-1C2.59,2,.57,3.72,.1,6H23.9ZM13,14v4h5v-4h-5Zm7-6v4h4v-4h-4Z" />
                        </svg>
                    </div>
                    <input class="w-[80%] h-full bg-transparent" type="date" value={dateState().toJSON().slice(0, 10)} onChange={(e) => {
                        theaterIDSetState(null);
                        movieSetIdState(null);
                        hourIDSetState(null);
                        dateSetState(new Date(e.currentTarget.value))
                    }
                    } />
                </div>
                <div class="m-5 border-blue-900 border-4 h-[50%] w-[90%] text-3xl flex bg-gray-500 bg-opacity-30">
                    <div class="w-[20%] h-full ">
                        <svg class="w-full h-full p-3" preserveAspectRatio="none" viewBox="0 0 30 30" >
                            <path d="M24,9.724V19a5.006,5.006,0,0,1-5,5H18a1,1,0,0,1,0-2h1a3,3,0,0,0,3-3V9.724a3,3,0,0,0-1.322-2.487l-7-4.723a2.979,2.979,0,0,0-3.356,0l-7,4.723A3,3,0,0,0,2,9.724V19a3,3,0,0,0,3,3H6a1,1,0,0,1,0,2H5a5.006,5.006,0,0,1-5-5V9.724A4.993,4.993,0,0,1,2.2,5.579L9.2.855a4.981,4.981,0,0,1,5.594,0l7,4.724A5,5,0,0,1,24,9.724Zm-5,5.283a6.952,6.952,0,0,1-2.05,4.949l-3.515,3.438a2.063,2.063,0,0,1-2.87,0l-3.507-3.43A7,7,0,1,1,19,15.007Zm-2,0a5,5,0,1,0-8.536,3.535l3.5,3.422,3.58-3.43A4.958,4.958,0,0,0,17,15.007ZM15,15a3,3,0,1,1-3-3A3,3,0,0,1,15,15Z" />
                        </svg>
                    </div>
                    <select value={theaterIDState() ?? undefined } id="theater_select" 
                    class="w-[80%] h-full bg-transparent custom-select " onChange={(e) => {
                        movieSetIdState(null);
                        hourIDSetState(null);
                        theaterIDSetState(Number(e.currentTarget.value))
                    }}>
                        <option disabled selected value={undefined}>Select : Theater</option>
                        <Show when={theaterState()}>
                            <For each={theaterState()}>{
                                (theater: Theater, index) => <option value={theater.id}>{`${theater.city_name} ${theater.street_name} ` }</option>
                            }
                            </For>
                        </Show>
                    </select>

                </div>


                <div class="m-5 border-blue-900 border-4 h-[50%] w-[90%] text-3xl flex bg-gray-500 bg-opacity-30">
                    <div class="w-[20%] h-full  ">
                        <svg class="w-full h-full p-3 " preserveAspectRatio="none" viewBox="0 0 30 30" >
                            <path d="m22 0v3h-2v-3h-16v3h-2v-3h-2v24h2v-3h2v3h16v-3h2v3h2v-24zm0 5v2h-2v-2zm0 8v2h-2v-2h-16v2h-2v-2h2v-2h-2v-2h2v2h16v-2h2v2h-2v2zm-18-8v2h-2v-2zm-2 14v-2h2v2zm18 0v-2h2v2z" />
                        </svg>
                    </div>

                    <select value={movieIdState()?? undefined } id="movie_select" disabled={movieState() == null || theaterIDState() == null} 
                    class="w-[80%] h-full bg-transparent custom-select"
                        onChange={(e) => {
                            hourIDSetState(null);
                            movieSetIdState(Number(e.currentTarget.value))
                        }} >
                        <option disabled selected value={undefined}>Select :  Movie</option>
                        <Show when={movieState() && theaterIDState()}>
                            <For each={movieState()}>{
                                (movie: Movie, index) => <option value={movie.id}>{movie.name}</option>
                            }
                            </For>
                        </Show>
                    </select>
                </div>
                <div class="m-5 border-blue-900 border-4 h-[50%] w-[90%] text-3xl flex bg-gray-500 bg-opacity-30">
                    <div class="w-[20%] h-full">
                        <svg class="w-full h-full p-3" preserveAspectRatio="none" viewBox="0 0 30 30" >
                            <path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm4,13h-4c-.552,0-1-.447-1-1V6c0-.553,.448-1,1-1s1,.447,1,1v5h3c.553,0,1,.447,1,1s-.447,1-1,1Z" />
                        </svg>
                    </div>
                    <select value={hourIDState() ?? undefined } id="hour_select" disabled={movieIdState() == null || theaterIDState() == null} 
                    class="w-[80%] h-full bg-transparent custom-select" onChange={(e) => hourIDSetState(Number(e.currentTarget.value))} >
                        <option disabled selected value={undefined}>Select : Hour</option>
                        <Show when={movieIdState() && movieState() && theaterState()}>
                            <For each={hoursState() }>{
                                (sched: Schedule, index) => <option value={sched.id}>{formatDateHHMM(new Date(sched.time))}</option>
                            }
                            </For>

                        </Show>
                    </select>

                </div>
            </div>
        </div>
        <div class="flex justify-center items-center">
            <button class="text-3xl w-[20vw] h-[5vh] bg-blue-500 flex-initial hover:bg-blue-400 text-white font-bold border-b-4 border-blue-700 hover:border-blue-500 rounded"
                onClick={() => {if (hourIDState() != null) {(window as any).location.href = `/scheduleseatpick/${hourIDState()}`}}}>
                Place Order
            </button>
        </div>
    </div>





}