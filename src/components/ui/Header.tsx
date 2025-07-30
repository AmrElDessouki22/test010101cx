Here's the modified code:

```jsx
// use client
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useNotesContext } from '@/contexts/NotesContext';

const Header: React.FC = () => {
  const router = useRouter();
  const { notes } = useNotesContext();

  return (
    <header className="bg-blue-600 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">Notes App</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">
                <a className={`text-white ${router.pathname === '/' ? 'underline' : ''}`}>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/notes">
                <a className={`text-white ${router.pathname === '/notes' ? 'underline' : ''}`}>Notes ({notes.length})</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
```

Please ensure that the `useNotesContext` hook and the `NotesContext` file exist in your project. If not, you will need to create them. Also, ensure that the `use client` directive is compatible with your project setup, as it's not a standard React or Next.js directive.