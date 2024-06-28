export enum FormActions {
  DISPLAY_NAME = 'DISPLAY_NAME',
  USERNAME = 'USERNAME',
  PASSWORD = 'PASSWORD',
  PASSWORD_CONFIRM = 'PASSWORD_CONFIRM'
}

export type FormDataAction = {
  type: FormActions
  payload: string
}
