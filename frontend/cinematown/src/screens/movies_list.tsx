import styles from '../App.module.css';
import { createResource, Show, createSignal, For, onCleanup, onMount, } from 'solid-js';

import { About } from './about';
import getFindAllMovies from '../graphql/movie';
import MoviesTable from '../componnets/movies_table';
import MovieBuyForm from '../componnets/movie_buy_form';
import ImagePager from '../componnets/image_pager';

export default function MoviesList() {
    const [movies] = createResource(() => getFindAllMovies());

    return <div >
        <Show
            when={movies()}
            fallback={
                <div class={styles.divcen}>
                    <p class={styles.text}>loading CinemaTown...</p><br></br>
                </div>
            }>
            <div class="relative w-[100vw] h-[90vh]" >
                <div class="w-[100vw] h-[90vh] pattern-rhombus pattern-blue-200 pattern-bg-white pattern-opacity-100 pattern-size-180  absolute"></div>
                <div class="absolute w-full h-full">
                  <ImagePager movies={movies()!}></ImagePager>
                </div>
                <div class="absolute z-40">
                    <About></About>
                </div>

            </div>

            <div class="m-0 w-[100vw] h-[45vh] bg-blue-300">
                <MovieBuyForm></MovieBuyForm>
            </div>
            <MoviesTable movies={movies()}></MoviesTable>

            <div class="m-10 flex  justify-center items-center w-full">
                <a href='/old' class=" text-blue-800  font-light text-xl underline ">Watch a list of all the movies that we currently own</a>

            </div>

        </Show>


    </div>;



}