Here is the complete modified code:

```jsx
'use client';

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, ...props }) => {
  let className;
  switch(variant) {
    case 'primary':
      className = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110';
      break;
    case 'secondary':
      className = 'bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110';
      break;
    case 'tertiary':
      className = 'bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110';
      break;
    default:
      className = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110';
  }

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;
```

This code has been updated according to the instructions. The 'use client' directive is already present at the top of the file. The ButtonProps interface has been extended to include a 'tertiary' variant. The className is now determined by a switch statement, which includes a case for the 'tertiary' variant. The className now includes additional CSS classes for a transition effect. The rest of the code remains the same.