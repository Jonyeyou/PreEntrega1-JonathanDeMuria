import { Card, Heading, CardBody, CardFooter, Stack, Image, Divider, Button, Text} from '@chakra-ui/react'
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/ShoppingCartContext';
import '../css/ItemCount.css'


const ItemCount = ({stock, id, initial, price, name, image}) => {

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
        setCart((currItems) => {
            const isItemFound = currItems.find((item) => item.id === id);
            if (isItemFound) {
                return currItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + quenty };
                    } else {
                        return item;
                    }
                });
            } else {
                return [ ...currItems, { id, quantity: quenty, price, name, subTotal: quenty * price, image}];
            }
        });
    }
    
    return (
    <>
    <div id='containerCount'>
        <Button onClick={restarQuenty} id='restarBtn'>-</Button>
        <Text> {quenty} </Text>
        <Button onClick={sumarQuenty} id='sumarBtn'>+</Button>
        <Button variant='solid' colorScheme='blue' onClick={onAdd} id='addBtn'>Agregar al carrito</Button>
    </div>
    </>
    )
}

export default ItemCount