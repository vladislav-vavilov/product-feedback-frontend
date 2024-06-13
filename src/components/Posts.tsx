import { FC } from 'react'
import { PostsItem } from './PostsItem'

export const Posts: FC = () => {
  return (
    <ul className='flex basis-3/4 flex-col gap-4'>
      <PostsItem
        id='somePostId'
        title='Add tags for solutions'
        description='Easier to search for solutions based on a specific stack'
        category='ENHANCEMENT'
        comments={2}
        upvotes={112}
      />
    </ul>
  )
}
