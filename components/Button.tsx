import { ComponentPropsWithoutRef } from "react"
import clsx from "clsx"

interface Props extends ComponentPropsWithoutRef<"button"> {
  variant?: "solid" | "outline"
  children?: React.ReactNode
}

const Button: React.FC<Props> = ({
  variant = "solid",
  className,
  ...props
}) => (
  <button
    type="button"
    className={clsx(
      className,
      `
        block
        rounded-md
        px-3 
        py-2 
        text-center 
        text-sm 
        font-semibold  
        shadow-sm  
        transition-all 
        focus-visible:outline 
        focus-visible:outline-2 
        focus-visible:outline-offset-2
        focus-visible:outline-green-600
       `,
      props.disabled
        ? "pointer-events-none cursor-not-allowed border border-gray-300 bg-gray-100 text-gray-400"
        : variant === "solid"
          ? "bg-green-600 text-white hover:bg-green-700"
          : "border border-green-400 bg-white text-slate-700 hover:border-green-800 hover:bg-green-100 hover:text-green-800",
    )}
    {...props}
  >
    {props.children}
    <span>{props.value}</span>
  </button>
)

export default Button
