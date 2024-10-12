import { useCartContext } from "../../context/cartContext"
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

function CartWidget () {
  const { cart } = useCartContext()

  return (
    <Button variant="primary">
      Cart <Badge bg="secondary">{cart.length}</Badge>
      <span className="visually-hidden">unread messages</span>
    </Button>
  );
};

export default CartWidget;
