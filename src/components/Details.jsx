import React, { useEffect, useState ,useContext} from "react"
import { Link, useParams } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import axios from "../utils/axios";
import Loading from "./Loading";



function Details() {
    
    const [product, setProduct] = useState(null);
    const {id} = useParams();

    const singleProduct = async () => {
        try {
            const { data } = await axios.get(`products/${id}`)
            setProduct(data);
            console.log("single data",data);

        } catch (error) {
            console.log(error)

        }
    }
    useEffect(() => {
        singleProduct();
    }, [])
    
    return product ? (
        <>



            <div className=" m-auto mt-0 mb-0   justify-center flex p-[10%] w-[70%] h-auto  bg-white ">

                <img className=" object-contain w-[50%] h-[80%]"

                    src={`${product.image}`} alt="image" />
                <div className=" text-wrap object-contain m-[10%]   w-[50%] h-[80%]">
                    <h1 className=" text-2xl font-semibold">{product.title} </h1>
                    <h2 className=" text-red-400 ">{product.price}</h2>
                    <h2 className=" text-red-600 ">{product.category}</h2>
                    <p className=" text-zinc-600 ">{product.description}</p>

                    <div className=" bg-blue-100 flex justify-around mt-[10%] flex-wrap w-[100%] ">
                        <Link className=" w-12 h-6 text-center rounded text-zinc-50 m-1 font-semibold bg-blue-600 ">Edit</Link>
                        <Link className=" w-14 h-6 text-center rounded text-gray-50 m-1 font-semibold bg-red-500 ">delete</Link>
                    </div>
                </div>
                <Link className=" w-20 h-6 text-center border rounded border-blue-500 text-blue-600" to={"/"}>Back</Link>

            </div>

        </>
    ) :(
        <Loading/>
    )
}

export default Details;
