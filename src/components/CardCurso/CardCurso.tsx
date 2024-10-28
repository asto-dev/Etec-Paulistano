type props = {
  curName: string;
  img: string;
}

function CardCurso(props: props) {
  return (
    <div className="flex flex-col justify-center items-center m-3 ease-in-out duration-300 hover:scale-110">
      <button className="w-64 h-64 transition-all">
        <img src={props.img} alt={props.curName} className="rounded-3xl" />
        <p className="w-64 h-10 text-white m-3 text-center ">{props.curName}</p>
      </button>
    </div>
  );
}

export default CardCurso;
