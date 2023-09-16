import { useContext } from "react"
import '../css/cart.css'
import { CartContext } from "../context/ShoppingCartContext"
import { useParams, Link } from "react-router-dom"
import { Card, Heading, CardBody, CardFooter, Stack, Image, Divider, Button, Text, filter} from '@chakra-ui/react'
const cart = () => {

  const {cart, setCart, longitud} = useContext(CartContext)
  console.log(cart)
  const { id } = useParams();
  const filterProducts = cart.filter(() => cart.id == id)

  const eliminarProduct = (w) => {
    if (w.target.classList.contains('btnborrar')) {
      const productoId = parseInt(w.target.getAttribute('id'));
      setCart(cart.filter((e) => e.id !== productoId))
  }}

  const subTotal = cart.map(producto => producto.price * producto.quantity);
  const total = subTotal.reduce((total, price) => total + price, 0);

  const sinProductos = () => {
    if (cart.length < 0 ) {
      
      const container = document.createElement('div');
      container.classList.add('containerCartVacio');

      const fraseCartVacio = document.createElement('h1');
      fraseCartVacio.classList.add('fraseCartVacio');

      const btnRedireccion = document.createElement('button');
      btnRedireccion.classList.add('btnRedireccion');
      btnRedireccion.setAttribute('href', '../app')
    } 
  }
 console.log(filterProducts)
  return (
    <>
    <div id="container">
    <div id="containerCart">
    {filterProducts.map ((p) =>{
      return (
        <div id="containerCardCart">
          <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
          id="cardCart"
          >
          <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }}
          src={p.image}
          alt='image'
          width='100px'
          height='100px'
          />
          <Heading size='md'>{p.name}</Heading>
          <Text py='2'>{p.description}</Text>
          <Text>Precio: ${p.price}</Text>
          <Text>Cantidad: {p.quantity}</Text>
          <Text>SubTotal: ${p.subTotal}</Text>
          <Button variant='solid' className="btnborrar" id={p.id} onClick={eliminarProduct}>x</Button>
          </Card>
        </div>
    )
    })}
      <div id="footerCart">
          <Text id="textTotal">Precio total: ${total}</Text>
          <Link to={'/Terminar-la-Compra'}>
            <button id="btnComprar">Terminar la Compra</button>
          </Link>
      </div>
    </div>
    </div>
    </>
  )
}

export default cart