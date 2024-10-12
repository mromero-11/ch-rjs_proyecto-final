import { useState } from "react"
import { useCartContext } from "../../context/cartContext"
import Button from 'react-bootstrap/Button'
 
function ItemCount( item ) {
    const [count, setCount] = useState(1)

    const { addToCart } = useCartContext()

    const add = () => setCount(count + 1)
    const sub = () => setCount(count - 1)

    const handleAddToCart = () => addToCart({...item, qty: count})

    return (
        <div>
            <p>{count}</p>
            <Button onClick={add}>+</Button>
            <Button onClick={sub}>-</Button>
            <Button onClick={handleAddToCart}>Agregar al carrito</Button>
        </div>
    )
}

export default ItemCount
