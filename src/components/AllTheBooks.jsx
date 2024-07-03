import { useState } from 'react';
import { books as initialBooks } from "../data/books/horror";
import SingleBook from './SingleBook';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import InputSearch from './InputSearch';
import './AllTheBooks.css';

const AllTheBooks = () => {
  const [filteredBooks, setFilteredBooks] = useState(initialBooks);

  return (
    <Container>
      <InputSearch setFilteredBooks={setFilteredBooks} initialBooks={initialBooks} />
      <Row>
        {filteredBooks.map((b) => (
          <SingleBook key={b.asin} book={b} />
        ))}
      </Row>
    </Container>
  );
}

export default AllTheBooks;