import { useParams } from "@solidjs/router";
import { createResource, For, Show } from "solid-js";
import { Seat } from "../componnets/seats";
import getSeatsBySchedule from "../graphql/seats";


export function SeatPickScreen(){
    const params = useParams();
    let [seats]= createResource(()=>getSeatsBySchedule(Number(params.id))); 
    return<Show
    when={seats()}
    fallback={<p>Loading...</p>}>
        <For each={seats()}>{(seat :Seat , index : any )=><div>{seat.id}</div>}</For>
    </Show>





}