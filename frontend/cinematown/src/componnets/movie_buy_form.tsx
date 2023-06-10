import { createResource, createSignal, For, Show, Signal, SignalOptions } from "solid-js";
import { getAvailableMoviesByTheaterAndDate } from "../graphql/movie";
import { findAllAvailableTheaterByDate } from "../graphql/theater";
import { Movie } from "./movie";
import { Schedule } from "./shecudle";
import { Theater } from "./theater";


export default function MovieBuyForm() {
    // -------------------------------- form parameters --------------------------------
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
    let [hourState, hourSetState] = createResource(() => null);
    let formatDateHHMM = (date: Date) => `${date.getHours()}:${date.getMinutes()}`;
    return <div>
        <input class="m-5 border-red-600 border-4 w-[20vw]" type="date" value={dateState().toJSON().slice(0, 10)} onChange={(e) => {
            theaterIDSetState(null);
            return dateSetState(new Date(e.currentTarget.value))
        }
        } />
        <select disabled={theaterState() == null} class="m-5 border-red-600 border-4 w-[20vw]" onChange={(e) => {
            movieSetIdState(null);
            return theaterIDSetState(new Number(e.currentTarget.value))
        }}>
            <option disabled selected value={undefined}>Theater</option>
            <Show when={theaterState()}
                fallback={
                    <div></div>
                }>


                <For each={theaterState()}>{
                    (theater: Theater, index) => <option value={theater.id.valueOf()}>{theater.city_name}</option>
                }
                </For>

            </Show>
        </select>
        <select disabled={movieState() == null } class="m-5 border-red-600 border-4 w-[20vw]" onChange={(e) => movieSetIdState(new Number(e.currentTarget.value))} >
            <option disabled selected value={undefined}>Movie</option>
            <Show when={movieState()}
                fallback={
                    <div></div>
                }>
                <For each={movieState()}>{
                    (movie: Movie, index) => <option value={movie.id.valueOf()}>{movie.name}</option>
                }
                </For>
            </Show>
        </select>
        <select disabled={movieIdState() == null } class="m-5 border-red-600 border-4 w-[20vw]"  >
            <option disabled selected value={undefined}>Hour</option>
            <Show when={movieIdState()}
                fallback={
                    <div></div>
                }>
                <For each={(movieState() as Movie[]).find((x) => x.id == movieIdState())?.schedules}>{
                    (sched: Schedule, index) => <option value={sched.id}>{formatDateHHMM(new Date(sched.time))}</option>
                }
                </For>

            </Show>
        </select>




    </div>




}