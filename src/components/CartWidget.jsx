import { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'
import logoCarrito from '../assets/carrito.png'
import { Link } from 'react-router-dom'
import { Image, Text } from '@chakra-ui/react'

const CartWidget = () => {

  const {cart, setCart, longitud} = useContext(CartContext)



  return (
    <>
      <div className='carrito'>
        <p className='numero-carrito'>{longitud}</p>
        <Link to={"/cart"}>
        <Text href="#">
          <Image className='logo-carrito' src={logoCarrito} alt="logo carrito"/>
        </Text>
        </Link>
      </div>
    </>
  )
}

export default CartWidget