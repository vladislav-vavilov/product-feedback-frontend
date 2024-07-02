import { FC } from 'react'
import { Email } from '../components/Forms/Email'
import { Password } from '../components/Forms/Password'
import { emailSchema, passwordSchema } from '../components/Forms/schemas'

const steps = [
  {
    annotation: 'Enter your email below to create an account',
    formSchema: emailSchema,
    node: <Email />
  },
  {
    annotation: 'Enter your password and password confirmation below',
    formSchema: passwordSchema,
    node: <Password />
  }
]

export const Register: FC = () => {
  const onSubmit = (values) => {
    console.log(values)
  }

  return <Form steps={steps} onSubmit={onSubmit} />
}
