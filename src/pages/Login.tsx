import { FC } from 'react'
import { useMultistage } from '../hooks/useMultistage'

export const Login: FC = () => {
  const {
    currentStepIndex,
    functions: { prev, next }
  } = useMultistage([<NameForm />, <PasswordForm />, <SuccessMessage />])

  return <div>Login</div>
}

const NameForm: FC = () => {
  return <div>NameForm</div>
}

const PasswordForm: FC = () => {
  return <div>PasswordForm</div>
}

const SuccessMessage: FC = () => {
  return <div>SuccessMessage</div>
}
