
import { Navigate, Route,  Routes } from 'react-router-dom'
import { Footer } from '../components/footer/Footer'
import { NavBar } from '../components/navBar/NavBar'




import { routes } from './routes'
import { DetailContainer } from '../components/DetailContainer/DetailContainer';

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
            <Route path="/detail/:detailId" element ={<DetailContainer/>}/>
            <Route path='/*' element={ <Navigate to={routes[0].to} replace /> } />
        </Routes>

        <Footer/>
    
    </>
   

  )
}
