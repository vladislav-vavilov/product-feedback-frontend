import { FC } from 'react'
import { Button } from '../components/ui/Button'
import { PostComments } from '../components/Post/PostComments'
import { PostCard } from '../components/Post/PostCard'
import { BackButton } from '../components/BackButton'
import { PostAddComment } from '../components/Post/PostAddComment'

export const Post: FC = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex justify-between gap-4'>
        <BackButton />
        <Button className='active button py-2 text-base'>Edit feedback</Button>
      </div>
      <PostCard
        id='somePostId'
        title='Add tags for solutions'
        description='Culpa consectetur minim pariatur ex ullamco anim. Duis enim ex est duis eu fugiat. Velit nostrud aute aliqua ipsum quis nisi tempor irure do. Cupidatat dolor nisi veniam reprehenderit nulla. Quis id reprehenderit esse officia deserunt anim nostrud magna reprehenderit dolor consectetur. Anim ipsum minim ut enim voluptate pariatur ut excepteur ex fugiat sit sit elit proident. Officia ut ad officia elit eiusmod commodo laboris dolor magna nisi deserunt.
Nostrud sint dolor eu laborum nostrud Lorem mollit aliqua adipisicing. Consectetur enim sunt Lorem amet eiusmod dolor nostrud velit veniam amet. Non eiusmod pariatur pariatur laborum laborum Lorem magna ut ea cupidatat quis. Voluptate reprehenderit sunt est ut magna et do cillum elit enim in. Laborum voluptate et eu fugiat amet tempor enim deserunt. Culpa nostrud laboris elit occaecat fugiat fugiat et aute eiusmod.'
        category='ENHANCEMENT'
        comments={2}
        upvotes={112}
      />
      <PostComments />
      <PostAddComment />
    </div>
  )
}
