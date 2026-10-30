import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home'
import About from './Components/About'
import ContactUs from './Components/ContactUs.jsx'
import User from './Components/User.jsx'
import Github, {githubInfoLoader} from './Components/Github.jsx'

const router = createBrowserRouter([
  {
    path :'/',
    element: <Layout/>,
    children : [
      {
        path : "",
        element : <Home/>
      },
      {
        path : "about",
        element : <About/>
      },
      {
        path : "ContactUs",
        element : <ContactUs/>
      },
      {
        path : "user/:userid",
        element : <User/>,
      },
      {
        
        path : "github",
        element : <Github/>,
        loader: githubInfoLoader
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
