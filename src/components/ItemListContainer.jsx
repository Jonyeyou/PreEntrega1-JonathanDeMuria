import ItemList from './ItemList'
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { getFirestore, collection, getDocs, QuerySnapshot, query, where } from "firebase/firestore"

const ItemListContainer = () => {
  const { category } = useParams()
  const [data, setData] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const collectionRef = category
          ? query(collection(db, "Hardware"), where("category", "==", category))
          : collection(db, "Hardware");

        getDocs(collectionRef)
          .then((response) => {
            const productosCategory = response.docs.map((doc) => {
              const data = doc.data();
              return { id: doc.id, ...data};
            });
            setData(productosCategory);
          })
          .catch((error) => {
            console.log(error);
          })
    }, [category]);

  return (
    <>
        <ItemList product={data}/>
    </>
  )
}

export default ItemListContainer