import { Link } from "react-router-dom";
import "./Product.css";

export interface propsProduct {
  name:string
  price:number
  cantidad:number
  category:string
  localidad:string
  envio:boolean
  foto:string
  id:string
}

export const Product = ({
  name,
  price,
  cantidad,
  category,
  localidad,
  envio,
  foto,
  id
}:propsProduct) => {
  return (
    <div className="containerProduct" key={id}>
      <div className="productGrid">
        <div className="productImg">
          <img
            src={foto}
            alt=""
          />
        </div>
        <div className="productDescripcion">
          <h3>{name}</h3>
          <span>{price}</span>
          <Link to={`/detail/${id}`}>
            <span className="detail">Ver Detalles</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
