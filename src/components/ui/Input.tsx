import { FC, InputHTMLAttributes } from 'react'
import { cn } from '../../utils'
import { FieldValues, UseFormRegister } from 'react-hook-form'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  register: UseFormRegister<FieldValues>
  className?: string
}

export const Input: FC<InputProps> = ({
  name,
  register,
  className,
  ...props
}) => {
  return (
    <input
      {...register(name)}
      className={cn(
        'rounded-md border-2 border-gray-300 px-2 py-1 transition-colors duration-200 focus:border-gray-700',
        className
      )}
      {...props}
    />
  )
}
