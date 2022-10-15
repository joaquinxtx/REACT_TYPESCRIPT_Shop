import { Product, propsProduct } from '../product/Product';


export const ItemList = ({products}:any) => {
  return (
    products.map((prod:any)=><Product
    key={prod.id}
    id={prod.id}
    foto={prod.foto}
    category={prod.category}
    cantidad={prod.cantidad}
    price={prod.price}
    name={prod.name}
    envio={prod.envio}
    localidad={prod.localidad}/> 
    ) 

  )
}
