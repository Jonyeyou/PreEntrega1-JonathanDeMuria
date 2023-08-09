import React from 'react'
import { useParams } from 'react-router-dom'
import { Card, Heading, CardBody, CardFooter, Stack, Image, Divider, Button, Text} from '@chakra-ui/react'

const ItemDetail = ({product}) => {
    const { id } = useParams();
    const filterProducts = product.filter((product) => product.id == id)
    return (
    <>
        {filterProducts.map((p) =>{
            return (
                <Card maxW='sm'>
                <CardBody>
                <Image
                    src='#'
                    alt='imagen'
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{p.name}</Heading>
                    <Text>{p.description}</Text>
                    <Text color='blue.600' fontSize='2xl'>{p.price}</Text>
                </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <Button variant='solid' colorScheme='blue'>Agregar al carrito</Button>
                </CardFooter>
                </Card>
            )
        })
        }
        
    </>
    )
}

export default ItemDetail