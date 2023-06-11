import logo from "../assets/logo.png"
import { gsap } from "gsap"
import { ScrollTarget } from "ScrollMagic"
import { onMount, For, JSX } from "solid-js";


export function About() {

    let sections: any = [
        <div class="hD1 grid justify-items-center h-[90vh] w-[100vw] ">
            <img src={logo} class="w-[15vw] h-[15vh] object-fill mb-10"></img>
            <div class="rounded-lg h-1 w-[30vw] bg-gradient-to-r  from-yellow-300 to-red-600"></div>
            <div class="shadow-2xl hover:shadow-inner bg-red-300 grid justify-items-center m-5">
                <p class="titleC1 text-7xl  font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-green-600 to-purple-400">CinemaTown</p>
            </div>
            <div class="titleBox2 shadow-2xl hover:shadow-inner bg-yellow-200 grid justify-items-center m-5 ">
                <p class="titleC1 text-8xl font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Final Project in Data Bases</p>
            </div>
            <div class=" shadow-2xl hover:shadow-inner bg-green-200 grid justify-items-center m-5 ">
                <p class="titleC1 text-4xl font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Escape to a cinematic wonderland in the heart of your town with Cinematown</p>
            </div>
            <p class="text-4xl mt-[1`vh] font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-pink-600 to-orange-400">Created By : @Idan_Maman</p>
            <a href="#s2">
                <svg class="bg-purple-300 rounded-full border-2 border-black mt-[10vh]  w-10 h-10 text-violet-500 animate-bounce" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </a>
        </div>
        ,
        <div id="s2" class="h-[100vw] w-[100vw] tracking-wider text-5xl font-bold  hD2   bg-gradient-to-r from-pink-600 to-orange-400">




            <div class="flex items-center justify-center">
                <ul>
                <li class="mt-[10vh]"><p class="flex items-center justify-center">
                     Welcome to CinemaTown!
                    <br></br>
                    We offer the latest blockbuster movies in high-quality digital projection and sound, with friendly staff and a range of snacks to enjoy.
                    <br></br>
                     Come and immerse yourself in the world of cinema!
                
                </p></li>
                    <li class="mt-[3vh] flex items-center justify-center "  ><div class="maoz0">

                        <p class="" >The New Genration of
                            Movie Theaters</p>
                    </div>
                    </li>

                    <li class="mt-[3vh]"><p class="maoz1 flex items-center justify-center"> The newst Movies in the Matket</p></li>

                    <li class="mt-[3vh]"><p class="maoz2 flex items-center justify-center"> The BEST exprience!! at low prices</p> </li>
                </ul>
            </div>




        </div>

    ]



    onMount(() => {
        gsap.fromTo(".titleC1", { x: "-100vw", scale: 1.5, y: "3vh" }, {
            ease: 'back',
            x: 0,
            y: 0,
            scale: 1,
            duration: 1
        });
    });






    return <div class="container snap-mandatory snap-y w-[100vw]">
        {sections[0]}

    </div>






}