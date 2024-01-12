// // Header.js
// import React from 'react';
// import { Col, Card } from 'react-bootstrap';

// const Header = () => {
//   const handleInfoClick = (link) => {
//     window.open(link, '_blank');
//   };

//   return (
//     <div className="row row-cols-1 row-cols-md-2 g-4">
//       <Col>
//         <Card onClick={() => handleInfoClick('https://en.wikipedia.org/wiki/Labrador_Retriever')}>
//           <Card.Img src={process.env.PUBLIC_URL + '/images/image1.jpg'} alt="Image 1" />
//           <Card.Body>
//             <Card.Title>Labrador</Card.Title>
//             <Card.Text>
//               Info of Labrador
//             </Card.Text>
//             <a href="https://en.wikipedia.org/wiki/Labrador_Retriever" target="_blank" title="Info of Labrador">
//               More Info
//               </a>
//           </Card.Body>
//         </Card>
//       </Col>
//       <Col>
//         <Card onClick={() => handleInfoClick('https://en.wikipedia.org/wiki/Pomeranian_dog')}>
//           <Card.Img src={process.env.PUBLIC_URL + '/images/image2.jpg'} alt="Image 2" />
//           <Card.Body>
//             <Card.Title>Pomeranian</Card.Title>
//             <Card.Text>
//               Info of Pomeranian
//             </Card.Text>
//             <a href="https://en.wikipedia.org/wiki/Pomeranian_dog" target="_blank" title="">
//               More Info
//             </a>
//           </Card.Body>
//         </Card>
//       </Col>
//       <Col>
//         <Card onClick={() => handleInfoClick('https://en.wikipedia.org/wiki/Husky')}>
//           <Card.Img src={process.env.PUBLIC_URL + '/images/image3.jpg'} alt="Image 3" />
//           <Card.Body>
//             <Card.Title>Husky</Card.Title>
//             <Card.Text>
//               Info of Husky
//             </Card.Text>
//             <a href="https://en.wikipedia.org/wiki/Husky" target="_blank" title="">
//               More Info
//             </a>
//           </Card.Body>
//         </Card>
//       </Col>
//       <Col>
//         <Card onClick={() => handleInfoClick('https://en.wikipedia.org/wiki/German_Shepherd')}>
//           <Card.Img src={process.env.PUBLIC_URL + '/images/image4.jpg'} alt="Image 4" />
//           <Card.Body>
//             <Card.Title>Germanshepherd</Card.Title>
//             <Card.Text>
//               Info of Germanshepherd
//             </Card.Text>
//             <a href="https://en.wikipedia.org/wiki/German_Shepherd" target="_blank" title="">
//               More Info
//             </a>
//           </Card.Body>
//         </Card>
//       </Col>
//       {/* Add similar blocks for other dog breeds */}
//     </div>
//   );
// };

// export default Header;
import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import './App.css';
const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
         <Container className="mt-3"> {/* Add margin-top here */}
        {/* Add your logo image and link here */}
        <Navbar.Brand href="#home">
          <img
            src="https://www.shutterstock.com/image-vector/dog-paw-vector-footprint-icon-600nw-1487692316.jpg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Paws Logo"
          />
          {' Paws'}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>

{/* About Link */}
<Nav.Link href="#about">About</Nav.Link>

{/* Contact Link */}
<Nav.Link href="#contact">Contact</Nav.Link>
</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;




