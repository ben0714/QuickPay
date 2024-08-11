import classNames from 'classnames'
import { ButtonHTMLAttributes, PropsWithChildren } from 'react'

type Variant = 'default' | 'secondary'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
}

const variantLookup = {
  default: 'bg-[#5384E2] text-[#FBFDFF]',
  secondary: 'border border-black dark:bg-slate-600',
  disabled: 'bg-gray-400 text-gray-700 cursor-not-allowed', // Added this for disabled state
}

export const Button = ({ children, variant, disabled, ...props }: PropsWithChildren<ButtonProps>) => {
  const buttonClassNames = classNames(
    'w-full transform rounded-lg p-3 font-semibold transition duration-500 ease-in-out',
    {
      'hover:scale-105': !disabled,
      'opacity-50 cursor-not-allowed': disabled,
    },
    disabled ? variantLookup['disabled'] : variantLookup[variant || 'default'], // Use the disabled style if disabled
  )

  return (
    <button className={buttonClassNames} disabled={disabled} {...props}>
      {children}
    </button>
  )
}
