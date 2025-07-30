'use client';

import React from 'react';

interface ErrorBoundaryProps {
  error: Error;
  resetErrorBoundary: () => void;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert" className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-xl font-bold mb-4">Something went wrong:</h2>
      <pre className="text-red-500">{error.message}</pre>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={resetErrorBoundary}
      >
        Try again
      </button>
    </div>
  );
};

export default ErrorBoundary;
