import React from 'react'
//import Home from './pages/Home'
import {Routes, Route} from "react-router-dom"


const AppRouter = () => {
  return (
    <>
    <Header/>
    <Routes>
        {/* <Route path={'/'} element={<Home/>}/>
        <Route path={'/services'} element={<Services/>}/> */}
    </Routes>
    </>
   
  )
}

export default AppRouter