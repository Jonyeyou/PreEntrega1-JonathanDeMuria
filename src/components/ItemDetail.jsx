import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card, Heading, CardBody, CardFooter, Stack, Image, Divider, Button, Text} from '@chakra-ui/react'
import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";
import ItemCount from './ItemCount';
import '../css/itemDetail.css'

const ItemDetail = ({ product }) => {
    const { id } = useParams();
    const [producto, setProducto] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        
        const hardware = collection(db, "Hardware");

        getDocs(hardware).then((snapshot) => {
            const docs = snapshot.docs.map((doc) => doc.data())
            setProducto(docs); 
        });
    }, []);
console.log(producto);
    const filterProducts = producto.filter((producto) => producto.id == id)

    return (
    <div>
        {filterProducts.map((product) =>{
            return (
                <>
                <div id='container'>
                <Card maxW='sm'id='card'>
                    <CardBody id='cardBody'>
                        <Image
                            src={product.image}
                            alt='imagen'
                            borderRadius='lg' 
                            width='150px'
                            height='150px'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>{product.name}</Heading>
                            <Text>{product.description}</Text>
                            <Text color='blue.600' fontSize='2xl' id='price'>${product.price}</Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter id='cardFooter'>
                    <ItemCount
                        id={product.id} 
                        stock={product.stock}
                        initial={product.initial}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                    />
                    </CardFooter>
                </Card>
                </div>
                </>
            )
        })
    }
    </div>
    )
}

export default ItemDetail