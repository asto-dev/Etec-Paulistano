import { createBrowserRouter } from 'react-router-dom'

import { Home } from './pages/Home'
import { Courses } from './pages/Courses'
import { StudentArea } from './pages/StudentArea'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/cursos/:cursosId',
    element: <Courses />,
  },
  {
    path: '/area-aluno',
    element: <StudentArea />,
  },
])