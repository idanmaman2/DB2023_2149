import { useSearchParams } from "@solidjs/router";
import { createSignal } from "solid-js";

export default function SignupPage(){
    let  [searchParams, setSearchParams]: [{redirect : string} , any] = useSearchParams();
    let [firstNameState , firstNameSetState] = createSignal(""); 
    let [lastNameState , lastNameSetState] = createSignal(""); 
    let [idState , idSetState] = createSignal(""); 
    let [emailState , emailSetState] = createSignal(""); 
    let [passwordState , passwordSetState] = createSignal("") ; 
    return <div class=" flex items-center justify-center  w-[100vw] ">
        <div class="grid border-blue-500 border-4 rounded-md w-[40vw] shadow-purple-400 shadow-2xl">
            <div class=" m-5 flex justify-center">
                <div class="grid">
                <p class="lg:text-4xl sm:text-xl text-blue-400 font-extrabold -translate-x-5">Create an account in <span class="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-400">CinemaTOWN</span>  <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600">CLUB+</span></p>
                <div class="w-full rounded-3xl h-1 bg-blue-500  -translate-x-5" ></div>
                </div>
               
            </div>
           
            <div class="-translate-x-[5vw] m-5 flex  h-[5vh] justify-center">
            <p class="m-5 font-light lg:text-2xl sm:text-sm  w-[10vw] ml-[4vw] text-blue-500">Personal Name : </p>
            <input 
            type="input"
            onChange={ (e)=> {
                firstNameSetState(e.currentTarget.value )
                console.log(firstNameState())
            }}
            class="translate-y-[2vh] w-[20vw] h-[5vh] border-blue-500 border-2" value=""> </input>
            </div>
           
            <div class="-translate-x-[5vw] m-5 flex  h-[5vh] justify-center">
            <p class="m-5 font-light lg:text-2xl sm:text-sm  w-[10vw] ml-[4vw] text-blue-500">Last Name : </p>
            <input 
            type="input"
            onChange={ (e)=> {
                lastNameSetState(e.currentTarget.value )
                console.log(lastNameState())
            }}
            class="translate-y-[2vh] w-[20vw] h-[5vh] border-blue-500 border-2" value=""> </input>
            </div>
           
            <div class="-translate-x-[5vw] m-5  h-[5vh] flex justify-center">
            <p class="m-5 font-light lg:text-2xl sm:text-sm w-[10vw] ml-[4vw] text-blue-500">ID: </p>
            <input 
            type="input"
            onChange={ (e)=> {
                idSetState(e.currentTarget.value )
                console.log(idState())
            }}
            class="translate-y-[2vh] w-[20vw] h-[5vh] border-blue-500 border-2" value=""> </input>
            </div>
           
            <div class="-translate-x-[5vw] m-5  h-[5vh] flex justify-center">
            <p class="m-5 font-light lg:text-2xl sm:text-sm  w-[10vw] ml-[4vw] text-blue-500">Email: </p>
            <input 
            type="input"
            onChange={ (e)=> {
                emailSetState(e.currentTarget.value )
                console.log(emailState())
            }}
            class="translate-y-[2vh] w-[20vw] h-[5vh] border-blue-500 border-2" value=""> </input>
            </div>
           
            <div class="-translate-x-[5vw] m-5 flex  h-[5vh] justify-center">
            <p class="m-5 font-light lg:text-2xl sm:text-sm w-[10vw] ml-[4vw] text-blue-500">Password: </p>  
            <input type="password"
            onChange={ (e)=>{
                passwordSetState(e.currentTarget.value )
                console.log(passwordState())
            }}
            class="translate-y-[2vh] w-[20vw] h-[5vh] border-blue-500 border-2" value=""></input>
            </div>


            <div class="-translate-x-[5vw] m-5 flex   h-[5vh] justify-center">
            <p class="m-5 font-light lg:text-2xl sm:text-sm  w-[10vw] ml-[4vw] text-blue-500">Repeat Password: </p>  
            <input type="password"
            onChange={ (e)=>{
                passwordSetState(e.currentTarget.value )
                console.log(passwordState())
            }}
            class="translate-y-[2vh] w-[20vw] h-[5vh] border-blue-500 border-2" value=""></input>
            </div>

            <div class="h-[4vh]"></div>
            <div class="m-10 -translate-x-6 flex justify-center">
            <button 
            onClick={ ()=> window.location.href = "/" + (searchParams["redirect"]  ?? "" ) }
            class="text-3xl w-[20vw] h-[5vh] bg-blue-500 flex-initial hover:bg-blue-400 text-white font-bold border-b-4 border-blue-700 hover:border-blue-500 rounded">Sign Up</button>
            </div>
        </div>
        </div>


    
    
    

}