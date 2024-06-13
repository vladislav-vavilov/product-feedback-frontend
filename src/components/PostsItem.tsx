import { FC } from 'react'
import { categories } from '../constants'
import { IoIosArrowUp } from 'react-icons/io'
import { FiMessageCircle } from 'react-icons/fi'
import { Link } from 'react-router-dom'

interface PostsItemProps {
  id: string
  title: string
  description: string
  category: keyof typeof categories
  comments: number
  upvotes: number
}

export const PostsItem: FC<PostsItemProps> = ({
  id,
  title,
  description,
  category,
  comments,
  upvotes
}) => {
  return (
    <Link to={`/posts/${id}`} className='section flex items-start gap-4'>
      <button className='button p-2.5'>
        <IoIosArrowUp className='text-blue-700' size={20} />
        <span className='font-bold text-black'>{upvotes}</span>
      </button>
      <div className='flex flex-auto flex-col gap-2'>
        <h3 className='text-xl font-bold'>{title}</h3>
        <p className='text-gray-600'>{description}</p>
        <div className='button'>{categories[category]}</div>
      </div>
      <div className='flex items-center gap-2 self-center text-gray-600'>
        <FiMessageCircle size={20} />
        <span className='text-lg font-bold'>{comments}</span>
      </div>
    </Link>
  )
}
