type TitleProps = {
  title: string
}

export function Title({ title }: TitleProps) {
  return (
    <div className="flex flex-col items-center gap-2 tracking-[1px]">
      <h2 className="text-5xl font-bold text-[#171A4A]">
        {title}
      </h2>

      <span className="w-[90%] rounded-xl h-[3px] bg-yellow-350 bottom-[5px]"/>
    </div>
  )
}