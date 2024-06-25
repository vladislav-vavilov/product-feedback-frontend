import { FC } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

export const BackButton: FC = () => {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => navigate(-1)}
      className='flex items-center gap-1 hover:underline'
    >
      <IoIosArrowBack size={20} className='text-blue-600' />
      <span className='font-bold text-gray-600'>Go back</span>
    </button>
  )
}
