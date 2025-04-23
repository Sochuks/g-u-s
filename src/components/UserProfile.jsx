import React from 'react'

const UserProfile = ({user}) => {
  return (
    <div className="bg-white p-6 rounded-lg border shadow-md max-w-md w-full">
    <img
      src={user.avatar_url}
      alt={`${user.login}'s avatar`}
      className="w-24 h-24 rounded-full mx-auto mb-4"
    />
    <h2 className="text-xl font-bold text-center">
      {user.name || user.login}
    </h2>
    {user.bio && (
      <p className="text-gray-600 italic text-center mt-2">{user.bio}</p>
    )}
    <div className="flex justify-center gap-6 mt-4">
      <p className="text-gray-700">
        <span className="font-semibold">Repos:</span> {user.public_repos}
      </p>
      <p className="text-gray-700">
        <span className="font-semibold">Followers:</span> {user.followers}
      </p>
    </div>
    <a
      href={user.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="block text-center mt-4 text-blue-600 hover:underline"
    >
      View GitHub Profile
    </a>
  </div>
  )
}

export default UserProfile