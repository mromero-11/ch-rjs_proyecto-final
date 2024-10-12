import Item from '../Item/Item'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container';

function ItemList ({ items }) {
    return (
        <Container>
            <Row xs={1} md={4} className="g-4">
                {
                    items.map(
                        product => <Item key={product.id} product={product} />
                    )
                }
            </Row>
        </Container>
    )
}

export default ItemList
