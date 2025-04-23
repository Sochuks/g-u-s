import { useState } from 'react'

import SearchForm from './components/SearchForm';


function App() {
  const handleSearch = (username)=>{
    console.log("Search Results for", username)
  }

  return (
    <>
    {/* Container */}
    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold my-6">GitHub User Search</h1>
      {/* Search Bar */}
      <SearchForm onSearch={handleSearch} />
    </div>
    </>
  )
}

export default App
