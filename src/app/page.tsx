import React from 'react';
import NotesList from '@/components/features/NotesList';
import AddNoteForm from '@/components/features/AddNoteForm';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">My Notes</h1>
      <AddNoteForm />
      <NotesList />
    </div>
  );
};

export default HomePage;
