import React from 'react';

const BookCard = ({ book, onAddToBookshelf }) => {
  return (
    <div className="book-card" style={{backgroundColor:"#F0F8FF"}}>
      <h3>{book.title}</h3>
      <p>{book.author_name?.join(', ')}</p>
      <button onClick={() => onAddToBookshelf(book)} style={{backgroundColor:"#3DED97",borderRadius: "6px",border:"none"}}>Add to Bookshelf</button>
    </div>
  );
};

export default BookCard;
