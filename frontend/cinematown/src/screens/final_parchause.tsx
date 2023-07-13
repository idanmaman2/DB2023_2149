import { useParams } from "@solidjs/router";

export default function FinalParchause(){
    const params = useParams();
    let ScheduleId = params.id1 ; 
    let seatID = params.id2 ; 
    let userMesaage = "SUPER_TEST_USER"
    let userId = 999884094 ; 
    return <div class="w-[100vw] h-[70vh]">
        <div class="h-full w-full flex justify-center items-center ">
            <p class="font-light text-6xl ">Thanks for Your Parchause <span class="text-red-600 font-bold">{userMesaage}:<span class="text-green-500">IDAN</span></span> </p>
        </div>


    <div class="fixed bottom-0">
        <p class="text-gray-800 font-extralight">----Sched :{seatID}----Seat:{ScheduleId}----</p>
    </div>

    </div>
}