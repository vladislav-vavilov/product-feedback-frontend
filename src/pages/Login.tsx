import { FC } from 'react'
import { Form } from '../components/Form'
import {
  emailSchema,
  nameSchema,
  passwordSchema,
  type Values
} from '../components/Forms/schemas'
import { Email } from '../components/Forms/Email'
import { Password } from '../components/Forms/Password'
import { Name } from '../components/Forms/Name'

const steps = [
  {
    annotation: 'Enter your email below to create an account',
    schema: emailSchema,
    node: <Email />
  },
  {
    annotation: 'Enter your name and an username below',
    schema: nameSchema,
    node: <Name />
  },
  {
    annotation: 'Enter your password and password confirmation below',
    schema: passwordSchema,
    node: <Password />
  }
]

export const Login: FC = () => {
  function onSubmit(values: Values) {
    console.log('login', values)
  }

  return <Form steps={steps} submitHandler={onSubmit} />
}
