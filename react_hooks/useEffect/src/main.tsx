import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { lazy } from 'react'

const Home = lazy(() => import('./pages/Home.tsx'))
const About = lazy(() => import('./pages/About.tsx'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      }
    ]
  }
]) 

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)
