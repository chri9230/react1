import { Button, Card, Col } from 'react-bootstrap';

function Book({ book }) {
  return (
    <Col xs={12} md={6} lg={4} xl={3} className="book-item">
      <Card className="card">
        <Card.Img variant="top" src={book.img} className="card-img-top" />
        <Card.Body className="card-body">
          <Card.Title className="card-title">{book.title}</Card.Title>
          <Card.Text className="card-text">
            {book.price} €
          </Card.Text>
          <Button variant="primary" className="button">More Info</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Book;