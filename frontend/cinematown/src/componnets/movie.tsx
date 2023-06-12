import { from } from "solid-js"

import styles from "./movie.module.css"
import { createSignal, Show, For } from "solid-js"
import { Genre, GenreCard } from "./genre"
import { Schedule } from "./shecudle"
export interface Movie {
  name: string
  id: number
  description: string
  rating: string
  poster_images: string
  trailer: string
  reales_date: string
  duration: string
  genres: Genre[]
  schedules : Schedule[]
}
export function MovieCard(props: { movie: Movie }) {
  const timeDDMMYYYY = (date: Date )=>`${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
  const { movie } = props;
  return (

    <a href="#" class="group">
      <div class={styles.container}>
        <div  class={` h-[60vh] xl:w-[20vw]  lg:w-[30vw]  md:w-[40vw] sm:w-[90vw]  ${styles.card}`}>
          <div class={styles.front}>
            <div class="m rounded-lg  bg-mainColor  w-[100%] h-[100%]  border-mainColor border-8 relative">
            <div class="relative w-full h-[80%]" >
                <div class="absolute w-full h-full">
                  <img src={movie.poster_images} alt="Poster Image" class="w-full h-full object-fill  " />
                </div>
                <Show when={props.movie.schedules}>
                <div class="absolute w-full h-full flex items-end justify-center text-white ">
                <p class="text-base font-serif bg-mainColor">Next date : {timeDDMMYYYY(props.movie.schedules.map((x)=>new Date(x.time)).reduce((x:Date , y:Date )=>x > y ? y : x))}</p>
                </div>
                </Show>
           
            </div>
              <div class="h-20% w-[100%]">
                <h3 class="mt-1 text-4xl  text-gray-900">{movie.name}</h3>
                <div class=" absolute bottom-[-10px] w-[100%]">
                  <div class="grid grid-cols-3  gap-y-0 gap-x-5 w-[100%]">
                    <For each={movie.genres.slice(0,6)}>{
                      (gn, i) => <div class="w-[100%] h-[20%] mt-0 mb-[10%] ml-0 mr-0 p-0`"><GenreCard genre={gn}></GenreCard></div>
                    }</For>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class={styles.back}>
            <div class={`overflow-auto overflow-x-hidden  ${styles.safari_scroll} m rounded-lg bg-gray-200 p-4 w-[100%] h-[100%]  border-[#2E4F4F] border-8`}>
              <div class="flex flex-col h-screen">
                <div class=" p-4">
                  <p class="mt-4 text-6xl text-gray-700">{movie.name} <br></br> <span class="text-4xl">{movie.rating}</span></p>
                </div>
                <div class="p-4">
                  <p class="mt-4 text-2xl text-gray-700">{movie.duration} <br></br>{movie.reales_date}</p>
                </div>
                <div class=" p-4">
                  <p class=" mt-4 text-2xl text-gray-700">{movie.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );




}