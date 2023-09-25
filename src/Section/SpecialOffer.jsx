import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../Components/Button"

const SpecialOffer = () => {
  return (
    <section className=" flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
     <div className="flex-1 ">
      <img
      src={offer}
      width={773}
      height={687}
      className="object-contain w-full"
      />

     </div>
     <div >
<h2 className="text-4xl font-palanquin font-bold">Our 
<span className="text-coral-red "> Popular </span>  Products</h2>
<p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray ">Experience top-notch quality 
  and style with our sought-after selections. Discover 
  a world of comfort design and value
</p>
<div className="mt-11 flex flex-warp gap-4">
<Button  label="view Detail" iconURL={arrowRight} />

<Button  label="Learn more"
backgroundColor="bg-white"
borderColor="text-slate-gray"
textColor="text-slate-gray"/>
  </div>
</div>
    </section > 
  )
}

export default SpecialOffer
