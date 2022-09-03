import styled from "styled-components"
interface Props{
    open?:boolean
}
export const FondoNavBar = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.452);
  color: white;
  position: absolute;
  @media screen and (max-width:850px){
    width: 100%;
    height: 50px;
    background-color: var(--fondo2);
    color: white;
    position: absolute;
  }
`;
export const NavBarContainerTodo =styled.div`
  width: 100%;
  background-color: var(--fondo2);
  color: white;
  position: absolute;
  @media screen and (max-width:850px){
    width: 100%;
    height: 1000%;
    
    left:${({open}:Props)=> open? '0':'-100%'};
    background-color: rgba(12, 12, 12, 0.912);
    color: white;
    position: absolute;
    transition: .8s ease-in-out;
    
    z-index: 1;
  }
`

export const NavBarGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`;
export const NavBarFlex = styled.div`
  display: flex;
  justify-content: space-around;
  cursor: pointer;
  @media screen and (max-width:850px){
    display:grid;
    grid-template-columns:1fr 1fr ; 
  }
`;
export const NavBarSpan1 = styled.div`
  display: flex;
  margin: 10px;
  align-items: center;
  div {
    display: flex;
    margin-left: 20px;
  }
  span {
    margin-right: 5px;
  }
  @media screen and (max-width:850px){
        position: absolute;
        top: 40px;
        left: 0;
        width: 100%;
        height: 90vh;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        div{  
        display: flex;
        margin-top: 10px;
        }
    }`
export const NavBarTitle = styled.div`
  h1 {
      margin: 5px;
      text-shadow: 8px 0px 9px rgb(255, 0, 0);
    text-decoration: line-through;
    }
    @media screen and (max-width:850px){
        display: none;
        position: absolute; 
        top: -9%;
        left: 40%; 
    }
    `;
export const NavBarTitle1 = styled.div`
  h1 {
    display: none;
    margin: 5px;

  }
  @media screen and (max-width:850px){
    h1{

        display: block;
        position: absolute; 
        position: absolute; 
            top: -9%;
            left: 40%; 
            text-shadow: 8px 0px 9px rgb(255, 0, 0);
    text-decoration: line-through;
    }
  }
`;
export const NavBarSpan2 = styled.div`
  display: flex;
  margin: 10px;
  align-items: center;
  div {
    display: flex;
    margin-left: 20px;
  }
  span {
    margin-right: 5px;
  }
  @media screen and (max-width:850px){
    position: absolute;
        top: 120px;
        left: 0;
        width: 100%;
        height: 20vh;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        div{  
        display: flex;
        margin-top: 20px;
    }
  }
`;
export const NavBarContainerSpan = styled.div`
  width: 50%;
  margin: auto;
`;
export const NavBarFlex2 = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width:850px){
    display: block;
        position: absolute;
        top: 90px;
        left: 20px;
        width: 100%;
        height: 20vh;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        li{
        text-decoration: none;
        list-style: none;
        margin-bottom: 30px;
        font-size: large;
        width: 90%;
        margin-right: 0;
    }

  }
`;
export const HamburgerContainer = styled.div`
display:none;
@media screen and (max-width:850px){
    display: inline;
}
`;
