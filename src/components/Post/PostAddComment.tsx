import { Button } from '../ui/Button'

export const PostAddComment = () => {
  return (
    <div className='section'>
      <h2 className='text-xl font-bold'>Add comment</h2>
      <form className='flex flex-col gap-4 py-4'>
        <textarea
          className='min-h-24 rounded-md bg-gray-100 px-4 py-2'
          placeholder='Type your comment here'
        />
        <Button className='self-end'>Post comment</Button>
      </form>
    </div>
  )
}
