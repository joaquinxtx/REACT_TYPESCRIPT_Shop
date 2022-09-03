import React, { Component, Suspense } from 'react'
import { BrowserRouter, Navigate, Route,  Routes } from 'react-router-dom'
import { Footer } from '../e-comerce/components/footer/Footer'
import { NavBar } from '../e-comerce/components/navBar/NavBar'
import PageMain from '../e-comerce/pages/PageMain'


import { routes } from './routes'

export const Navigation = () => {
  return (
   <Suspense fallback={null}>
    <BrowserRouter>
            <NavBar/>
    
            <Routes>
                {
                    routes.map(route=>(
                        <Route
                        key={route.to}
                        path={route.path}
                        element={<route.Component/>} />
                    ))
                }
                <Route path='/*' element={ <Navigate to={routes[0].to} replace /> } />
            </Routes>

            <Footer/>
    </BrowserRouter>
   </Suspense>
  )
}
