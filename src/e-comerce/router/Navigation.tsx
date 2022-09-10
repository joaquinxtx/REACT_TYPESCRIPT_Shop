import React, { Component, Suspense } from 'react'
import { BrowserRouter, Navigate, Route,  Routes } from 'react-router-dom'
import { Footer } from '../components/footer/Footer'
import { NavBar } from '../components/navBar/NavBar'
import PageMain from '../pages/PageMain'


import { routes } from './routes'

export const Navigation = () => {
  return (
    <>
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
    
    </>
   

  )
}
