import React from "react";

function QuestionItem({ question, deleteHandler, indexHandler }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  const handleDelete = (e) => {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE"
    })
      .then(r => r.json())
      .then(() => deleteHandler(id));
  }

  const correctAnswer = (e) => {
    e.preventDefault();
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "correctIndex": parseInt(e.target.value)
      })
    })
      .then(r => r.json())
      .then((item) => indexHandler(item));
  }
    // console.log(id);


  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={(e) => correctAnswer(e)}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
