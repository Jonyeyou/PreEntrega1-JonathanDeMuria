import { useContext } from "react"
import { CartContext } from "../context/ShoppingCartContext"
import { useParams } from "react-router-dom"
import { Card, Heading, CardBody, CardFooter, Stack, Image, Divider, Button, Text} from '@chakra-ui/react'
const cart = () => {

  const {cart, setCart, longitud} = useContext(CartContext)

  const { id } = useParams();
  const filterProducts = cart.filter(() => cart.id == id)

  const eliminarProduct = (w) => {
    if (w.target.classList.contains('btn-borrar')) {
      const productoId = parseInt(w.target.getAttribute('id'));
      setCart(cart.filter((e) => e.id !== productoId))
  }}

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

  return (
    <>
    {filterProducts.map ((p) =>{

      const subTotal = p.price * p.quenty;
      return (
          <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
          >
          <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }}
          src='#'
          alt='image'
          />
          <Stack>
          <CardBody>
          <Heading size='md'>{p.name}</Heading>
          <Text py='2'>{p.description}</Text>
          </CardBody>
          <Text>${p.price}</Text>
          <Text>{p.quenty}</Text>
          <Text>SubTotal: ${subTotal}</Text>
          <CardFooter>
          <Button variant='solid' colorScheme='blue' className="btn-borrar" id={p.id} onClick={eliminarProduct}>x</Button>
          </CardFooter>
          </Stack>
          </Card>
        
    )
    })}
    </>
  )
}

export default cart