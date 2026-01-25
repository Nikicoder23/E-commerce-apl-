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
import { productsLoader } from './Components/Home.jsx'
import ErrorPage from './Components/ErrorPage.jsx'
import { contactAction } from './Components/Contact.jsx'
import {ToastContainer,Bounce} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import ProductDetails from './Components/ProductDetails.jsx'

const routeDefinitions=createRoutesFromElements(
   <Route path="/" element={<App/>} errorElement={<ErrorPage/>}>
    <Route index element={<Home/>} loader={productsLoader}></Route>
     <Route path="/home" element={<Home/>} loader={productsLoader}></Route>
      <Route path="/about" element={<About/>}></Route>
       <Route path="/contact" element={<Contact/>} action={contactAction}></Route>
        <Route path="/login" element={<Login/>}></Route>
         <Route path="/cart" element={<Cart/>}></Route>
         <Route path="/products/:id" element={<ProductDetails/>}></Route>

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
    <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      draggable
      pauseOnHover
      theme={localStorage.getItem("theme") === "dark" ? "dark" : "light"}
      transition={Bounce}
    />
  </StrictMode>,
)
