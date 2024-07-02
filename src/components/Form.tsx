import { FC, ReactNode } from 'react'
import { Button } from '../components/ui/Button'
import { FormProvider, useForm } from 'react-hook-form'
import { useMultistage } from '../hooks/useMultistage'
import { ZodSchema, z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { type Values } from './Forms/schemas'

type Step = {
  annotation: string
  schema: ZodSchema
  node: ReactNode
}

interface FormProps {
  steps: Step[]
  submitHandler: (values: Values) => void
}

export const Form: FC<FormProps> = ({ steps, submitHandler }) => {
  const stepNodes = steps.map((step) => step.node)
  const {
    currentStepIndex,
    isFirst,
    isLast,
    functions: { prev, next }
  } = useMultistage(stepNodes)

  const currentAnnotation = steps[currentStepIndex].annotation
  const currentSchema = steps[currentStepIndex].schema
  const currentStepNode = steps[currentStepIndex].node

  const form = useForm<z.infer<typeof currentSchema>>({
    resolver: zodResolver(currentSchema)
  })

  const onSubmit = () => {
    if (isLast) {
      const values = form.getValues() as Values
      submitHandler(values)
    } else {
      next()
    }
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
        <div className='flex w-full max-w-sm flex-auto flex-col items-center justify-center self-center'>
          <h1 className='text-center text-2xl font-bold'>Create an account</h1>
          <p className='text-center text-gray-600'>{currentAnnotation}</p>
          <div className='flex w-full flex-col'>
            <FormProvider {...form}>{currentStepNode}</FormProvider>
          </div>
        </div>
      </form>
    </div>
  )
}
