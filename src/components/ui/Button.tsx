import { FC, ReactNode } from 'react'
import { cn } from '../../utils'

interface ButtonProps {
  children: ReactNode
  className?: string
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'base'
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'base'
}) => {
  return (
    <button
      className={cn(
        'button',
        {
          active: variant === 'primary',
          'py-2 text-base': size === 'base'
        },
        className
      )}
    >
      {children}
    </button>
  )
}
