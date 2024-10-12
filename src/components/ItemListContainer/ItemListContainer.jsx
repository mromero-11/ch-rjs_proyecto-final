import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { getProducts, getProductsByGenre } from '../../firebase/db'
import ItemList from '../ItemList/ItemList';

function ItemListContainer()
{
    const [items, setItems] = useState([])
    const { id } = useParams()

    useEffect(() => {
        id ? getProductsByGenre(id, setItems) : getProducts(setItems)
    }, [id])

    return <ItemList items={items} />
};

export default ItemListContainer
