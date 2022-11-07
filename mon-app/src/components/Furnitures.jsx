import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import json from '../mock.json';
import { useState } from 'react';

function Furnitures() {
  //initialisation de la variable d'état "cart"
  const [cart, setCart] = useState([]);

  //map sur les meubles
  const furnitures = json.map((data) => {

    //return l'élément JSX pour afficher les cards des meubles
    return (
      <Col>
        <Card style={{ width: '24rem' }} className='card' border="dark" bg="dark" text="light">
          <Card.Header>
            <Card.Title>
              <h3>{data.title}</h3>
            </Card.Title>
          </Card.Header>
          <Card.Img className="card-img" src={data.pictureUrl} variant="top" />
          <Card.Body>
            <Card.Text>
              {data.description}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            {data.price}€<br></br>
            <Button variant="secondary" onClick={() => {

              //onclick, crée un object avec infos du meuble...
              const object = {
                id: data._id,
                title: data.title,
                price: data.price
              };

              //...et mets à jour "cart" en rajoutant à la fin de la liste le dernier object cliqué
              setCart((oldCart) => [...oldCart, object])

            }}>Add to cart</Button>
          </Card.Footer>
        </Card>
      </Col>
    )
  })

  //return un array du display des meubles et de l'array "cart"
  return [furnitures, cart];
}

export default Furnitures;