import { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore/lite';
import { useParams } from 'react-router-dom';

interface prop{
    category:''| 'hoodie' | 'snaker' | 'pantalon' 
}

export const useCollection = () => {
  const[loading,setLoading]=useState(true)
  const{id}= useParams()
    const [product, setProduct] = useState([])

    
   const useEfectColletion = useEffect(()=>{
        const db =getFirestore()
        const queryColletion=collection(db,'items')
        const queryCollectionFilter= id ? query(queryColletion,where('category','==',id)) : queryColletion
        getDocs(queryCollectionFilter)
        .then(resp=>setProduct(resp.docs.map(prod=>({id:prod.id,...prod.data()})) ))
        .catch(err =>{
          return console.log(err)
        }
         
        )
        .finally(()=>setLoading(false))
      },[id])
     

  return {
    product,
    setProduct,
    useEfectColletion,
    loading
  }
}
