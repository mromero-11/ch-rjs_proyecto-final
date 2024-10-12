import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { getProduct } from '../../firebase/db'
import ItemDetail from '../ItemDetail/ItemDetail'

function ItemDetailContainer (){
    const [detail, setDetail] = useState()
    const { id } = useParams()

    useEffect(() => {
        getProduct(id, setDetail)
    }, [id])

    return (
        <ItemDetail key={detail?.id} detail={detail} />
    )
}

export default ItemDetailContainer
