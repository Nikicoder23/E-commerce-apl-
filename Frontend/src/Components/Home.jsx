import PageHeading from "./PageHeading";
import ProductListing from "./ProductListing";
import apiClient from "../api/apiClient";

import { useState,useEffect } from "react";

export default function Home(){
  const [products,setProducts]=useState([]);

  useEffect(()=>{
    fetchProduct();
  },[]);

  const fetchProduct= async()=>{
    const response =await apiClient.get("/products"); 
    setProducts(response.data);
  }
    return(
      <>
      <PageHeading>
        Hey!! Welcome back
      </PageHeading>
      <ProductListing products={products}></ProductListing>
     </>
    );
}