import { FC } from 'react'
import ReactSelect from 'react-select'

const options = [
  { label: 'Most upvotes', value: 'upvotes' },
  { label: 'Least upvotes', value: 'downvotes' },
  { label: 'Newest', value: 'newest' },
  { label: 'Oldest', value: 'oldest' },
  { label: 'Comments', value: 'comments' }
]

export const Sort: FC = () => {
  return (
    <ReactSelect
      options={options}
      defaultValue={options[0]}
      classNames={{
        control: () => 'min-w-36',
        menuList: () => 'p-1',
        option: () => 'rounded-md'
      }}
    />
  )
}
