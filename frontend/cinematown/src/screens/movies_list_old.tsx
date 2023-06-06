import { createResource, Show } from "solid-js";
import MoviesTable from "../componnets/movies_table";
import styles from '../App.module.css';
import { getFindAllMoviesOld } from "../graphql/movie";

export default function MoviesListOld(){

    const [movies] = createResource(() =>getFindAllMoviesOld());
    return <div >
        <Show
            when={movies()}
            fallback={
                <div class={styles.divcen}>
                    <p class={styles.text}>loading CinemaTown...</p><br></br>
                </div>

            }>
            <MoviesTable movies={movies()}></MoviesTable>
        </Show>


    </div>;




}