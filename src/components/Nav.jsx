import React, { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { Link } from "react-router-dom";

function Nav() {

  const [products] = useContext(ProductContext);
  let distinct_category = products && products.reduce((acv, cv) => [...acv, cv.category], []);
  distinct_category = [...new Set(distinct_category)];

  return (
    <>
      <nav className=" overflow-hidden  sticky  text-center text-wrap w-[20%] h-screen bg-slate-100">
        <a href="/Create" className=" rounded bg-blue-600  mt-3 px-4 text-zinc-50 inline-block text-center text-[90%]">Add New Product</a>
        <div className=" my-2 flex justify-center w-[100%] h-[1px] bg-blue-400"></div>
    <Link className=" mr-[10rem] font-bold text-blue-800 rounded mt-3 w-12 h-6 text-center" to="/">Home</Link>
        <div className=" text-zinc-800 mt-2 text-wrap font-bold text-start text-sm px-1">Catagory Filter</div>
        <div className="grid">

          
           {distinct_category.map((c,i)=>
            <Link key={i} to={`/?category/=${c}`}
            className=" flex items-center mb-3">
             <span className=" bg-gray-900 mr-2 rounded-full h-[15px] w-[15px]"></span>{" "}
             {c}
           </Link>)}
         



        </div>

      </nav>
    </>
  )
}
export default Nav;