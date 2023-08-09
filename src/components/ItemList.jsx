import Item from './Item'
import '../ItemList.css'

const ItemList = ({product}) => {
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
          />
        )
      })
      } 
    </div>
  )
}

export default ItemList