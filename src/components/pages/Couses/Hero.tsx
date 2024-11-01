export default function Hero(props: { Name: string }) {
  return (
    <div>
      <div className="pt-[230px] bg-[url('./Courses/DS.png')] bg-center h-screen bg-no-repeat bg-cover">
        <h1 className="font-sans text-[var(--text-yellow)]  text-5xl font-semibold text-center">
          {props.Name}
        </h1>
      </div>
    </div>
  );
}
