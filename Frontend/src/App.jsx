import Footer from "./Components/footer/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import React from "react";
import { Outlet } from "react-router-dom";
function App() {
 return(
  <React.Fragment>
  <Header/>
  <Outlet/>
  <Footer/>
  </React.Fragment>
 );
}

export default App
