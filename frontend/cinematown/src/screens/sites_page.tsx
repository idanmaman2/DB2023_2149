import { Accessor, createResource, For, Show } from "solid-js";
import { TheaterCard } from "../componnets/theater";
import getAllTheaters from "../graphql/theater";
import styles from '../App.module.css';



export default function SitesPage(){
    let [theaters] = createResource(()=>getAllTheaters())

    return <Show
    when={theaters()}
    fallback={
        <div class={styles.divcen}>
            <p class={styles.text}>loading CinemaTown...</p><br></br>
        </div>

    }>
        <div class=" grid  lg:grid-cols-3  md:grid-cols-2  sm:grid-cols-1  gap-10">
        <For each={theaters()} >{
        (theater:any,i:Accessor<number>)=><div class=" lg:w-[29vw] md:[49vw] sm:[99vw] h-[30vh] m-10">
                <TheaterCard theater={theater}></TheaterCard>
            </div>
        } 
        </For>
        
    </div>
    </Show>

}