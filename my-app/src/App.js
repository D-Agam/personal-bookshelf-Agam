import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './components/Search';
import Bookshelf from './components/Bookshelf';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  const [bookshelf, setBookshelf] = useState(() => {
    const savedBookshelf = localStorage.getItem('bookshelf');
    return savedBookshelf ? JSON.parse(savedBookshelf) : [];
  });

  useEffect(() => {
    localStorage.setItem('bookshelf', JSON.stringify(bookshelf));
  }, [bookshelf]);

  const handleAddToBookshelf = (book) => {
    setBookshelf((prevBookshelf) => [...prevBookshelf, book]);
  };

  const handleRemoveFromBookshelf = (book) => {
    setBookshelf((prevBookshelf) => prevBookshelf.filter(b => b.key !== book.key));
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Search onAddToBookshelf={handleAddToBookshelf} />} />
        <Route path="/bookshelf" element={<Bookshelf bookshelf={bookshelf} onRemoveFromBookshelf={handleRemoveFromBookshelf} />} />
      </Routes>
    </Router>
  );
};

export default App;
