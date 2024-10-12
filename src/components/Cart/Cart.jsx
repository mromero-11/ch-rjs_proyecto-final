import { useCartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button'

function Cart() {
    const { cart } = useCartContext()

    return (
        <>
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
            <Button as={Link} to='/checkout'>Finalizar compra</Button>
        </>
    )
}

export default Cart
