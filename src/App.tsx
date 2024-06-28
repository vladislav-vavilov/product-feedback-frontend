import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Settings } from './pages/Settings'
import { Post } from './pages/Post'
import { Login } from './pages/Login'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route path=':category' element={<Home />} />
      </Route>
      <Route path='/posts'>
        <Route path=':postId' element={<Post />} />
      </Route>
      <Route path='/settings' element={<Settings />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default App
