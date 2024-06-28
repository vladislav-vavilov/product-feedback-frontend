import { FC } from 'react'
import { Input } from '../components/ui/Input'
import { Button } from '../components/ui/Button'
import { FormProvider, useForm, useFormContext } from 'react-hook-form'
import { useMultistage } from '../hooks/useMultistage'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'

const Email: FC = () => {
  const { register } = useFormContext()
  return (
    <Input name='email' register={register} placeholder='Enter your email' />
  )
}

const Name: FC = () => {
  const { register } = useFormContext()

  return (
    <>
      <Input
        name='displayName'
        register={register}
        placeholder='Enter your name'
        autoFocus
      />
      <Input
        name='username'
        register={register}
        placeholder='Enter your username'
      />
    </>
  )
}

const Password: FC = () => {
  const { register } = useFormContext()

  return (
    <>
      <Input
        type='password'
        name='password'
        register={register}
        placeholder='Enter your password'
        autoFocus
      />
      <Input
        type='password'
        name='passwordConfirm'
        register={register}
        placeholder='Repeat your password'
      />
    </>
  )
}

const emailSchema = z.object({
  email: z.string().email()
})

const nameSchema = z.object({
  displayName: z.string().min(3),
  username: z.string()
})

const passwordSchema = z.object({
  password: z.string().min(6),
  passwordConfirm: z.string()
})

const steps = [
  {
    title: 'Enter your email',
    formSchema: emailSchema,
    node: <Email />
  },
  {
    title: 'Enter your name',
    formSchema: nameSchema,
    node: <Name />
  },
  {
    title: 'Enter your password',
    formSchema: passwordSchema,
    node: <Password />
  }
]

const stepNodes = steps.map((step) => step.node)
export const Login: FC = () => {
  const {
    currentStepIndex,
    isFirst,
    isLast,
    functions: { prev, next }
  } = useMultistage(stepNodes)

  const currentTitle = steps[currentStepIndex].title
  const currentSchema = steps[currentStepIndex].formSchema
  const currentStepNode = steps[currentStepIndex].node

  const form = useForm<z.infer<typeof currentSchema>>({
    resolver: zodResolver(currentSchema)
  })

  const navigate = useNavigate()

  const onSubmit = (values: z.infer<typeof currentSchema>) => {
    console.log(values)

    if (isLast) navigate('/')
    else next()
  }

  return (
    <div className='flex h-full max-h-[680px] flex-auto self-center overflow-hidden rounded-md bg-white shadow-lg'>
      <div className='basis-1/2'>
        <img
          src='https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3R8ZW58MHx8MHx8fDA%3D'
          className='h-full object-cover'
        />
      </div>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        noValidate
        className='flex h-full w-full basis-1/2 flex-col p-4'
      >
        <div className='flex items-center gap-2 self-end'>
          {!isFirst && (
            <Button type='button' variant='secondary' onClick={prev}>
              Back
            </Button>
          )}
          <Button type='submit'>{isLast ? 'Finish' : 'Next'}</Button>
        </div>
        <div className='flex w-full flex-auto flex-col items-center justify-center gap-2 self-center'>
          <h1 className='text-center text-2xl font-bold'>{currentTitle}</h1>
          <div className='flex w-full max-w-sm flex-col gap-2'>
            <FormProvider {...form}>{currentStepNode}</FormProvider>
          </div>
        </div>
      </form>
    </div>
  )
}
