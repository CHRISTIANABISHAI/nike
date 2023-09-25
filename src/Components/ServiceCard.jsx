

const ServiceCard = ({imgURL,label,subtext}) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl pz-10 py-16 ">
      <div className="w-11 h-11 justify-center 
      items-center bg-coral-red rounded-full flex mx-10">
        <img
        src={imgURL}
      alt={label}
      width={24}
      height={24}

        />
      </div>
        <h3 className="mx-10 py-2 font-palanquin text-3xl leading-normal">{label}</h3>
        <p className="mx-10 break-words font-montserrat text-lg leading-normal text-slate-gray">{ subtext}</p>
    </div>
  )
}

export default ServiceCard
 