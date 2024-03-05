"use client"

import { ComponentPropsWithoutRef } from "react"
import clsx from "clsx"

type Variant = "solid" | "outline" | "text"

interface Props extends ComponentPropsWithoutRef<"button"> {
  variant?: Variant
  children?: React.ReactNode
}

const buttonStyle = {
  base: "block rounded-md px-3 py-2 text-center text-sm font-semibold transition-all",
  variant: {
    solid: {
      disabled:
        "pointer-events-none cursor-not-allowed border border-gray-300 bg-gray-100 text-slate-400",
      normal: "bg-green-600 text-white shadow-sm hover:bg-green-700",
    },
    outline: {
      disabled:
        "pointer-events-none cursor-not-allowed border border-gray-300 bg-gray-100 text-gray-400",
      normal:
        "border border-green-400 bg-white text-slate-700 hover:border-green-800 hover:bg-green-100 hover:text-green-800",
    },
    text: {
      disabled: "pointer-events-none cursor-not-allowed text-gray-400",
      normal: "bg-white text-slate-600 hover:bg-gray-100 hover:text-slate-800",
    },
  },
}
const Button: React.FC<Props> = ({
  variant = "solid",
  className,
  ...props
}) => (
  <button
    type="button"
    {...props}
    className={clsx(
      className,
      buttonStyle.base,
      props.disabled
        ? buttonStyle.variant[variant].disabled
        : buttonStyle.variant[variant].normal,
    )}
  >
    {props.children}
    <span>{props.value}</span>
  </button>
)

export default Button
