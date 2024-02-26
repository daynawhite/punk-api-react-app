import { Card } from 'react-bootstrap';
import LikeButton from './LikeButton';

function BeerCard(props) {
    const { beer } = props;

    return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={beer.image_url} />
        <Card.Body>
            <Card.Title>
                {beer.name}
            </Card.Title>

            <Card.Text>
                abv: {beer.abv}
                <br />
                <br />
                {beer.description}
            </Card.Text>
            
            <LikeButton />
            
        </Card.Body>
    </Card>
    )

}


export default BeerCard