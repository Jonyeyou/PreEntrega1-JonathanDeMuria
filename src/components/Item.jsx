import React from 'react'
import {Card, CardHeader, Image, CardBody, CardFooter, Heading, Text, Button} from '@chakra-ui/react'
import '../css/Item.css'
import { Link } from 'react-router-dom'

const item = ({description, name, id, image}) => {
  return (
  <div>
    <Card id='card'>
      <CardHeader>
        <Image src={`${image}`} width="300px" height="300px"/>
        <Heading size='md' id='cardName'>{name}</Heading>
      </CardHeader>
      <CardBody>
        <Text id='cardDescription'>{description}</Text>
      </CardBody>
      <CardFooter id='divBtn'>
        <Link to={`/item/${id}`}>
          <Button id='cardBtn'>Ver Mas</Button>
        </Link>
      </CardFooter>
    </Card>
  </div>
  )
}

export default item