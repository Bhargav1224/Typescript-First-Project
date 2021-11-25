import React, { useState } from "react";
import { Note } from "./models/notes.model";
import Header from "./Components/Header";
import { Container, Row, Col } from "react-bootstrap";
import NotesList from "./Components/NotesList";
function App() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: new Date().toString(),
      title: "Meetings",
      text: "Schedule meeting with UI And Ux Team",
      color: "red",
      date: new Date().toString(),
    },
  ]);

  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col>
            <NotesList notes={notes} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default App;
