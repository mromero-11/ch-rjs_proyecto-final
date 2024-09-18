import { Link } from 'react-router-dom';
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Button from 'react-bootstrap/Button'

function Item ({ product }){
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={product.cover_url} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.price}</Card.Text>
                </Card.Body>
                <Button variant="dark" as={Link} to={`/product/${product.id}`}>Ver detalles</Button>
            </Card>
        </Col>
    )
}

export default Item
