import { useAsyncError } from "react-router-dom";
import axios from "./axios";
import React, { createContext, useEffect, useState } from "react";
export const ProductContext = createContext();

function Context(props) {
    const [products, setProducts] = useState([]);
    
    const getproduct=async()=>{
        try {
            const {data}=await axios('products');
            setProducts(data);
        } catch (error) {
            console.log(error)
        }
    };

    
    useEffect(() => {
        getproduct()
    },[])



    return (
        <ProductContext.Provider value={[products, setProducts]}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default Context;
