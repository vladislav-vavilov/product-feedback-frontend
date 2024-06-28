import { Dispatch, ReactNode } from 'react'
import { FormDataAction } from './reducers'
import { FormDataState } from '.'

export interface LoginContextValue {
  formData: FormDataState
  dispatch: Dispatch<FormDataAction>
  steps: ReactNode[]
  currentStepIndex: number
  functions: {
    prev: () => void
    next: () => void
  }
}
