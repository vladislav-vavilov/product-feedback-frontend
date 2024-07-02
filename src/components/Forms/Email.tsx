import { useFormContext } from 'react-hook-form'
import { FormField } from '../FormField'
import { FC } from 'react'

export const Email: FC = () => {
  const { register } = useFormContext()
  return (
    <FormField
      name='email'
      register={register}
      placeholder='Enter your email'
    />
  )
}
