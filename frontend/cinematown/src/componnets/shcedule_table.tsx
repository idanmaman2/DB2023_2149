import { For } from "solid-js";
import ScheduleCard, { Schedule } from "./shecudle";

export default function ScheduleTable(props: {schedules:Schedule[]} ){
    return <table class="table-fixed w-full">
    <thead>
      <tr>
        <th class="border dark:border-slate-600 font-medium p-4 pl-8 pt-3 pb-3 text-slate-400 dark:text-slate-200 text-left">Date</th>
        <th class="border dark:border-slate-600 font-medium p-4 pl-8 pt-3 pb-3 text-slate-400 dark:text-slate-200 text-left">City</th>
        <th class="border dark:border-slate-600 font-medium p-4 pl-8 pt-3 pb-3 text-slate-400 dark:text-slate-200 text-left">3D</th>
      </tr>
    </thead>
    <tbody>
    <For each={props.schedules}>
            {
                (sched , index)=> <tr>
                <td class="border dark:border-slate-600 font-medium p-4 pl-8 pt-3 pb-3 text-slate-400 dark:text-slate-200 text-left">{sched.time}</td>
                <td class="border dark:border-slate-600 font-medium p-4 pl-8 pt-3 pb-3 text-slate-400 dark:text-slate-200 text-left">{sched.theater_hall.theater.street_name}</td>
                <td class="border dark:border-slate-600 font-medium p-4 pl-8 pt-3 pb-3 text-slate-400 dark:text-slate-200 text-left">{sched.is_3D ? "true" : "false"}</td>
              </tr>
            }
        </For>
    </tbody>
  </table>
    
    
    

}