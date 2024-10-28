type props = {
  curName: string;
  img: string;
};

function CardCurso(props: props) {
  return (
    <button className="w-64 h-64 flex flex-col justify-center items-center m-3 ease-in-out duration-300 hover:scale-110">
      <img src={props.img} alt={props.curName} className="rounded-3xl" />
      <p className="w-64 h-10 text-white m-3 text-center ">{props.curName}</p>
    </button>
  );
}

export default CardCurso;
