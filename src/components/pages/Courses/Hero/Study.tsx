export default function Study(props:{About1:string,About2:string}) {
  return (
    <section
      id="About"
      className=" bg-[var(--light-bg)] font-sans flex flex-col  p-40 items-center"
    >
      <div className="border-b-[2px] border-b-[var(--secound)] w-[525px] flex flex-col items-center pb-4">
        <h1 className=" text-6xl font-bold text-[var(--light-primary)] text-nowrap">
          O que você estudará
        </h1>
      </div>
      <div className="flex flex-col items-center">
        <p className="w-[1590px] text-4xl mt-32">
          {props.About1}
        </p>

        <p className="w-[1590px] text-4xl mt-10">
          {props.About2}
        </p>
      </div>
    </section>
  );
}
