import clsx from "clsx"
import { HTMLProps } from "react"

interface Props extends HTMLProps<HTMLInputElement> {
  containerClassName?: string
}

const Textbox: React.FC<Props> = ({
  containerClassName,
  className,
  ...props
}) => {
  return (
    <div className={containerClassName}>
      {props.label && (
        <label
          htmlFor={props.id}
          className="ml-1.5 block text-sm font-medium leading-6 text-gray-900"
        >
          {props.label}
        </label>
      )}
      <div className={clsx(props.label && "mt-1.5")}>
        <input
          className={clsx(
            className,
            `
             block
             w-full 
             rounded-md 
             border-0 
             py-1.5 
             text-sm 
             leading-6 
             text-gray-900 
             shadow-sm 
             ring-1 
             ring-inset 
             ring-gray-300 
             placeholder:text-gray-400 
             focus:ring-2 
             focus:ring-inset 
             focus:ring-green-600
            `,
          )}
          {...props}
        />
      </div>
    </div>
  )
}

export default Textbox
