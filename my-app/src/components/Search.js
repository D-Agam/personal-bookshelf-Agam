import React, { useState } from 'react';
import axios from 'axios';
import BookCard from './BookCard';
import Footer from './Footer';

const Search = ({ onAddToBookshelf }) => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  const handleSearch = async (e) => {
    const response = await axios.get(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`);
    setBooks(response.data.docs);
  };

  return (
    <div>
      &nbsp;
      Search for desired books here:&nbsp;
      <input 
        type="text" 
        
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        onKeyUp={handleSearch} 
        placeholder="Search for books and enter" 
      />
      <div className="book-list">
        {books.map((book) => (
          <BookCard key={book.key} book={book} onAddToBookshelf={onAddToBookshelf} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Search;
