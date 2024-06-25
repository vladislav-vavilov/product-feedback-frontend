import { FC } from 'react'
import { categories } from '../../constants'
import { IoIosArrowUp } from 'react-icons/io'
import { FiMessageCircle } from 'react-icons/fi'
import { Link, useParams } from 'react-router-dom'
import { cn } from '../../utils'
import { Button } from '../ui/Button'

interface PostCardProps {
  id: string
  title: string
  description: string
  category: keyof typeof categories
  comments: number
  upvotes: number
}

export const PostCard: FC<PostCardProps> = ({
  id,
  title,
  description,
  category,
  comments,
  upvotes
}) => {
  const { postId } = useParams()

  return (
    <div className='section flex items-start gap-4 transition-colors duration-200'>
      <Button variant='secondary' className='flex flex-col items-center p-2.5'>
        <IoIosArrowUp className='text-blue-700' size={20} />
        <span className='font-bold text-black'>{upvotes}</span>
      </Button>
      <div className='flex flex-auto flex-col gap-2'>
        <h2 className='text-xl font-bold'>
          {!postId && (
            <Link to={`/posts/${id}`} className='hover:underline'>
              {title}
            </Link>
          )}
          {postId && title}
        </h2>
        <p className={cn('text-gray-600', !postId && 'line-clamp-2')}>
          {description}
        </p>
        <div className='button'>{categories[category]}</div>
      </div>
      <div className='flex items-center gap-2 self-end text-gray-600'>
        <FiMessageCircle size={20} />
        <span className='text-lg font-bold'>{comments}</span>
      </div>
    </div>
  )
}
