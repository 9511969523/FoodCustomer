import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import MyoffCanva from './MyoffCanva'
import AddFood from './pages/AddFood'
import Dashbord from './pages/Dashbord'
import AllFood from './pages/AllFood'
import Order from './pages/Order'
import CustomerList from './pages/CustomerList'

const CanvaRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <MyoffCanva />
                <Routes>
                    <Route path='/' element={<Dashbord />} />
                    <Route path='/addfood' element={< AddFood />} />
                    <Route path='/allfood' element={<AllFood />} />
                    <Route path='/order' element={<Order />} />
                    <Route path='/customerlist' element={<CustomerList />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default CanvaRoutes
