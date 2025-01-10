import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from './Layout.jsx'
import { Children } from 'react'

const router = creatBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    Children: [
      {
        path: "",
        element: <Home />
      },
      {}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
