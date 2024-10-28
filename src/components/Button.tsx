interface ButtonProps {
  content: string
}

function Button({ content }: ButtonProps) {
  return <button className='border-[6px] rounded-xl border-yellow-600 w-36 h-12 bg-yellow-350 text-bg-blue-925 font-bold'>{content}</button>
}

export default Button;