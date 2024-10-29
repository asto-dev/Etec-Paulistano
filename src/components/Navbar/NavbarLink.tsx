import { NavLink } from "react-router-dom";

type props = {
    path: string,
    content: string
}

export default function NavbarLink(props: props) {
  return (
    <li className="group text-white flex flex-col items-center gap-1 tracking-[1px]
    after:content-[''] after:bg-pink-500 after:h-[3px] after:w-[0%] after:rounded-xl after:bottom-[5px]
    group:hover::after:w-[100%] hover:text-yellow-350 duration-50">

      <NavLink to={props.path}>{props.content}</NavLink>
      
      <span className="w-[0%] rounded-xl h-[3px] bg-yellow-350 bottom-[5px] group-hover:w-[100%]"/>
    </li>
  );
}
