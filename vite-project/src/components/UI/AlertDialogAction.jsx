import React from 'react';

export const AlertDialogAction = ({ onClick, children, className }) => (
  <button
    className={`px-4 py-2 rounded ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);


