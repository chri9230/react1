import {Form, InputGroup} from 'react-bootstrap';
import { useState } from 'react';

const InputSearch = ({ setFilteredBooks, initialBooks }) => {
  const [search, setSearch] = useState('');

  const handleInputChange = (event) => {
    const searchValue = event.target.value;
    setSearch(searchValue);

    const filtered = initialBooks.filter(book => 
      book.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredBooks(filtered);
  };

  return (
    <InputGroup className="mb-3">
      <InputGroup.Text>Search Your Book</InputGroup.Text>
      <Form.Control 
        placeholder='Scrivi qui..' 
        value={search} 
        onChange={handleInputChange}
      />
    </InputGroup>
  );
}

export default InputSearch;


/* FERMATI QUI */