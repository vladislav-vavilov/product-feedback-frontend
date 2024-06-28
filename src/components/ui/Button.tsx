import { ButtonHTMLAttributes, FC, MouseEvent, ReactNode } from 'react'
import { cn } from '../../utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  onClick?: (e: MouseEvent) => void
  className?: string
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'base'
}

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  className,
  variant = 'primary',
  size = 'base',
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'button',
        {
          active: variant === 'primary',
          'py-2 text-base': size === 'base'
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
