import ItemList from './ItemList'
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { getFirestore, collection, getDocs, QuerySnapshot } from "firebase/firestore"

const ItemListContainer = () => {
  const { category } = useParams()
  const [data, setData] = useState([]);
    useEffect(() => {
        const db = getFirestore();
        const techCollection = collection(db, "Hardware");
        getDocs(techCollection).then((QuerySnapshot) => {
            const product = QuerySnapshot.docs.map((doc) =>({
                ...doc.data(),
                id: doc.id,
            }));
            setData(product);
        });
    }, []);
  const productFilter = data.filter((data) => data.category === category)

  return (
    <>
        <ItemList product={productFilter}/>
    </>
  )
}

export default ItemListContainer