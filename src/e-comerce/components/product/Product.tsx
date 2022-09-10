import './Product.css'

export const Product = () => {
  return (
    <div className='containerProduct'>
        <div className="productGrid">
            <div className='productImg' >
                <img  src="https://assets.reebok.com/images/w_600,f_auto,q_auto/4b9e4e75e5c143dcb467aba2017d3a14_9366/Remera_Classics_Linear_Negro_FT7340.jpg" alt="" />
            </div>
            <div className='productDescripcion'>
                <h3>Remera givenchy</h3>
                <span>$15.0890</span>
                <span className='detail'>Ver Detalles</span>
            </div>
        </div>

    </div>
  )
}
