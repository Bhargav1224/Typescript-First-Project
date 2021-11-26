import * as React from "react";
import { Note } from "../models/notes.model";
import Notes from "./Notes";

interface INotesListProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const NotesList: React.FC<INotesListProps> = ({ notes, setNotes }) => {
  localStorage.setItem("notesData", JSON.stringify(notes));
  const handleDelete = (id: string) => {
    const updateNotes = notes?.filter((item) => item.id !== id);
    setNotes(updateNotes);
  };
  const renderNotes = (): JSX.Element[] => {
    return notes?.map((note) => {
      return <Notes key={note.id} note={note} handleDelete={handleDelete} />;
    });
  };
  return (
    <>
      <h2 className="mt-3">Notes</h2>
      <div>{renderNotes()}</div>
    </>
  );
};

export default NotesList;
