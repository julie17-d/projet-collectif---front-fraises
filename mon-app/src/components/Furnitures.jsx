// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
// import React, {useEffect, useState} from "react";
// import axios from 'axios';

// function Furnitures() {
//   //initialisation de la variable d'état "cart"
//   const [cart, setCart] = useState([]);

//   const [data, setData] = useState([]);
//   useEffect( () => {
//     axios.get("http://localhost:3001/api/furnitures")
//     .then((res) => setData(res.data));
//   }, []);
//   console.log(data)
  

//   //map sur les meubles
//   const furnitures = data.map((item) => {

//     //return l'élément JSX pour afficher les cards des meubles
//     return (
//       <Col>
//         <Card style={{ width: '24rem' }} className='card' border="dark" bg="dark" text="light">
//           <Card.Header>
//             <Card.Title>
//               <h3>{item.title}</h3>
//             </Card.Title>
//           </Card.Header>
//           <Card.Img className="card-img" src={item.pictureUrl} variant="top" />
//           <Card.Body>
//             <Card.Text>
//               {item.description}
//             </Card.Text>
//           </Card.Body>
//           <Card.Footer>
//             {item.price}€<br></br>
//             <Button variant="secondary" onClick={() => {

//               //onclick, crée un object avec infos du meuble...
//               const object = {
//                 id: item._id,
//                 title: item.title,
//                 price: item.price
//               };

//               //...et mets à jour "cart" en rajoutant à la fin de la liste le dernier object cliqué
//               setCart((oldCart) => [...oldCart, object])

//             }}>Add to cart</Button>
//           </Card.Footer>
//         </Card>
//       </Col>
//     )
//   })

//   //return un array du display des meubles et de l'array "cart"
//   return [furnitures, cart];
// }

// export default Furnitures
