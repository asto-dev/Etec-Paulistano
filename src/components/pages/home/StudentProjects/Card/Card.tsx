type CardProjectsProps = {
  name: string
  description: string
  imgUrl: string
}

export function CardProjects({ description, imgUrl, name }: CardProjectsProps) {
  return (
    <div className="flex flex-col justify-center items-center rounded-3xl shadow-md max-w-[400px]">
      <img 
        src={imgUrl} 
        alt={name} 
        className="rounded-t-3xl w-full object-cover"
      />

      <div className="p-5 space-y-4">
        <h3 className="text-[#171A4A] font-semibold text-xl text-center">{name}</h3>

        <p className="text-center">{description}</p>
      </div>
    </div>
  )
}
