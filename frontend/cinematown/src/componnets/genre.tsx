import { For } from "solid-js"
import styles from "./genre.module.css"
export interface Genre {
    name: string
    id: string
}

export function GenreCard(props: { genre: Genre }) {
    return <div class="bg-black  border-r-4 border-purple-500">
            <p class="text-[40%] text-white">{props.genre.name}</p>
    </div>;




}