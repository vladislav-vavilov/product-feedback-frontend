import { FC } from 'react'
import { User } from '../../types'

interface PostCommentProps {
  author: User
  content: string
}

export const PostComment: FC<PostCommentProps> = ({ author, content }) => {
  const { firstName, lastName, username, avatar } = author

  return (
    <div>
      <div className='flex gap-2'>
        <img src={avatar} className='h-10 w-10 rounded-full' alt={username} />
        <div>
          <h4 className='font-bold leading-none'>
            {firstName} {lastName}
          </h4>
          <span className='leading-none text-gray-600'>@{username}</span>
        </div>
      </div>
      <p className='pl-12 text-gray-600'>{content}</p>
    </div>
  )
}
