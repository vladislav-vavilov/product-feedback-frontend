import { FC } from 'react'
import { PostComment } from './PostComment'

export const PostComments: FC = () => {
  return (
    <div className='section'>
      <h2 className='text-xl font-bold'>Comments</h2>
      <div className='flex flex-col gap-4 divide-y-2 divide-gray-600 pt-4'>
        <PostComment
          author={{
            avatar:
              'https://images.unsplash.com/photo-1715714002747-744a5bf0996a?q=80&w=1647&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            firstName: 'Vladislav',
            lastName: 'Vavilov',
            username: 'vnxzm'
          }}
          content='Pariatur culpa duis fugiat officia consequat eu enim excepteur Lorem.'
        />
      </div>
    </div>
  )
}
