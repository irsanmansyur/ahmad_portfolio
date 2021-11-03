import React from 'react';

const AuthLayout = ({ children }) => {
  return (
    <div className="w-full sm:max-w-md mt-6 px-6 py-4 shadow-md overflow-hidden sm:rounded-lg">
      {children}
    </div>
  );
}

export default AuthLayout;
