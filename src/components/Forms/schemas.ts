import { z } from 'zod'

export const emailSchema = z.object({
  email: z.string().email()
})

export const nameSchema = z.object({
  displayName: z.string().min(3),
  username: z.string()
})

export const passwordSchema = z
  .object({
    password: z.string().min(6),
    passwordConfirm: z.string()
  })
  .refine(({ password, passwordConfirm }) => password === passwordConfirm, {
    path: ['passwordConfirm'],
    message: 'Passwords do not match'
  })

type EmailSchemaValue = z.infer<typeof emailSchema>
type NameSchemaValue = z.infer<typeof nameSchema>
type PasswordSchemaValue = z.infer<typeof passwordSchema>
export type Values = EmailSchemaValue & NameSchemaValue & PasswordSchemaValue
