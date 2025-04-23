import { useState } from 'react';
import axios from 'axios';

import SearchForm from './components/SearchForm';

const apiUrl = import.meta.env.VITE_API_URL



function App() {

  const fetchProfile = async(username) =>{
    try {
      const response = await axios.get(`${apiUrl}/${username}`);
      return response.data
    } catch (error) {
      if(error.response && error.response === '404'){
        throw new Error('User not Found');
      }
      throw new Error('An error occured fetching while fetching user')
    }
  }

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
