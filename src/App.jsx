import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./App.css"
import Header from './components/Header'
import Home from './Home'
import Blogs from "./assets/dummyData.json"
import BlogDetails from './BlogDetails'
import Footer from './components/Footer'
const App = () => {
  
  //setting some dummy blogs ata in localstorage
  useEffect(() => {
    const Exist = JSON.parse(localStorage.getItem("react-blogs-data"))?.length > 0;
    if (!Exist) {
      localStorage.setItem("react-blogs-data", JSON.stringify(Blogs))
    }

  } , [])
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route  path='/blog/:bid' element={<BlogDetails />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App