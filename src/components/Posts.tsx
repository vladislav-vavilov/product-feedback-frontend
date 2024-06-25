import { FC } from 'react'
import { PostCard } from './Post/PostCard'

export const Posts: FC = () => {
  return (
    <div className='flex basis-3/4 flex-col gap-4'>
      <PostCard
        id='somePostId'
        title='Add tags for solutions'
        description='Culpa consectetur minim pariatur ex ullamco anim. Duis enim ex est duis eu fugiat. Velit nostrud aute aliqua ipsum quis nisi tempor irure do. Cupidatat dolor nisi veniam reprehenderit nulla. Quis id reprehenderit esse officia deserunt anim nostrud magna reprehenderit dolor consectetur. Anim ipsum minim ut enim voluptate pariatur ut excepteur ex fugiat sit sit elit proident. Officia ut ad officia elit eiusmod commodo laboris dolor magna nisi deserunt.
Nostrud sint dolor eu laborum nostrud Lorem mollit aliqua adipisicing. Consectetur enim sunt Lorem amet eiusmod dolor nostrud velit veniam amet. Non eiusmod pariatur pariatur laborum laborum Lorem magna ut ea cupidatat quis. Voluptate reprehenderit sunt est ut magna et do cillum elit enim in. Laborum voluptate et eu fugiat amet tempor enim deserunt. Culpa nostrud laboris elit occaecat fugiat fugiat et aute eiusmod.'
        category='ENHANCEMENT'
        comments={2}
        upvotes={112}
      />
    </div>
  )
}
