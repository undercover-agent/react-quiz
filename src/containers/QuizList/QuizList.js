import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import clasess from "./QuizList.module.css";

class QuizList extends Component {
  renderQuizes() {
    return [1, 2, 3].map((quiz, index) => {
      return (
        <li key={index}>
          <NavLink to={"/quiz/" + quiz}>Тест {quiz}</NavLink>
        </li>
      );
    });
  }
  render() {
    return (
      <div className={clasess.QuizList}>
        <div>
          <h1 className={clasess.title}>Список тестов</h1>

          <ul>{this.renderQuizes()}</ul>
        </div>
      </div>
    );
  }
}

export default QuizList;
