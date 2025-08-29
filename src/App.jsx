// import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// import './App.css'
// import SearchBar from './components/SearchBar'
// import BookCard from './components/BookCard'
// import BookList from './components/BookList'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//     <div className='flex-justify-center'>
//       <SearchBar></SearchBar>
//     </div>
//     <div>
//       <BookCard></BookCard>
//     </div>
//     <div>
//       <BookList></BookList>
//     </div>
//     </>
//   )
// }

// export default App

// src/App.jsx
import React from "react";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-slate-800 drop-shadow">
        📚 Book Finder
      </h1>
      <SearchBar />
    </div>
  );
}

export default App;
