import { Movie, MovieCard } from "./movie"

export default function MoviesTable(props : {movies : any }){
    return <div id="s2">

    <div class="grid grid-cols-1 w-full h-full">
        <div class="grid xl:grid-cols-4  lg:grid-cols-3  md:grid-cols-2  sm:grid-cols-1   grid-gap-x-3 w-full h-full">
            {
                props.movies!.map((x: Movie) => <button onClick={() => { location.replace(`/movie/${x.id}`) }} class="m-5"> <MovieCard movie={x}></MovieCard></button>)
            }

        </div>

    </div>

</div>

}