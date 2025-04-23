import React,{ useState } from 'react';

import SearchForm from './components/SearchForm';

import { fetchProfile } from './services/fetchUser';
import UserProfile from './components/UserProfile';
import ErrorMessage from './components/ErrorMessage';



function App() {
  // set state
  const [user, setUser] = useState(null);
  const [loading, setLoading]= useState(false);
  const [error, setError] = useState(null);


  const handleSearch = async (username)=>{
    // Initial States
    setLoading(true);
    setError(null);
    setUser(null);

    try {
      const data = await fetchProfile(username);
      setUser(data)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
    {/* Container */}
    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold my-6">GitHub User Search</h1>
      {/* Search Bar */}
      <SearchForm onSearch={handleSearch} />

      <div className="max-w-md w-full p-4">
        <ErrorMessage loading={loading} error={error} />
        {user && <UserProfile user={user} />}
      </div>
    </div>
    </>
  )
}

export default App
