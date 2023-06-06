import { useParams } from "@solidjs/router";
import { createResource, Show } from "solid-js";
import { getTheaterById } from "../graphql/theater";
import styles from '../App.module.css';
export default function TheaterPage() {
    const params = useParams();
    let [theater] = createResource(() => getTheaterById(Number(params.id)));

    return <Show
        when={theater()}
        fallback={
            <div class={styles.divcen}>
                <p class={styles.text}>loading CinemaTown...</p><br></br>
            </div>

        }>
        <div>
            <div class="m-5 mb-20 text-8xl font-thin flex justify-center items-center">
                <h1 >Find our Theaters</h1>
            </div>

            <div class="flex">
                <div class="w-[50vw] h-[50vh] flex items-center justify-center">
                    <div>
                        <p class="text-4xl font-serif">Theater Street :  {theater()?.street_name}</p>
                        <div class="bg-gray-500 w-full h-1"></div>
                        <p class="text-4xl font-serif">Theater City :  {theater()?.city_name}</p>
                        <div class="bg-gray-500 w-full h-1"></div>
                    </div>
                </div>

                <iframe class="w-[50vw] h-[50vh]" src={`https://embed.waze.com/iframe?zoom=20&lat=${theater()?.lat}&lon=${theater()?.lon}&ct=livemap`} allowfullscreen></iframe>
            </div>
        </div>

    </Show>

}