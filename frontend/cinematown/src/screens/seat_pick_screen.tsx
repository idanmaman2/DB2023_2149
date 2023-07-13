import { useParams } from "@solidjs/router";
import { createResource, For, Resource, ResourceReturn, Show } from "solid-js";
import { Seat } from "../componnets/seats";
import { Schedule } from "../componnets/shecudle";
import { Thetaer_Hall } from "../componnets/theater_hall";
import { getScheduleById } from "../graphql/schedule";
import getSeatsBySchedule from "../graphql/seats";
import { gsap } from "gsap"


export function SeatPickScreen() {
    const params = useParams();

    let [schedule]: ResourceReturn<Schedule, unknown> = createResource(() => getScheduleById(Number(params.id)));
    let getArrayOfSeats = (row: number, col: number, seats: { all: Seat[], free: Seat[], broken: Seat[] }): number[][] => {
        let freeSeats: Seat[] = seats["free"]
        let allSeatsExsists: Seat[] = seats["all"]
        let brokenSeats: Seat[] = seats["broken"]
        let array: (any)[][] = new Array(row + 1).fill(0).map((x) => new Array(col + 1).fill(0));
        for (var seat of allSeatsExsists) {
            array[seat!.rowseat][seat!.columnseat] = { val: 0, seat: seat };
        }
        for (var seat of freeSeats) {
            array[seat!.rowseat][seat!.columnseat] = { val: 1, seat: seat };;
        }
        for (var seat of brokenSeats) {
            array[seat!.rowseat][seat!.columnseat] = { val: 2, seat: seat };
        }
        console.log(JSON.stringify(array))
        return array;
    }
    let [seats] = createResource(schedule, (sched: Schedule) => {
        if (!sched) {
            return undefined;;
        }
        return getSeatsBySchedule(Number(params.id), sched.theater_hall.id);
    });
    return <Show
        when={seats() && schedule()}
        fallback={<p>Loading...</p>}>
        <p class="mb-[10vh] text-5xl font-semibold flex justify-center items-center">Pick Seats to : {schedule()!.movie.name} -   {schedule()!.theater_hall!.theater!.city_name}  {schedule()!.theater_hall!.theater!.street_name}</p>


        <div class=" flex justify-center items-center ">

            <div class="grid grid-cols-1  gap-4">
                <For each={getArrayOfSeats(schedule()!.theater_hall!.sizeRow, schedule()!.theater_hall!.sizeCol, seats()!).reverse()}>{
                    (seatsA: any, index: any) => <div class="flex items-start justify-between">
                        <p class="w-[1vw] h-[1vh]">{schedule()!.theater_hall!.sizeRow - index().toString().padStart(2, "0")}</p>
                        <For each={seatsA}>{(seat: any, indexj: any) => <Show when={seat.val == 1}
                            fallback={

                                <button id={`R${schedule()!.theater_hall!.sizeRow - index()}C${indexj()}`}
                                    onclick={() => {
                                        gsap.fromTo(`#R${schedule()!.theater_hall!.sizeRow - index()}C${indexj()}`,
                                            { x: "0px" },
                                            {
                                                x: "20px",
                                                duration: 0.05,
                                                ease: "expo",
                                                onComplete: () => {
                                                    gsap.to(`#R${schedule()!.theater_hall!.sizeRow - index()}C${indexj()}`, {
                                                        x: "0px", duration: 0.05,
                                                        ease: "expo",
                                                        onComplete: () => {
                                                            gsap.to(`#R${schedule()!.theater_hall!.sizeRow - index()}C${indexj()}`, {
                                                                 x: "-20px", 
                                                                 duration: 0.05, 
                                                                 ease: "expo", 
                                                                 onComplete: () =>{
                                                                    gsap.to(`#R${schedule()!.theater_hall!.sizeRow - index()}C${indexj()}`, {
                                                                        x: "0px", duration: 0.05,
                                                                        ease: "expo",
                                                                        onComplete:()=>{alert("THIS SEAT IS UNAVIANBLE!!!")}
                                                                 })  }})

                                                        }
                                                    })
                                                }
                                            })


                                    }
                                    }
                                    title={`Row : ${schedule()!.theater_hall!.sizeRow - index()} Column : ${indexj()} `} onClick={() => console.log("cool")}><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-armchair-2" width="50" height="28" viewBox="0 0 10 20" stroke-width="2" stroke="currentColor" fill={seat.val == 0 ? "#e31919" : seat.val == 1 ? "#10e348" : "#f78c0a"} stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <path d="M5 10v-4a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v4" /> <path d="M16 15v-2a3 3 0 1 1 3 3v3h-14v-3a3 3 0 1 1 3 -3v2" /> <path d="M8 12h8" /> <path d="M7 19v2" /> <path d="M17 19v2" /> </svg></button>



                            }


                        >
                            <button id={`R${schedule()!.theater_hall!.sizeRow - index()}C${indexj()}`}
                                onclick={() => {
                                    gsap.fromTo(`#R${schedule()!.theater_hall!.sizeRow - index()}C${indexj()}`,
                                        { x: "0px", y: "-30px", color: "#10ff48", rotation: 0 },
                                        {
                                            x: "0px",
                                            y: "0px",
                                            duration: 0.6,
                                            ease: "bounce",
                                            rotation: 360,
                                            scale: 1.1,
                                            onComplete: () => {
                                                let pickupId = Number(params.id) ; 
                                                let seatId = seat.seat.id ; 
                                                window.location.href = `/login?redirect=scheduleseatpick/${pickupId}/seat/${seatId}`
                                            }
                                        })

                                }
                                }
                                title={`Row : ${schedule()!.theater_hall!.sizeRow - index()} Column : ${indexj()} `} onClick={() => console.log("cool")}><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-armchair-2" width="50" height="28" viewBox="0 0 10 20" stroke-width="2" stroke="currentColor" fill={seat.val == 0 ? "#e31919" : seat.val == 1 ? "#10e348" : "#f78c0a"} stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <path d="M5 10v-4a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v4" /> <path d="M16 15v-2a3 3 0 1 1 3 3v3h-14v-3a3 3 0 1 1 3 -3v2" /> <path d="M8 12h8" /> <path d="M7 19v2" /> <path d="M17 19v2" /> </svg></button>
                        </Show>}</For>
                    </div>
                }
                </For>

            </div>
        </div>
        <div class="mt-12 flex justify-center items-center ">
            <div class="w-[40vw] h-1 bg-mainBG">
            </div>
        </div>
        <div class="mt-3 flex justify-center items-center ">
            <p>Screen</p>
        </div>





    </Show>





}