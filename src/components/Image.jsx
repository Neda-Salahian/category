
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Image1 from '../assets/saliwood-T120907-1.jpg';

// Import image.css
import '../image.css'

function Image({title,price}){
    return(
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Image1} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>{price} $</ListGroup.Item>
                </ListGroup>
                {/* <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body> */}
            </Card>
                
        </>
    )
}

export default Image