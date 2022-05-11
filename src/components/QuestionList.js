import React, {useState, useEffect} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, deleteHandler, indexHandler }) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{ questions.map((question) => (
      <QuestionItem key={question.id} question={question} deleteHandler={deleteHandler} indexHandler={indexHandler}/>
      ))}</ul>
    </section>
  );
}

export default QuestionList;
