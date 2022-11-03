import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import json from '../mock.json';

function Furnitures() {
    const arr = [];

    for (let meuble in json) {
      let furniture = (
        <Col>
        <Card style={{ width: '24rem' }} className='card' border="dark" bg="dark" text="light">
          <Card.Header>
            <Card.Title>
              <h3>{json[meuble].title}</h3>
            </Card.Title>
          </Card.Header>
          <Card.Img className="card-img" src={json[meuble].pictureUrl} variant="top"/>
          <Card.Body>
            <Card.Text>
              {json[meuble].description}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          {json[meuble].price}€<br></br>
          <Button variant="secondary">Add to cart</Button>
          </Card.Footer>
        </Card>
        </Col>
      );
    //   if (meuble <= 3) {
        arr.push(furniture);
    //   }
    }
    return arr;
  }

  export default Furnitures;