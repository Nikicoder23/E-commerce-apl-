import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider,Route,createRoutesFromElements} from 'react-router-dom'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import Cart from './Components/Cart.jsx'
import Login from './Components/Login.jsx'

const routeDefinitions=createRoutesFromElements(
   <Route path="/" element={<App/>}>
    <Route index element={<Home/>}></Route>
     <Route path="/home" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
       <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
         <Route path="/cart" element={<Cart/>}></Route>
   </Route>

)
const appRouter=createBrowserRouter(routeDefinitions);
// const appRouter=createBrowserRouter([
//   {
//     path:"/",
//     element:<App/>,
//     children: [
//    {
//     index:true,
//     element:<Home/>,
//   },
//   {
//     path:"/home",
//     element:<Home/>,
//   },
//   {
//     path:"/about",
//     element:<About/>,
//   },
//   {
//     path:"/contact",
//     element:<Contact/>,
//   },
//   {
//     path:"/login",
//     element:<Login/>,
//   },
//   {
//     path:"/cart",
//     element:<Cart/>,
//   }
//     ]
//   }
// ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={appRouter}></RouterProvider>
  </StrictMode>,
)
