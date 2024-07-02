import { useFormContext } from 'react-hook-form'
import { FormField } from '../FormField'
import { FC } from 'react'

export const Name: FC = () => {
  const { register } = useFormContext()

  return (
    <>
      <FormField
        name='displayName'
        register={register}
        placeholder='Enter your name'
        autoFocus
      />
      <FormField
        name='username'
        register={register}
        placeholder='Enter your username'
      />
    </>
  )
}
