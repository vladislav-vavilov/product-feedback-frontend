import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { categoriesNav } from '../constants'

export const Categories: FC = () => {
  return (
    <div className='section flex basis-1/4 flex-wrap gap-3'>
      {categoriesNav.map(({ label, path }) => (
        <NavLink key={path} to={path} className='button'>
          {label}
        </NavLink>
      ))}
    </div>
  )
}
