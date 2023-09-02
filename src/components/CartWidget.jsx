import { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'
import logoCarrito from '../assets/carrito.png'

const CartWidget = () => {

  const {cart, setCart, longitud} = useContext(CartContext)



  return (
    <>
      <div className='carrito'>
        <p className='numero-carrito'>{longitud}</p>
        <a href="#">
          <img className='logo-carrito' src={logoCarrito} alt="logo carrito"/>
        </a>
      </div>
    </>
  )
}

export default CartWidget