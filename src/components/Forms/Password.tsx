import { useFormContext } from 'react-hook-form'
import { FormField } from '../FormField'
import { FC } from 'react'

export const Password: FC = () => {
  const { register } = useFormContext()

  return (
    <>
      <FormField
        type='password'
        name='password'
        register={register}
        placeholder='Enter your password'
        autoFocus
      />
      <FormField
        type='password'
        name='passwordConfirm'
        register={register}
        placeholder='Repeat your password'
      />
    </>
  )
}
