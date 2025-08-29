// src/components/BookCard.jsx
import React from "react";

function BookCard({ book }) {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "https://via.placeholder.com/150x200?text=No+Cover";

  return (
    <div className="border rounded-xl shadow-md p-4 bg-white hover:shadow-xl hover:scale-105 transform transition duration-300 flex flex-col">
      <img
        src={coverUrl}
        alt={book.title}
        className="w-full h-64 object-cover rounded-md mb-3 shadow-sm"
      />
      <h3 className="text-sm font-semibold">{book.title}</h3>
      <p className="text-xs text-gray-600">
        {book.author_name ? book.author_name[0] : "Unknown Author"}
      </p>
    </div>
  );
}

export default BookCard;
