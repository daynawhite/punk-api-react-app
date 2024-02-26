import { Button, Card } from 'react-bootstrap';

function BeerCard(props) {
    console.log('props', props);
    const { beer } = props;
    return (
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={beer.image_url} />
      <Card.Body>
        <Card.Title>{beer.name}</Card.Title>
        <Card.Text>
          {beer.tagline}
        </Card.Text>
        <Button variant="primary">More About This Beer</Button>
      </Card.Body>
    </Card>
    )

}

export default BeerCard