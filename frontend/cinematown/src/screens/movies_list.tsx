
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
import MovieBuyForm from '../componnets/movie_buy_form';

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
                   <MovieBuyForm></MovieBuyForm>



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