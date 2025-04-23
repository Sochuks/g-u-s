import React from 'react';

function ErrorMessage({ loading, error }) {
  if (!loading && !error) return null;

  return (
    <div className="text-center p-4 text-lg bg-slate-300" >
      {loading && <p className="text-gray-700">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}

export default ErrorMessage;