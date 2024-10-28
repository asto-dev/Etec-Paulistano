import { createBrowserRouter } from 'react-router-dom'

import { Home } from './pages/Home'
import { Courses } from './pages/Courses'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/cursos',
    element: <Courses />,
  },
])