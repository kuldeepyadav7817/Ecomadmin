import React from "react"

import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";

function App() {


  return (
    <>
    

      <div className=" flex w-[100%] h-screen bg-neutral-500  ">


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Details/:id" element={<Details />} />
        </Routes>


      </div>

    </>
  )
}

export default App
