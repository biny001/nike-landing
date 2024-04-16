import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images"
import Button from "../components/Button"
import { statistics } from "../constants"

function Hero() {
    return (
       <section id="home"
       className="w-full flex xl:flex-row
        flex-col min-h-screen 
       gap-10 max-container justify-center "
       >
        <div className="relative xl:w-2/5 flex flex-col 
        justify-center 
        items-start w-full max-xl:padding-x pt-28">
            <p className="text-xl font-monserrat text-coral-red">Our summer collection</p>
            <h1 className="mt-10 font-palanquin text-8xl
             max-sm:text-[72px] max-sm:leading-[82px]">
               <span className="xl:bg-white
               xl:whitespace-nowrap relative z-10 pr-10
               "> The New Arrival</span>
               <br/>
               <span className="text-coral-red inline-block mt-3">Nike</span>Shoes
            </h1>
            <p className="font-monserrat text-slate-gray text-lg leading-8 mt-6 mb-14  sm:max-w-sm">Discover stylish Nike arrivals,quality 
                comfort,and innovation for your active life.</p>
                <Button label='Show now' iconUrl= {arrowRight}/>

            <div className="flex 
            justify-start items-start
             flex-wrap w-full mt-20 gap-16">
                {statistics.map((stat,ind)=>
                <div key={ind}>
                    <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
                <p className="leading-7 font-montserrat tex-slate-gray">{stat.label}</p></div>)}
            </div>
        </div>



     <div className="relative flex-1 flex justify-center items-center">
        <img src={bigShoe1}
        alt="shoes" width={610} height={500} />
     </div>

       </section>
    )
}

export default Hero
