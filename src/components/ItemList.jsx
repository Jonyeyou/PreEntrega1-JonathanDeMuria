import Item from './Item'
import '../css/ItemList.css'

const ItemList = ({product}) => {
  console.log(product)
  return (
    <div className='cardContainer'>
      {product.map((p) => {
        return(
          <Item
          id = {p.id}
          name = {p.name}
          description = {p.description}
          stock = {p.stock}
          category = {p.category}
          image = {p.image}
          />
        )
      })
      } 
    </div>
  )
}

export default ItemList