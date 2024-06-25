import { FC } from 'react'
import { Sort } from './Sort'
import { Button } from './ui/Button'

export const Header: FC = () => {
  return (
    <header className='flex gap-4'>
      <div className='section flex basis-1/4 flex-col'>
        <span className='whitespace-nowrap text-3xl font-medium leading-none'>
          Feedback board
        </span>
        <span className='leading-none text-gray-700'>Your business name</span>
      </div>
      <div className='section flex flex-auto basis-3/4 items-center justify-between gap-4'>
        <Sort />
        <Button>Add feedback</Button>
      </div>
    </header>
  )
}
