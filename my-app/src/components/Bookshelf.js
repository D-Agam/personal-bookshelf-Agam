import React from 'react';
import Footer from './Footer';

const Bookshelf = ({ bookshelf, onRemoveFromBookshelf }) => {
  return (
    <div >
      <h2>&nbsp;My Bookshelf</h2>
      <div className="book-list" >
        {bookshelf.map((book, index) => (
          <div key={index} className="book-card" style={{backgroundColor:"#48BBDB"}}>
            <h3>{book.title}</h3>
            <p>{book.author_name?.join(', ')}</p>
            <button onClick={() => onRemoveFromBookshelf(book)} style={{backgroundColor:"#D21404",borderRadius: "6px",border:"none"}}>Remove</button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Bookshelf;
