import { Card, Heading, CardBody, CardFooter, Stack, Image, Divider, Button, Text} from '@chakra-ui/react'
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/ShoppingCartContext';

const ItemCount = ({stock, id, initial, price, name}) => {

    const {cart, setCart} = useContext(CartContext)
    const [quenty, setQuenty] = useState(initial)

    const sumarQuenty = () =>{
        if (quenty < stock) {
            setQuenty(quenty +1) 
        }
    }

    const restarQuenty = () => {
        if (quenty > initial) {
            setQuenty(quenty -1)
        }
    }
    
    

    const onAdd = () => {
        const producto = {id, name, price, quenty}
            setCart([...cart, producto])
    }
    
    return (
    <>
        <Button onClick={restarQuenty}>-</Button>
        <Text>{quenty}</Text>
        <Button onClick={sumarQuenty}>+</Button>
        <Button variant='solid' colorScheme='blue' onClick={onAdd}>Agregar al carrito</Button>
    </>
    )
}

export default ItemCount