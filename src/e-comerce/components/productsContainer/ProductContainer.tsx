
import './ProductContainer.css'
import { useEffect, useState } from 'react';
import { collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore/lite';
import { ItemList } from '../itemlist/ItemList';
import { useParams } from 'react-router-dom';
import { useCollection } from '../../../hooks/useCollection';
import { Loading } from '../loading/Loading';

export const ProductContainer = () => {
 
  const{product,loading}=useCollection()
  

  // ---Detail---
  // useEffect(() => {
  //  const db=getFirestore()
  //  const queryProduct = doc(db,'items','N9Mk3C9eehZ4GUZSv4mC')
  //  getDoc(queryProduct)
  //  .then(resp=>setProduct({id:resp.id,...resp.data()}))

  
   
  // }, [])
  // console.log(product);
 
  

  return (
    <div className='containerProductProduct'>
        <div className='productsTitle'>
        <h1>Seccion de Productos</h1>
      </div>
      <div className='productFlex'>
        {
          loading? <Loading/>:<ItemList products={product}/>
        }
       
            
            
      </div>
    </div>
  )
}
