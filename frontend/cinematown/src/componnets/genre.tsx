import { For } from "solid-js"
import styles from "./genre.module.css"
export interface Genre {
    name: string
    id: string
}

export function GenreCard(props: { genre: Genre }) {

    function genereColorMapping(str: string): string {
        let sum: number = 0;
        for (let x in str as any) {
            sum += str.charCodeAt(x as any);
        }
        // formula : ( (sum +10 )  * prime number in index(2i))%256
        let r: number = ((sum + 10) * 2) % 256;
        let g: number = ((sum + 10) * 5) % 256;
        let b: number = ((sum + 10) * 11) % 256;
        return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`
    }


    return <div  class="bg-black w-full flex items-stretch overflow-hidden border-r-4" style={`border-color:${genereColorMapping(props.genre.name)}`}>
        <p class="text-[40%] text-white">{props.genre.name}</p>
    </div>;




}
