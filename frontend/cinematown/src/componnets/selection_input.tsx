import { For } from "solid-js";
import styles from "./selection_input.css"


export default function SelectionInput(props: { selection: string[], svg: any , watermark : string}) {

    return <div class="w-[100%] h-[100%] flex items-center m-5 px-4 py-3 bg-white border border-black rounded-lg shadow-md ">
    
    
    
    <div class=" flex items-center justify-center  w-[40%] h-[80%] mr-3 text-white bg-red-500 rounded-lg">
      <svg class="flex-initial w-[40%] h-[80%] ">{props["svg"]}</svg>
    </div>
  
    <select  class="w-[80%] h-[100%]  text-lg font-light text-gray-800 bg-transparent outline-none focus:outline-none">
      <option disabled selected value="">{props["watermark"]}</option>
      <For each={props["selection"]}>
        {(x, index) => <option value={x}>{x}</option>}
      </For>
    </select>
  </div>


    



}