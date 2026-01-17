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
      <div className="max-w-[1152px] mx-auto px-6 py-8">
      <PageHeading title="Explore Eazy Stickers">
        Hey!! Welcome back
      </PageHeading>
      <ProductListing products={products}></ProductListing>
     </div>
    );
}