import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { Navigation } from '../e-comerce/router/Navigation'

export const AppRouter = () => {
  return (
    <Routes>

        {/* login y registro */}
        <Route path='/auth/*' element={<AuthRoutes/>} />

        
        	{/* aPlicacion */}
        <Route path='/*' element={<Navigation/>} />

    </Routes>
  )
}
