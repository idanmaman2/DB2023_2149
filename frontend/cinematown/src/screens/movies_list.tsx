
import logo from '../logo.svg';
import styles from '../App.module.css';
import { createResource, Show, createSignal, For } from 'solid-js';
import { Movie, MovieCard } from '../componnets/movie';

import { createClient } from "@urql/core";

export default function MoviesList() {
    var client: any = createClient({ url: `http://localhost:8080/graphql` });
    const [moviesState, moviesStateSet] = createSignal(null)
    const [movies] = createResource(() => client.query(`  
      query{
        findAllMovies{
          id
          name
          description
          rating
          poster_images
          trailer
          reales_date
          duration
          genres{
            name
            id
          }
        }
        }
      `).toPromise().then((props: { data: any }) => props.data.findAllMovies
    )
    );


    return <div class="bg-mainBG">
        <Show
            when={movies()}
            fallback={
                <div class={styles.divcen}>
                    <p class={styles.text}>loading CinemaTown...</p><br></br>
                    <img src={logo} class={styles.image}></img>
                </div>

            }>
            <div>
                <div class="grid grid-cols-1 ">
                    <For each={movies().reverse()}>
                        {
                            (cat: Movie, i) => {
                                return <button onClick={() => { location.replace(`/movie/${cat.id}`) }}> <div class='w-[400px] h-[800px] '><MovieCard movie={cat}></MovieCard></div></button>
                            }
                        }


                    </For>
                </div>

            </div>
        </Show>
    </div>;



}