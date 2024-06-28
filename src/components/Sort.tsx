import { FC } from 'react'
import { Select } from './ui/Select'

const items = [
  { label: 'Most upvotes', value: 'upvotes' },
  { label: 'Least upvotes', value: 'downvotes' },
  { label: 'Newest', value: 'newest' },
  { label: 'Oldest', value: 'oldest' },
  { label: 'Comments', value: 'comments' }
]

export const Sort: FC = () => {
  return <Select items={items} defaultValue={items[0].value} />
}
