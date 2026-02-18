import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider,Route,createRoutesFromElements} from 'react-router-dom'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import Cart from './Components/Cart.jsx'
import Login, { loginAction } from './Components/Login.jsx'
import { productsLoader } from './Components/Home.jsx'
import ErrorPage from './Components/ErrorPage.jsx'
import { contactAction } from './Components/Contact.jsx'
import {ToastContainer,Bounce} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import ProductDetails from './Components/ProductDetails.jsx'
import { CartContext } from './store/cart-context.jsx'
import { CartProvider } from './store/cart-context.jsx'
import { AuthProvider } from './store/auth-context.jsx'
import { Profiler } from 'react'
// import { registerAction } from './Components/Register.jsx'
import ProtectedRoute from './Components/ProtectedRoute.jsx'
import Profile from './Components/Profile.jsx'
import Orders from './Components/Orders.jsx'
import AdminOrders from './Components/admin/AdminOrders.jsx'
import Messages from './Components/admin/Messages.jsx'
import Register,{registerAction} from './Components/Register.jsx'
import CheckoutForm from './Components/CheckoutForm.jsx'

const routeDefinitions=createRoutesFromElements(
 <Route path="/" element={<App />} errorElement={<ErrorPage />}>
    <Route index element={<Home />} loader={productsLoader} />
    <Route path="/home" element={<Home />} loader={productsLoader} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} action={contactAction} />
    <Route path="/login" element={<Login />} action={loginAction} />
    <Route path="/register" element={<Register />} action={registerAction} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/products/:productId" element={<ProductDetails />} />
    <Route element={<ProtectedRoute />}>
      <Route path="/checkout" element={<CheckoutForm />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/admin/orders" element={<AdminOrders />} />
      <Route path="/admin/messages" element={<Messages />} />
    </Route>
  </Route>
);

const appRouter = createBrowserRouter(routeDefinitions);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <CartProvider>
        <RouterProvider router={appRouter} />
      </CartProvider>
    </AuthProvider>
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
  </StrictMode>
)
