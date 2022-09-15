import { useState } from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../../router/routes";
import {FondoNavBar,NavBarContainerTodo, HamburgerContainer, NavBarContainerSpan, NavBarFlex, NavBarFlex2, NavBarGrid, NavBarSpan1, NavBarSpan2, NavBarTitle, NavBarTitle1} from "./NavBarStyles"
import { AiOutlineHome } from "react-icons/ai";
import { GiExitDoor } from "react-icons/gi";
import { BiDownArrow } from "react-icons/bi";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { AiTwotonePhone } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import { RiShoppingCartLine } from "react-icons/ri";
import { BsSearch } from "react-icons/bs";
import Hamburger from "hamburger-react";

import "./NavBar.css";

import { AppDispatch, useAppDispatch } from "../../../store/store";
import { StartLogout } from "../../../store/auth/thunks";
import { useAppSelector } from "../../../hooks/hooks";


export const NavBar = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const dispatch:AppDispatch = useAppDispatch();
    const{email}=useAppSelector(state=> state.auth)
    const onLogout =()=>{
      dispatch(StartLogout());
    }
  return (

    <>
    <FondoNavBar>
      <NavBarFlex>

          <HamburgerContainer onClick={()=>setShowMobileMenu(!showMobileMenu)}>
            <Hamburger duration={0.8} />
          </HamburgerContainer>
          <NavBarTitle1>
            <h1>Supreme</h1>
          </NavBarTitle1>
      </NavBarFlex>
    <NavBarContainerTodo open={showMobileMenu}>
      <NavBarGrid>
        <NavBarFlex>
            <NavBarSpan1>
            <div className="email">
               <BsFillPersonCheckFill />
               <span className="email">{email}</span>
             </div>
             <div className="email">
               <AiTwotonePhone />
               <span className="email">+54 2966 217528</span>
             </div>
            </NavBarSpan1>
            <NavBarTitle>
              <h1>Supreme</h1>
            </NavBarTitle>
            <NavBarSpan2>
            <div>
               <AiOutlineHome className="iconNav" />
             </div>
             <div>
               <FiHeart className="iconNav" />
             </div>
             <div>
               <RiShoppingCartLine className="iconNav" />
             </div>
             <div>
               <BsSearch className="iconNav" />
             </div>
             <div onClick={onLogout}>
               <GiExitDoor className="iconNav iconNavExit" />
             </div>
            </NavBarSpan2>
        </NavBarFlex>
        <NavBarContainerSpan>
          <NavBarFlex2>
            <div className="category">
              <p>Category</p>
              <BiDownArrow/>
            </div>
          {routes.map((route) => (
               <li className="liFlex" key={route.to}>
                 <NavLink className="link" to={route.to}>
                   {route.name}
                 </NavLink>
               </li>
             ))}
          </NavBarFlex2>
        </NavBarContainerSpan>
      </NavBarGrid>
    </NavBarContainerTodo>

    </FondoNavBar>
    
    
    </>

    
  );
};
