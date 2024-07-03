import React, { useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './SingleBook.css'

const SingleBook = ({ book }) => {
  const [selected, setSelected] = useState(false);

  const handleCoverClick = () => {
    setSelected(!selected);
  };

  return (
    <Col sm={4}>
      <Card 
      className={`custom-card ${selected ? 'selected' : ''}`} 
      onClick={handleCoverClick} 
      style={{ border: selected ? '2px solid red' : 'none' }}>
        <Card.Img
          variant="top"
          src={book.img}
          
        />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>{book.price} €</Card.Text>
          <Button variant="primary">More Info</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBook;