import { FC, PropsWithChildren } from 'react'

export const Button: FC = ({ children }: PropsWithChildren) => {
  return (
    <button className='rounded-md bg-gray-100 px-4 py-1.5 text-sm font-medium text-blue-700 transition-colors duration-200 hover:bg-blue-100 [&.active]:bg-blue-700 [&.active]:text-white'>
      {children}
    </button>
  )
}
