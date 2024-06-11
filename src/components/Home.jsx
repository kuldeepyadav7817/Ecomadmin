import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Await, Link, useLocation } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";
import axios from "../utils/axios";

function Home() {
const [products] = useContext(ProductContext);
const {search}=useLocation();
const category =decodeURIComponent(search.split("=")[1])
const [filteredProduct,setfilteredProduct]=useState(null)

const getproductscategory=async ()=>{
  try {
    const {data}=await axios.get(`products/category/${category}`);
    setfilteredProduct(data);
  
  } catch (error) {
    console.log(error)
    
  }
}; 
 
useEffect(()=>{
  if(!filteredProduct || category=="undefined") setfilteredProduct(products);
  if(category !="undefined") getproductscategory();
},[category,products]);


  return products ? (
    <>

      <Nav />

      
      <div className="  bg-gray-700  w-[79vw] h-auto overflow-x-auto flex flex-wrap">



        {filteredProduct && filteredProduct.map((p) => (
      <Link key={`${p.id}`} to={`/Details/${p.id}`} className=" ml-5 m-4 mb-20  bg-white shadow rounded w-[20%] h-[25%] flex-wrap flex " >
            <div className=" hover:scale-110  rounded  w-[100%] h-[70%] bg-contain bg-no-repeat bg-center "
               style={{
                  backgroundImage:
                    `url(${p.image})`,
                }}
              ></div>

              <h1 className=" hover:text-blue-800  bg-orange-400 h-[40%] rounded text-center  w-full  text-wrap" >{p.title}</h1>
        
</Link>
))}
  
</div>

     


    </>
  ) :(
    <Loading />
  )

};
export default Home;