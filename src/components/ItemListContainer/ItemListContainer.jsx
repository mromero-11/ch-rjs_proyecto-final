import { useState, useEffect } from 'react'
import { products } from '../../data/products'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container';
import ItemList from '../ItemList/ItemList';

function ItemListContainer()
{
    const [items, setItems] = useState([])

    const getProducts = () => {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res(products)
            }, 3000)
        })
    }

    useEffect(() => {
        getProducts()
            .then(res => setItems(res))
    }, [])

    return (
        <Container>
            <Row xs={1} md={4} className="g-4">
                <ItemList items={items} />
            </Row>
        </Container>
    )
};

export default ItemListContainer;
