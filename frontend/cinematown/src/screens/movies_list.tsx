
import logo from '../logo.svg';
import styles from '../App.module.css';
import { createResource, Show, createSignal, For } from 'solid-js';
import { Movie, MovieCard } from '../componnets/movie';

import { createClient } from "@urql/core";
import { About } from './about';
import SelectionInput from '../componnets/selection_input';
import { client } from '../graphql/client';
import getFindAllMovies from '../graphql/movie';
import MoviesTable from '../componnets/movies_table';

export default function MoviesList() {
    const [movies] = createResource(() =>getFindAllMovies());


    return <div >


        <Show
            when={movies()}
            fallback={
                <div class={styles.divcen}>
                    <p class={styles.text}>loading CinemaTown...</p><br></br>
                </div>

            }>
            <About></About>
            <div class="w-[100vw] h-[35vh] bg-yellow-600">
                <h1 class="flex justify-center text-8xl font-bold">Order Tickets</h1>
                <div class="flex justify-center items-center m-10">
                    <div class="w-[15vw] h-[6vh] m-5">
                        <SelectionInput svg={<path d="M24,9.724V19a5.006,5.006,0,0,1-5,5H18a1,1,0,0,1,0-2h1a3,3,0,0,0,3-3V9.724a3,3,0,0,0-1.322-2.487l-7-4.723a2.979,2.979,0,0,0-3.356,0l-7,4.723A3,3,0,0,0,2,9.724V19a3,3,0,0,0,3,3H6a1,1,0,0,1,0,2H5a5.006,5.006,0,0,1-5-5V9.724A4.993,4.993,0,0,1,2.2,5.579L9.2.855a4.981,4.981,0,0,1,5.594,0l7,4.724A5,5,0,0,1,24,9.724Zm-5,5.283a6.952,6.952,0,0,1-2.05,4.949l-3.515,3.438a2.063,2.063,0,0,1-2.87,0l-3.507-3.43A7,7,0,1,1,19,15.007Zm-2,0a5,5,0,1,0-8.536,3.535l3.5,3.422,3.58-3.43A4.958,4.958,0,0,0,17,15.007ZM15,15a3,3,0,1,1-3-3A3,3,0,0,1,15,15Z" />}
                            selection={["Jerusalem", "TLV", "Rechovot"]}
                            watermark="Theather"

                        ></SelectionInput>
                    </div>
                    <div class="w-[15vw] h-[6vh] m-5">
                        <SelectionInput svg={<path d="M13,8h5v4h-5v-4ZM4,12v-4H0v4H4Zm0,2H0v4H4v-4Zm9,10h5v-4h-5v4Zm-2-4H6v4h5v-4Zm9-2h4v-4h-4v4ZM6,12h5v-4H6v4Zm-2,8H.1c.4,1.96,1.94,3.5,3.9,3.9v-3.9Zm7-6H6v4h5v-4Zm9,6v3.9c1.96-.4,3.5-1.94,3.9-3.9h-3.9Zm3.9-14c-.46-2.28-2.48-4-4.9-4h-1V1c0-.55-.45-1-1-1s-1,.45-1,1v1H8V1c0-.55-.45-1-1-1s-1,.45-1,1v1h-1C2.59,2,.57,3.72,.1,6H23.9ZM13,14v4h5v-4h-5Zm7-6v4h4v-4h-4Z" />}
                            selection={["17.09", "20.09", "21.09"]}
                            watermark="Date"

                        ></SelectionInput>
                    </div>
                    <div class="w-[15vw] h-[6vh] m-5">
                        <SelectionInput svg={<path d="m22 0v3h-2v-3h-16v3h-2v-3h-2v24h2v-3h2v3h16v-3h2v3h2v-24zm0 5v2h-2v-2zm0 8v2h-2v-2h-16v2h-2v-2h2v-2h-2v-2h2v2h16v-2h2v2h-2v2zm-18-8v2h-2v-2zm-2 14v-2h2v2zm18 0v-2h2v2z" />}
                            selection={["Toy Story", "Puss in boots", "Rango"]}
                            watermark="Movie"
                        ></SelectionInput>
                    </div>
                    <div class="w-[15vw] h-[6vh] m-5">
                        <SelectionInput svg={<path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm4,13h-4c-.552,0-1-.447-1-1V6c0-.553,.448-1,1-1s1,.447,1,1v5h3c.553,0,1,.447,1,1s-.447,1-1,1Z" />}
                            selection={["15:00", "16:00", "17:00", "18:00", "19:00"]}
                            watermark="Hour"
                        ></SelectionInput>
                    </div>



                </div>
                <div class="flex justify-center items-center">
                    <button class="text-3xl w-[20vw] h-[5vh] bg-blue-500 flex-initial hover:bg-blue-400 text-white font-bold border-b-4 border-blue-700 hover:border-blue-500 rounded">
                        Place Order
                    </button>
                </div>
            </div>
        
            <MoviesTable movies={movies()}></MoviesTable>
            <div class="m-10 flex  justify-center items-center w-full">
            <a href='/old' class=" text-blue-800  font-light text-xl underline ">Watch a list of all the movies that we currently own</a>

            </div>

        </Show>


    </div>;



}