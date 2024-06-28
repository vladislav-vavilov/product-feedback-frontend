export enum Categories {
  UI = 'UI',
  UX = 'UX',
  ENHANCEMENT = 'Enhancement',
  BUG = 'Bug',
  FEATURE = 'Feature'
}

export type User = {
  username: string
  firstName: string
  lastName: string
  avatar: string
}

export type FormDataState = {
  displayName: string
  username: string
  password: string
  passwordConfirm: string
}
