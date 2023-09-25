import Button from "../Components/Button"
import { shoe8 } from "../assets/images/index"


const SuperQulity = () => {
  return (
<section id="about-us" className=" flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
<div className=" flex flex-1  flex-col">
<h2 className="mt-10 font-palanquin text-4xl capitalize  max-sm:text-[72px] max-sm:leading-[-82] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10  pr-10 ">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h2>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, Qulity comfort and innovation for your
          active life.
        </p>
        <div className="mt-11">
        <Button label="view Detail" />
        </div>

</div>
<div className="flex-1 flex justify-center items-center">
<img src={shoe8}
alt="shoe8"
width={570}
height={522}
className="object-contain"
/>
</div>


    
</section>

  )
}

export default SuperQulity
