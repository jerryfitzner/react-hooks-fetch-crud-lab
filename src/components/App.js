import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/questions`)
      .then(r => r.json())
      .then(question => setQuestions(question))
  }, [])

  const formSubmit = (newQuestion) => {
    setQuestions([...questions, newQuestion]);
    setPage("List")
  }

  const indexHandler = (item) => {
    const idexer = questions.map((q) => {
      if (q.id === item.id){
        return item;
      } else {
        return q;
      }
    });
    setQuestions(idexer);
  }

  const deleteHandler = (id) => {
    // console.log(id);
    const updatedItems = questions.filter((item) => item.id !== id);
    setQuestions(updatedItems)
  }


  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm formSubmit={formSubmit}/> : <QuestionList questions={questions} deleteHandler={deleteHandler} indexHandler={indexHandler}/>}
    </main>
  );
}

export default App;
