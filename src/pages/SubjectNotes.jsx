import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

function SubjectNotes() {
  const { subjectName } = useParams();

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const res = await API.get(
        `/notes/subject/${subjectName}`
      );

      setNotes(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "50px auto",
      }}
    >
      <h1>{subjectName}</h1>

      {notes.map((note) => (
        <div
          key={note._id}
          style={{
            padding: "20px",
            marginBottom: "20px",
            background: "#fff",
            borderRadius: "12px",
          }}
        >
          <h3>{note.title}</h3>

          <p>{note.chapter}</p>
        </div>
      ))}
    </div>
  );
}

export default SubjectNotes;