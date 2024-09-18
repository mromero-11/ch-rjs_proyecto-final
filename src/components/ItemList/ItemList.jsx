import Item from '../Item/Item'

function ItemList ({ items }) {
    return (
        <>
            {
                items.map(
                    product => <Item key={product.id} product={product} />
                )
            }
        </>
    )
}

export default ItemList
