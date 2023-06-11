import { useParams } from "@solidjs/router";


export function SeatPickScreen(){
    const params = useParams();
    return <div>{params.id}</div>





}