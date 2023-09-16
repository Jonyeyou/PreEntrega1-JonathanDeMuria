import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { getFirestore, collection, getDocs, QuerySnapshot } from "firebase/firestore"

const ItemDetailContainer = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const db = getFirestore();
        const techCollection = collection(db, "Hardware");
        getDocs(techCollection).then((QuerySnapshot) => {
            const product = QuerySnapshot.docs.map((doc) =>({
                ...doc.data(),
                id: doc.id,
            }));
            console.log(product);
            setData(product);
        });
    }, []);
    console.log(data)

    return (
    <ItemDetail product={data}/>
    )
}

export default ItemDetailContainer