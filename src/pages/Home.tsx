import { FC } from 'react'
import { Posts } from '../components/Posts'
import { Header } from '../components/Header'
import { Categories } from '../components/Categories'

export const Home: FC = () => {
  return (
    <div className='mx-auto flex h-full max-w-5xl flex-col gap-4 pt-[10vh]'>
      <Header />
      <div className='flex gap-4'>
        <Categories />
        <Posts />
      </div>
    </div>
  )
}
