import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Services from './Pages/Services'

const router = createBrowserRouter([
    {
        path: `/`,
        element: <Layout />,
        children: [
            {
                path: `/`,
                element: <Home />,
            },
            {
                path: `about`,
                element: <About />
            },
            {
                path: `services`,
                element: <Services />,
            }, 
            {
                path: `contact`,
                element: <Contact />,
            },
        ]
    }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
