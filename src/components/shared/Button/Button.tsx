import { useNavigate } from "react-router-dom";

interface ButtonProps {
  content: string;
  Bordertheme: string;
  pathToPage: string;
}

function Button({ content, Bordertheme, pathToPage }: ButtonProps) {

  const navigate = useNavigate()

  function changeNavigation(path: string) {
    navigate(path)
  }

  return (
    <button
      onClick={() => changeNavigation(pathToPage)}
      style={{
        borderColor:
          Bordertheme === "Dark" ? "rgb(202 138 4" : "var(--light-secound)",
      }}
      className="border-[6px] rounded-xl border-yellow-600 w-36 h-12 bg-yellow-350 text-bg-blue-925 font-bold"
    >
      {content}
    </button>
  );
}

export default Button;
