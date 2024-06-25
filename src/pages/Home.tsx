import { FC } from 'react'
import { Posts } from '../components/Posts'
import { Header } from '../components/Header'
import { Categories } from '../components/Categories'

export const Home: FC = () => {
  return (
    <div className='flex flex-col gap-4'>
      <Header />
      <div className='flex gap-4'>
        <Categories />
        <Posts />
      </div>
    </div>
  )
}
