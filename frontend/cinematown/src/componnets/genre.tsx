import { For } from "solid-js"
import styles from "./genre.module.css"
export interface Genre {
    name: string
    id: string
}

export function GenreCard(props: { genre: Genre }) {

    function genereColorMapping(str:string):string{
        // format  - # - 1d : r  - a1  : g  - f2 : b 
        let sum:number   =0 ; 
        for(let x  of str){
            let val = x.charCodeAt(0) ; 
            sum+=val ; 
        }
        let r: number  = 0x1d; 
        let g:number = 0xa1; 
        let b:number =0xf2 ; 
        console.log(`#${r.toString(16).padStart(2,'0')}${g.toString(16).padStart(2,'0')}${b.toString(16).padStart(2,'0')}`)
        return `#${r.toString(16).padStart(2,'0')}${g.toString(16).padStart(2,'0')}${b.toString(16).padStart(2,'0')}`
      }

      
    return <div class={`bg-black  border-r-4 border-[${genereColorMapping(props.genre.name)}]`}>
            <p class="text-[40%] text-white">{props.genre.name}</p>
    </div>;




}
