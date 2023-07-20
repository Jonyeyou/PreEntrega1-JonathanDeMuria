import React from 'react'
import logoCarrito from '../assets/carrito.png'

const CartWidget = () => {
  return (
    <>
      <div className='carrito'>
        <p className='numero-carrito'>5</p>
        <a href="#">
          <img className='logo-carrito' src={logoCarrito} alt="logo carrito"/>
        </a>
      </div>
    </>
  )
}

export default CartWidget