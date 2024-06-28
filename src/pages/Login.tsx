import { FC,  useContext,  } from 'react'
import { LoginContext, LoginContextProvider } from '../contexts/LoginContext'
import { LoginContextValue } from '../types/contexts'

export const Login: FC = () => {
  const steps = [<NameForm />, <PasswordForm />, <SuccessMessage />]

  return (
    <div className='rounded-md bg-white p-4 shadow-lg'>
      <LoginContextProvider steps={steps}>
        <LoginCurrentStep />
      </LoginContextProvider>
    </div>
  )
}

const LoginCurrentStep: FC = () => {
  const { steps, currentStepIndex } = useContext(
    LoginContext
  ) as LoginContextValue

  return steps[currentStepIndex]
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
