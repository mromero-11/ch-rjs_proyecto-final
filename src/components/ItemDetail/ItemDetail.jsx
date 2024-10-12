import Card from "react-bootstrap/Card"
import ItemCount from "../ItemCount/ItemCount"

function ItemDetail({detail}) {
    return (
        <Card>
            <Card.Img variant="top" src={detail?.cover_url}/>
            <Card.Body>
                <Card.Title>{detail?.name}</Card.Title>
                <Card.Text>{detail?.description}</Card.Text>
                <Card.Text>{detail?.band}</Card.Text>
                <Card.Text>{detail?.genre}</Card.Text>
                <Card.Text>{detail?.price}</Card.Text>
                <ItemCount item={detail} />
            </Card.Body>
        </Card>
    )
}

export default ItemDetail
