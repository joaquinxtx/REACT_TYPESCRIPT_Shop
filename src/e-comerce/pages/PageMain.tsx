import React from 'react'
import { Header } from '../components/header/Header'
import { NavBar } from '../components/navBar/NavBar'
import { SectionGrid } from '../components/sectionGrid/SectionGrid'

export const PageMain = () => {
  return (
  <>
   
    <Header title='Supreme' subTitle='El estilo Siempre con vos'/>
    <SectionGrid/>
  </>
  )
}
export default PageMain