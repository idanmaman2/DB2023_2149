import { createResource, createSignal, For, Show, Signal, SignalOptions } from "solid-js";
import { getAvailableMoviesByTheaterAndDate } from "../graphql/movie";
import { findAllAvailableTheaterByDate } from "../graphql/theater";
import { Movie } from "./movie";
import { Schedule } from "./shecudle";
import { Theater } from "./theater";


export default function MovieBuyForm() {
    let [dateState, dateSetState] = createSignal(new Date());
    let [theaterState] = createResource(dateState, ((date: Date) => findAllAvailableTheaterByDate(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`)));
    let [theaterIDState, theaterIDSetState]: Signal<Number | null> = createSignal(null);
    let [movieState, movieSetState] = createResource(theaterIDState, (id) => {
        if (id == null) {
            return null;
        }
        return getAvailableMoviesByTheaterAndDate(id.valueOf(), `${dateState().getFullYear()}-${dateState().getMonth() + 1}-${dateState().getDate()}`);
    });
    let [movieIdState, movieSetIdState]: Signal<Number | null> = createSignal(null);
    let [hourIDState, hourIDSetState] : Signal<Number | null> = createSignal( null);
    let formatDateHHMM = (date: Date) => `${date.getHours().toString().padStart(2,"0")}:${date.getMinutes().toString().padStart(2,"0")}`;
    return <div>
        <input class="m-5 border-red-600 border-4 w-[20vw]  h-[5vh] text-3xl" type="date" value={dateState().toJSON().slice(0, 10)} onChange={(e) => {
            theaterIDSetState(null);
            movieSetIdState(null);
            hourIDSetState(null); 
            return dateSetState(new Date(e.currentTarget.value))
        }
        } />
        <select value={theaterIDState() == null ? undefined : theaterIDState()!.valueOf()}   id="theater_select"  class="m-5 border-red-600 border-4 w-[20vw] h-[5vh] text-3xl" onChange={(e) => {
            movieSetIdState(null);
            hourIDSetState(null);
            return theaterIDSetState(new Number(e.currentTarget.value))
        }}>
            <option disabled selected value={undefined}>Select : Theater</option>
            <Show when={theaterState()}>
                <For each={theaterState()}>{
                    (theater: Theater, index) => <option value={theater.id.valueOf()}>{theater.city_name}</option>
                }
                </For>
            </Show>
        </select>
        <select value={movieIdState() == null ? undefined : movieIdState()!.valueOf()}   id="movie_select" disabled={movieState() == null || theaterIDState() == null } class="m-5 border-red-600 border-4 w-[20vw]  h-[5vh] text-3xl" 
        onChange={(e) =>{
            hourIDSetState(null); 
            return movieSetIdState(new Number(e.currentTarget.value))
        } } >
            <option disabled selected value={undefined}>Select :  Movie</option>
            <Show when={movieState() && theaterIDState()}>
                <For each={movieState()}>{
                    (movie: Movie, index) => <option value={movie.id.valueOf()}>{movie.name}</option>
                }
                </For>
            </Show>
        </select>
        <select value={hourIDState() == null ? undefined : hourIDState()!.valueOf()} id="hour_select" disabled={movieIdState() == null  || theaterIDState() == null} class="m-5 border-red-600 border-4 w-[20vw]  h-[5vh] text-3xl" onChange={(e)=>hourIDSetState(new Number(e.currentTarget.value))} >
            <option disabled selected value={undefined}>Select : Hour</option>
            <Show when={movieIdState() && movieState() && theaterState()}>
                <For each={(movieState() as Movie[]).find((x) => x.id == movieIdState())?.schedules}>{
                    (sched: Schedule, index) => <option value={sched.id}>{formatDateHHMM(new Date(sched.time))}</option>
                }
                </For>

            </Show>
        </select>
    </div>
}