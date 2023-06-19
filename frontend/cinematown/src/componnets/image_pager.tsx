import { createSignal, onCleanup, onMount } from "solid-js";
import { Movie } from "./movie";
import { gsap } from "gsap"

export default function ImagePager(props: { movies: Movie[] }) {
    let [movieShowIndexState, movieShowIndexSetState] = createSignal(0);
    let timer : number ; 
    let getCircularMovieIndex = (i:number)=>i%props.movies.length ;  
    onMount(() => {
        let t1 = gsap.timeline({ repeat: -1, repeatDelay: 2.8  ,onRepeat:()=>{
            console.log(movieShowIndexSetState( getCircularMovieIndex(movieShowIndexState() + 1)));
        }});
        t1.fromTo(".IMT", {  }, {duration:0.5 , x : "-50px" ,   ease: 'bounce' , scale: 1.1 });
    });
    onCleanup(() => clearInterval(timer));



    return <div class="flex items-center justify-center w-full h-full gap-20">
        <img class="IMT w-[20vw] h-[38vh] -translate-y-[-2vh] z-0 -rotate-1 -skew-y-4" src={props.movies![movieShowIndexState() ].poster_images}></img>
        <img class="IMT  w-[20vw] h-[38vh]   -translate-y-[-2vh]  z-0 -rotate-2 -skew-y-12" src={props.movies![getCircularMovieIndex(movieShowIndexState()+1)].poster_images}></img>
        <img class="IMT w-[20vw] h-[40vh]   z-40" src={props.movies![getCircularMovieIndex(movieShowIndexState() + 2)].poster_images}></img>
        <img class="IMT w-[20vw] h-[38vh]   -translate-y-[-2vh]  z-0 rotate-2 skew-y-12" src={props.movies![getCircularMovieIndex(movieShowIndexState() + 3)].poster_images}></img>
        <img class="IMT w-[20vw] h-[38vh]   -translate-y-[-2vh]  z-0 rotate-1 skew-y-4 " src={props.movies![getCircularMovieIndex(movieShowIndexState() + 4)].poster_images}></img>
    
    
    
    </div>

}