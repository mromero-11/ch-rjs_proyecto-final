import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { products } from '../../data/products'
import Card from "react-bootstrap/Card"

function ItemDetailContainer (){
    const [detail, setDetail] = useState()
    const { id } = useParams()

    const getProducts = () => {
        return new Promise((res, rej) => {
            res(products)
        })
    }

    useEffect(() => {
        getProducts()
            .then(res => setDetail(res.find(p => p.id === id)))
    }, [id])

    return (
        <Card>
            <Card.Img variant="top" src={detail?.cover_url} />
            <Card.Body>
                <Card.Title>{detail?.name}</Card.Title>
                <Card.Text>{detail?.description}</Card.Text>
                <Card.Text>{detail?.band}</Card.Text>
                <Card.Text>{detail?.genre}</Card.Text>
                <Card.Text>{detail?.price}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ItemDetailContainer
