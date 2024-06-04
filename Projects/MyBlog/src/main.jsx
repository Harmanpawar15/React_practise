import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/home.jsx'
import About from './components/About/about.jsx'
import Contact from './components/Contact/contact.jsx'
import Github, {githubInfoLoader} from './components/Github/github.jsx'
import Layout from './Layout.jsx'


const router=createBrowserRouter([
  {
    path: '/' ,
    element:<Layout/> ,
    children:[
      {
        path:"",
        element:<Home/>
      },{
        path:'about' ,
        element:<About/>
      },
      {
        path:'contact' ,
        element:<Contact/> 
      },
      {
        loader: githubInfoLoader ,
        path:'github' ,
        element:<Github/> 
      },
    ]
  }


])

// Another way for Paths of router:
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />}>
//       <Route path='' element={<Home />} />
//       <Route path='about' element={<About />} />
//       <Route path='contact' element={<Contact />} />
//       <Route path='user/:userid' element={<User />} />
//       <Route 
//       loader={githubInfoLoader}
//       path='github' 
//       element={<Github />}
//        />
//     </Route>
//   )
// )



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/> 
  </React.StrictMode>,
)
