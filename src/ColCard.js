import React from 'react';
import { Col, Card } from 'react-bootstrap';
import './App.css';

const ColCard = () => {
  const handleInfoClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      <Col>
        <Card onClick={() => handleInfoClick('https://en.wikipedia.org/wiki/Labrador_Retriever')}>
          <Card.Img src={process.env.PUBLIC_URL + '/images/image1.jpg'} alt="Image 1" />
          <Card.Body>
            <Card.Title>Labrador</Card.Title>
            <Card.Text>
              Info of Labrador
            </Card.Text>
            <a href="https://en.wikipedia.org/wiki/Labrador_Retriever" target="_blank" title="Info of Labrador">
              More Info
            </a>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card onClick={() => handleInfoClick('https://en.wikipedia.org/wiki/Pomeranian_dog')}>
          <Card.Img src={process.env.PUBLIC_URL + '/images/image2.jpg'} alt="Image 2" />
          <Card.Body>
            <Card.Title>Pomeranian</Card.Title>
            <Card.Text>
              Info of Pomeranian
            </Card.Text>
            <a href="https://en.wikipedia.org/wiki/Pomeranian_dog" target="_blank" title="">
              More Info
            </a>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card onClick={() => handleInfoClick('https://en.wikipedia.org/wiki/Husky')}>
          <Card.Img src={process.env.PUBLIC_URL + '/images/image3.jpg'} alt="Image 3" />
          <Card.Body>
            <Card.Title>Husky</Card.Title>
            <Card.Text>
              Info of Husky
            </Card.Text>
            <a href="https://en.wikipedia.org/wiki/Husky" target="_blank" title="">
              More Info
            </a>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card onClick={() => handleInfoClick('https://en.wikipedia.org/wiki/German_Shepherd')}>
          <Card.Img src={process.env.PUBLIC_URL + '/images/image4.jpg'} alt="Image 4" />
          <Card.Body>
            <Card.Title>Germanshepherd</Card.Title>
            <Card.Text>
              Info of Germanshepherd
            </Card.Text>
            <a href="https://en.wikipedia.org/wiki/German_Shepherd" target="_blank" title="">
              More Info
            </a>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default ColCard;
