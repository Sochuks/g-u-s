import React, {useState} from 'react'

const SearchForm = ({onSearch}) => {
  const[username, setUsername] = useState("");

  const handleSubmit=()=>{
    if (username.trim()){
      onSearch(username);
      setUsername('')
    }
  }
  return (
    <>
    <div className="bg-green-200 p-4">
      {/* Search form */}
      <label htmlFor="Search" className='relative'>
          <input
            type="text"
            id="Search"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            placeholder='Enter Github Name'
            className="mt-0.5 px-4 py-2 w-full rounded border border-green-900 shadow-sm sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <span className="absolute inset-y-0 right-2 grid w-8 place-content-center">
            <button
              type="button"
              onClick={handleSubmit}
              aria-label="Submit"
              className="rounded-full p-1.5 bg-slate-400 text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              
            </button>
          </span>
      </label>
    </div>
    </>
  )
}

export default SearchForm