import { useState } from 'react'

import SearchForm from './components/SearchForm';


function App() {

  return (
    <>
    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">GitHub User Search</h1>
      {/* Search Bar */}
      <SearchForm />
    </div>
    </>
  )
}

export default App
