import { FC, ReactNode, createContext, useReducer } from 'react'
import { useMultistage } from '../hooks/useMultistage'
import { LoginContextValue } from '../types/contexts'
import { FormActions, FormDataAction } from '../types/reducers'
import { FormDataState } from '../types'

export const LoginContext = createContext<LoginContextValue | null>(null)

const initialData = {
  displayName: '',
  username: '',
  password: '',
  passwordConfirm: ''
}

const formDataReducer = (state: FormDataState, action: FormDataAction) => {
  switch (action.type) {
    case FormActions.DISPLAY_NAME:
      return { ...state, displayName: action.payload }
    case FormActions.USERNAME:
      return { ...state, username: action.payload }
    case FormActions.PASSWORD:
      return { ...state, password: action.payload }
    case FormActions.PASSWORD_CONFIRM:
      return { ...state, passwordConfirm: action.payload }
  }
}

interface LoginContextProviderProps {
  children: ReactNode
  steps: ReactNode[]
}

export const LoginContextProvider: FC<LoginContextProviderProps> = ({
  children,
  steps
}) => {
  const [formData, dispatch] = useReducer(formDataReducer, initialData)
  const { currentStepIndex, functions } = useMultistage(steps)

  const value = { formData, dispatch, steps, currentStepIndex, functions }

  return <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
}
