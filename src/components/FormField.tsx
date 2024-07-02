import { FC, InputHTMLAttributes } from 'react'
import { FieldValues, UseFormRegister, useFormContext } from 'react-hook-form'
import { Input } from './ui/Input'
import { cn } from '../utils'

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  register: UseFormRegister<FieldValues>
}

export const FormField: FC<FormFieldProps> = ({ name, register, ...props }) => {
  const {
    formState: { errors }
  } = useFormContext()
  const isError = name in errors

  return (
    <>
      <Input
        name={name}
        register={register}
        className={cn('mt-2', isError && 'border-red-600')}
        {...props}
      />
      {isError && (
        <span className='text-red-600'>{String(errors[name]?.message)}</span>
      )}
    </>
  )
}
