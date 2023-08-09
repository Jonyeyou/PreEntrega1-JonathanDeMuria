import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
  const { category } = useParams()
  const productos = [
    {id: 1 , name: "Placa de Video 3060 Strix", price: 999.00, description: "Descripcion Placa de Video 3060 Strix", stock: 5, category: "placa de video"},
    {id: 2 , name: "Memoria Ram Kingstone", price: 50.50, description: "Descripcion Memoria Ram Kingstone", stock: 15, category: "memorias"},
    {id: 3 , name: "Procesador Intel I3", price: 160.00, description: "Descripcion Procesador Intel I3", stock: 9, category: "procesador"},
    {id: 4 , name: "Procesador Intel I5", price: 230.00, description: "Descripcion Procesador Intel I5", stock: 10, category: "procesador"},
    {id: 5 , name: "Placa de Video 4080 GamingX", price: 1469.00, description: "Descripcion Placa de Video 4080 GamingX", stock: 7, category: "placa de video"},
    {id: 6 , name: "Memoria Ram Kingstone RGB", price: 80.00, description: "Descripcion Memoria Ram Kingstone RGB", stock: 8, category: "memorias"}
  ]
  
  const getProductos = () => {
    return new Promise ((resolve, reject) => {
      if (productos.length === 0) {
        reject(new Error("No hay datos"))
      }
      setTimeout(() => {
        resolve(productos)
      }, 2000)
    })
  }
  
  async function fetchingData () {
    try {
      const datosFetched = await getProductos()
      console.log(datosFetched)
    } catch (error) {
      console.warn(error)
    }
  }
  
  fetchingData()
  
  const productFilter = productos.filter((productos) => productos.category === category)

  return (
    <>
        <ItemList product={productFilter}/>
    </>
  )
}

export default ItemListContainer