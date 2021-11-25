import * as React from "react";
import { Button, Card } from "react-bootstrap";
import { Note } from "../models/notes.model";
import "../App.css";
interface INotesProps {
  note: Note;
  handleDelete: (id: string) => void;
}

const Notes: React.FC<INotesProps> = ({ note, handleDelete }) => {
  return (
    <>
      <div className="mb-3">
        <Card style={{ backgroundColor: note.color }}>
          <Card.Body>
            <Card.Title className="color">{note.title}</Card.Title>
            <Card.Text className="color">{note.text}</Card.Text>
            <Card.Subtitle className="text-muted color">
              {note.date}
            </Card.Subtitle>
            <Button
              className="mt-3"
              variant="danger"
              onClick={() => handleDelete(note.id)}
            >
              Delete
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Notes;
