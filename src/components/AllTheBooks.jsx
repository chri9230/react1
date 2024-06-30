import { books } from "../data/books/horror";
import Book from './Book';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './AllTheBooks.css';

const AllTheBooks = () => {
    return (
        <Container>
            <Row>
                {books.map((b) => (
                    <Book key={b.asin} book={b} />
                ))}
            </Row>
        </Container>
    );
}

export default AllTheBooks;