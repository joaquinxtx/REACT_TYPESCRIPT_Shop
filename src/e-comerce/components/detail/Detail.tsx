import { Link } from 'react-router-dom'
import { Counter } from '../counter/Counter';

import './Detail.css'



export const Detail = ({product}:any) => {
  const{ name,
    price,
    cantidad,
    category,
    localidad,
    envio,
    foto,
    id} =product

    
    console.log(name, 'holaproduct')
    

  return (
    <div className='containerProductDetail' >
        <div className='detailTitle'>
            <h1>Detalles del Productosss</h1>
        </div>
        <div className='containerDetail'>
            <div className="detaitGrid">
                <div className='detailImg' >
                    <img  src={foto} alt="" />
                </div>
                <div className='detailDescripcion'>
                    <h3 >{name}</h3>
                    <span>{localidad} 📌</span>
                    {
                        envio? <span>Gratis 🚛</span> : <span>700$</span>
                    }

                    
                    <span className='price'>{price}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolore nisi eveniet ex d</p> 
                    <Counter />
                    <Link to='/cart' >
                        <button className='buttonCart'>
                            Ir al carrito
                        </button>
                    </Link>              
                </div>
            </div>

        </div>
      
    </div>
  )
}
