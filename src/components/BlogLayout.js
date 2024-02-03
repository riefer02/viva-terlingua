import React from 'react';

const BlogLayout = ({ children }) => {
  return (
    <div className="max-w-3xl lg:rounded-lg mx-auto bg-gray-light-1 lg:mb-8 p-4 lg:mt-8">
      {children}
    </div>
  );
};

export default BlogLayout;
