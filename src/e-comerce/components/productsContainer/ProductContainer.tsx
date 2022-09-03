import React from 'react'
import { Product } from '../product/Product'
import './ProductContainer.css'

export const ProductContainer = () => {
  return (
    <div className='containerProductProduct'>
        <div className='productsTitle'>
        <h1>Seccion de Productos</h1>
      </div>
      <div className='productFlex'>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
      </div>
    </div>
  )
}
