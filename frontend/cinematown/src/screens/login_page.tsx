import { useParams, useSearchParams } from "@solidjs/router";
import { createSignal, Signal } from "solid-js";


export default function LoginPage() {
    let  [searchParams, setSearchParams]: [{redirect : string} , any] = useSearchParams();
    let [nameState , nameSetState] = createSignal(""); 
    let [passwordState , passwordSetState] = createSignal("") ; 
    return <div class=" flex items-center justify-center  w-[100vw] h-[50vh]">
        <div class="grid border-blue-500 border-4 rounded-md w-[50vw] h-[50vh] shadow-purple-400 shadow-2xl">
            <div class=" m-5 flex justify-center">
                <div class="grid">
                <p class="text-4xl text-blue-400 font-extrabold">Log In</p>
                <div class="w-full rounded-3xl h-1 bg-blue-500"></div>
                </div>
               
            </div>
           
            <div class="-translate-x-[5vw] m-5 flex justify-center">
            <p class="m-5 font-light text-2xl  text-blue-500">Username : </p>
            <input 
            type="input"
            onChange={ (e)=> {
                nameSetState(e.currentTarget.value )
                console.log(nameState())
            }}
            class="translate-y-[2vh] w-[20vw] h-[5vh] border-blue-500 border-2" value=""> </input>
            </div>
            <div class="-translate-x-[5vw] m-5 flex justify-center">
            <p class="m-5 font-light text-2xl text-blue-500">Password : </p>  
            <input type="password"
            onChange={ (e)=>{
                passwordSetState(e.currentTarget.value )
                console.log(passwordState())
            }}
            class="translate-y-[2vh] w-[20vw] h-[5vh] border-blue-500 border-2" value=""></input>
            </div>
            <div class="m-5 flex justify-center">
            <button 
            onClick={ ()=> window.location.href = "/" + (searchParams["redirect"]  ?? "" ) }
            class="text-3xl w-[20vw] h-[5vh] bg-blue-500 flex-initial hover:bg-blue-400 text-white font-bold border-b-4 border-blue-700 hover:border-blue-500 rounded">Log In</button>
            </div>

            
            <a href={`/signup?redirect=${searchParams["redirect"]}`} class="  text-xl underline flex justify-center text-blue-800 font-light">Create an account </a>


        </div>
    </div>
}