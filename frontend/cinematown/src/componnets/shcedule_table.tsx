import { For, Show } from "solid-js";
import ScheduleCard, { Schedule } from "./shecudle";

export default function ScheduleTable(props: {schedules:Schedule[] , twoD : number , date : Date} ){
    const groupBy = (x : any ,f : any )=>x.reduce((a : any ,b : any ,i : any )=>((a[f(b,i,x)]||=[]).push(b),a),{});

    return <For each={Object.entries(groupBy(props.schedules , (x:any)=> {
        var dt = new Date(x.time);
        return dt.getFullYear() + "/" + (dt.getMonth() + 1) + "/" + dt.getDate();
    }))}>
            {
                (group , index)=>
                <Show when={props.date.getFullYear() == new Date(group[0]).getFullYear() && props.date.getMonth() == new Date(group[0]).getMonth() && props.date.getDate() == (new Date(group[0])).getDate()}>
                <Show when={(group[1] as any[]).some((sched)=> (props.twoD == 2 && !sched.is_3D) || (props.twoD == 3   && sched.is_3D) || (props.twoD == 1)) }>
                <div>
                    <h1>{group[0]}</h1>
                 <table class="table-fixed w-full">
                <thead>

                <tr>
                    <th class="border dark:border-slate-600 font-medium p-4 pl-8 pt-3 pb-3 text-slate-400 dark:text-slate-200 text-left">Date</th>
                    <th class="border dark:border-slate-600 font-medium p-4 pl-8 pt-3 pb-3 text-slate-400 dark:text-slate-200 text-left">Theater</th>
                    <th class="border dark:border-slate-600 font-medium p-4 pl-8 pt-3 pb-3 text-slate-400 dark:text-slate-200 text-left">3D</th>
                </tr>

                 </thead>
                <tbody>
                <For each={group[1] as any}>{
                    (sched,indexj)=>     
    
                    <tr>
                        <td class="border dark:border-slate-600 font-medium p-4 pl-8 pt-3 pb-3 text-slate-400 dark:text-slate-200 text-left">{sched.time}</td>
                        <td class="border dark:border-slate-600 font-medium p-4 pl-8 pt-3 pb-3 text-slate-400 dark:text-slate-200 text-left">{sched.theater_hall.theater.street_name}</td>
                        <td class="border dark:border-slate-600 font-medium p-4 pl-8 pt-3 pb-3 text-slate-400 dark:text-slate-200 text-left">{sched.is_3D ? "true" : "false"}</td>
                    </tr>

                }


                </For>
                     
                        </tbody>
            </table>
            </div>
            </Show>
                </Show>
            }
        </For>

    
    
    

}