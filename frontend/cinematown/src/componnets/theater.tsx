import { JSXElement } from "solid-js";

export interface Theater {
    city_name: string;
    region_name: string
    street_name: string
    id: Number
    lat: number
    lon: number
}
export function TheaterCard(props: { theater: Theater }) {
    function bgtheaterColorMapping(str: string): string {
        let sum: number = 0;
        for (let x in str as any) {
            sum += str.charCodeAt(x as any);
        }
        // formula : ( (sum +10 )  * prime number in index(2i))%256
        let r: number = ((sum + 10) * 2) % 256;
        let g: number = ((sum + 10) * 5) % 256;
        let b: number = ((sum + 10) * 11) % 256;
        return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`
    }
    function trnslatedCords(lat: number, lon: number, zoom: number) {
        let toRad = (x: number) => ((x % 360) / 180 * Math.PI)
        let n = Math.pow(2, zoom)
        let resX = Math.floor(n * ((lon + 180) / 360))
        let resY = Math.floor(n * (1 - (Math.log(Math.tan(toRad(lat)) + 1 / Math.cos(toRad(lat))) / Math.PI)) / 2)
        return [zoom, resX, resY]
    }
    const { theater } = props;
    let [z, x, y] = trnslatedCords(theater.lat, theater.lon, 18)
    return <a href={`/site/${theater.id}`}>
        <div class="border-4 border-black w-full h-full relative">
            <div class="absolute w-full h-full" >
                <div class="flex items-center justify-center w-full h-full">
                    <div>
                        <p class="text-3xl font-bold">city : {theater.city_name}</p>
                        <p class="text-3xl font-bold">region : {theater.region_name}</p>
                        <p class="text-3xl font-bold">street : {theater.street_name}</p>
                    </div>
                </div>
            </div>
            <img class="absoulte object-cover w-full h-full" src={`https://tile.thunderforest.com/atlas/${z}/${x}/${y}.png?apikey=a4e9d225293242168650a97e010ee288`}></img>
        </div>
    </a>
}