Here is the complete modified code:

```jsx
'use client';

import React from 'react';
import { useNotes } from '@/contexts/NotesContext';
import NoteItem from '@/components/features/NoteItem';
import Button from '@/components/ui/Button';
import { useRouter } from 'next/router';

const NotesList: React.FC = () => {
  const { notes } = useNotes();
  const router = useRouter();

  const handleAddNote = () => {
    router.push('/add-note');
  };

  return (
    <div className="mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Your Notes</h2>
        <Button onClick={handleAddNote}>Add Note</Button>
      </div>
      {notes.length === 0 ? (
        <p className="text-gray-500">You have no notes yet. Click on "Add Note" to create one.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {notes.map((note) => (
            <NoteItem key={note.id} note={note} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default NotesList;
```

This code has been modified according to the instructions. The 'use client' directive is already at the top of the file. The new import statements have been added and it is assumed that the imported files exist in the project. The new event handler `handleAddNote` has been added and it uses the `useRouter` hook from Next.js to navigate to the '/add-note' route when the 'Add Note' button is clicked. The UI has been updated to include the 'Add Note' button and the notes list now has a responsive grid layout.