
import { NavLink } from 'react-router-dom'
import { routes } from '../../../router/routes'
import'./NavBar.css'
export const NavBar = () => {
  return (
    <div className="fondoNavBar">

        <div className="navBarGrid">
            <div className='navBarFlex'>
                <div className='navBarSpan'>
                    <span>hola</span>
                    <span>hola</span>
                    <span>hola</span>
                </div>
                <div className='navBarTitle'>
                    <h1>Emperador</h1>
                </div>
                <div className='navBarSpan'>
                    <span>hola</span>
                    <span>hola</span>
                    <span>hola</span>
                </div>
            </div>
            <div className='navBarContainerSpan'>
                <div className='navBarFlex2'>  
                        {
                            routes.map(route =>(
                                <li key={route.to}>
                                    <NavLink className='link' to={route.to}>
                                     {route.name}
                                    </NavLink>
                                </li>                         
                         ))
                        }   
                </div>
            </div>

        </div>
    </div>
  )
}
