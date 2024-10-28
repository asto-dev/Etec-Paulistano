type props = {
  curName: string;
  img: string;
}

function CardCurso(props: props) {
  return (
    <div className="flex flex-col justify-center items-center m-3">
      <button className="w-64 h-64 hover:w-80 transition-all">
        <img src={props.img} alt={props.curName} className="rounded-3xl" />
      </button>
      <div className="w-64 h-10 text-white m-3 flex justify-center items-center ">
        {props.curName}
      </div>
    </div>
  );
}

export default CardCurso;
