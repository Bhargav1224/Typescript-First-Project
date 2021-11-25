import React, { useState } from "react";
import { Note } from "./models/notes.model";
import Header from "./Components/Header";
import { Container, Row, Col } from "react-bootstrap";
import NotesList from "./Components/NotesList";
import CreateNotes from "./Components/CreateNotes";
function App() {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  // const localData = localStorage.getItem("notesData");
  // const payload = parse(localData || "");
  const [notes, setNotes] = useState<Note[]>([]);

  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col>
            <NotesList notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateNotes notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default App;
