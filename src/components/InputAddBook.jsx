import { useState } from 'react';
import { Form, InputGroup, Button, Col, Row } from 'react-bootstrap';

function InputAddBook({ onAddBook }) {
  const [validated, setValidated] = useState(false);
  const [book, setBook] = useState({
    img: '',
    title: '',
    price: ''
  });

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      onAddBook({ ...book, asin: Date.now().toString() }); // Ensure unique key for new book
      setBook({ img: '', title: '', price: '' });
    }
    setValidated(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({
      ...prevBook,
      [name]: value
    }));
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustomImg">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            required
            type="url"
            placeholder="Enter image URL"
            name="img"
            value={book.img}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid image URL.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter book title"
            name="title"
            value={book.title}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid title.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomPrice">
          <Form.Label>Price</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text>€</InputGroup.Text>
            <Form.Control
              required
              type="number"
              placeholder="Enter book price"
              name="price"
              value={book.price}
              onChange={handleChange}
              step="0.01"
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid price.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Button type="submit">Add Book</Button>
    </Form>
  );
}

export default InputAddBook;
