import { useState } from 'react';
import { books as initialBooks } from "../data/books/horror";
import SingleBook from './SingleBook';
import { Container, Row } from 'react-bootstrap';

import InputSearch from './InputSearch';
import InputAddBook from './InputAddBook';
import './AllTheBooks.css';

const AllTheBooks = () => {
  const [filteredBooks, setFilteredBooks] = useState(initialBooks);
  const [books, setBooks] = useState(initialBooks);

  const handleAddBook = (newBook) => {
    const updatedBooks = [...books, newBook];
    setBooks(updatedBooks);
    setFilteredBooks(updatedBooks);
  };

  return (
    <Container>
      <InputSearch setFilteredBooks={setFilteredBooks} initialBooks={books} />
      <InputAddBook onAddBook={handleAddBook} />
      <Row>
        {filteredBooks.map((b) => (
          <SingleBook key={b.asin} book={b} />
        ))}
      </Row>
    </Container>
  );
};

export default AllTheBooks;