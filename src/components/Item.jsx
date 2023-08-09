import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Heading, Text, Button} from '@chakra-ui/react'
import '../Item.css'
import { Link } from 'react-router-dom'

const item = ({description, name, id}) => {
  return (
  <div className='card'>
    <Card>
      <CardHeader>
        <Heading size='md'>{name}</Heading>
      </CardHeader>
      <CardBody>
        <Text>{description}</Text>
      </CardBody>
      <CardFooter>
        <Link to={`/item/${id}`}>
          <Button>See More</Button>
        </Link>
      </CardFooter>
    </Card>
  </div>
  )
}

export default item