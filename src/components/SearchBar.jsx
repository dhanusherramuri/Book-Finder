import React, { useState } from "react";
import BookList from "./BookList";

function SearchBar() {
  const [bn, setName] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searched, setSearched] = useState(false);

  const handleSearch = async () => {
    if (!bn) return;

    setLoading(true);
    setError("");
    setSearched(true);

    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?title=${encodeURIComponent(bn)}`
      );
      if (!response.ok) throw new Error("Failed to fetch books");

      const data = await response.json();
      setBooks(data.docs || []);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

 
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="w-full  mx-auto">
      <div className="relative">
        <input
          className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-28 py-2"
          placeholder="Enter the book name"
          onChange={(e) => setName(e.target.value)}
          onKeyDown={handleKeyDown}  
          value={bn}
        />
        <button
          onClick={handleSearch}
          className="absolute top-1 right-1 rounded bg-slate-800 py-1 px-3 text-sm text-white"
          type="button"
        >
          Search
        </button>
      </div>

      <div className="mt-6">
        {loading && <p className="text-center text-blue-600">Loading...</p>}
        {error && <p className="text-center text-red-600">{error}</p>}
        {!loading && searched && books.length === 0 && !error && (
          <p className="text-center text-gray-500">No books found.</p>
        )}
        {!loading && !error && books.length > 0 && <BookList books={books} />}
      </div>
    </div>
  );
}

export default SearchBar;
