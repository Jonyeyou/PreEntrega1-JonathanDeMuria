import { collection, getFirestore, addDoc } from "firebase/firestore"
import { useState, useContext } from "react"
import { CartContext } from "../context/ShoppingCartContext"
import { useParams } from "react-router-dom"
import { filter, Image } from "@chakra-ui/react"
import '../css/sendOrder.css'


const SendOrder = () => {
    
    const {cart, setCart, longitud} = useContext(CartContext)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [num, setNum] = useState("")
    const [orderId, setOrderId] = useState(null)
    
        const { id } = useParams();
        const filterProducts = cart.filter(() => cart.id == id)
    
    const db = getFirestore()

    const handleSubmit = (e) => {
        e.preventDefault()
        addDoc(ordersCollection, order).then(({ id }) => setOrderId(id))
    }

    const ordersCollection = collection(db, "orden")
    
    const subTotal = cart.map(producto => producto.price * producto.quantity);
    const total = subTotal.reduce((total, price) => total + price, 0);

    const order = {
        buyer: {name, email, num},
        items: {cart},
        total: {total}
    }

    return (
<div id="container">
    <div id="containerOrden">
        <div id="containerForm">
            <h1>Terminando su orden</h1>
            <form id="form" onSubmit={handleSubmit}>
                <input className="input" required type="text" placeholder="Nombre y Apellido"
                    onChange={(e) => setName(e.target.value)}
                    />
                <input className="input" required type="email" placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    />
                <input className="input" required type="number" placeholder="Numero de Telefono"
                    onChange={(e) => setNum(e.target.value)}
                    />
                <button id="btnComprar" type="submit">Comprar</button>
            </form>
        </div>
        <p id="textNorden">Numero de orden: {orderId}</p>
        <div id="containerMiniCart">
            {filterProducts.map ((p) => {
                return (
                    <div key={p.id} id="miniCart">
                        <Image src={p.image} 
                        boxSize='50px'
                        borderRadius='full'
                        />
                        <h1 className="h">{p.name}</h1>
                        <h2 className="h">Precio: ${p.price}</h2>
                        <h2 className="h">Subtotal: ${p.subTotal}</h2>
                    </div>
                )
            })}
            <p id="totalMiniCart" >Total: ${total}</p>
        </div>
    </div>
</div>
    )
}

export default SendOrder