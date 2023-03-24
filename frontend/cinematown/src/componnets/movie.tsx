import { from } from "solid-js"

import styles from "./movie.module.css"
import { createSignal, Show, For } from "solid-js"
import { Genre, GenreCard } from "./genre"
export interface Movie {
  name: string
  id: bigint
  description: string
  rating: string
  poster_images: any
  trailer: any
  reales_date: string
  duration: string
  genres: [Genre]
}
export function MovieCard(props: { movie: Movie }) {

  const { movie } = props;
  return (

    <a href="#" class="group">
      <div class={styles.container}>
        <div class={styles.card}>
          <div class={styles.front}>
            <div class="m rounded-lg  bg-mainColor  w-[100%] h-[100%]  border-mainColor border-8 relative">
              <img src={movie.poster_images["imageLow"][0]} alt="Poster Image" class=" w-[100%] h-[80%] object-fill  group-hover:opacity-75" />
              <div class="h-20%">
                <h3 class="mt-1 text-4xl  text-gray-900">{movie.name}</h3>
                <div class=" absolute bottom-[-10px] ">
                  <div class="grid grid-cols-3  gap-y-0 gap-x-1">
                    <For each={movie.genres}>{
                      (gn, i) => <div class="w-[100px] h-[90px] mr-[10px] ml-[10px] mt-0 mb-[-50px] p-0`"><GenreCard genre={gn}></GenreCard></div>
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