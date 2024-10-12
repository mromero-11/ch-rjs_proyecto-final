import { useCartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

function Checkout() {
    const { cart } = useCartContext()
    
    return (
        <Container>
            <Row>
                <Col>
                    <h3>Resumen de la compra</h3>
                    <ListGroup as="ol" numbered>
                        {cart.map(prod => 
                            <ListGroup.Item key={prod.item.id} as="li" className="d-flex justify-content-between align-items-start" >
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">{prod.item.name}</div>
                                    {prod.item.band}
                                </div>
                            <Badge bg="primary" pill>
                                {prod.qty}
                            </Badge>
                        </ListGroup.Item>
                        )}
                    </ListGroup>
                </Col>
                <Col>
                    <h3>Datos de la compra</h3>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Name" />
                        </Form.Group>
                        <Button variant="success" type="submit">
                            Finalizar
                        </Button>
                        </Form>
                </Col>    
            </Row>
        </Container>
    )
}

export default Checkout
