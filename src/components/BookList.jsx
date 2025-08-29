
import React from "react";
import BookCard from "./BookCard";

function BookList({ books }) {
  if (!books || books.length === 0) {
    return <p className="text-gray-500 text-sm mt-4">No books found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6">
      {books.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
  );
}

export default BookList;
