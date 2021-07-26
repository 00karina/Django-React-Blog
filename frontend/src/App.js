import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import ArticleList from "./component/ArticleList";
import Form from "./component/Form";
function App() {
  const [articles, setArticles] = useState([]);
  const [edit, setEdit] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/articles/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token e2bdc24215b1db777eb49518228727154cdd6808",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setArticles(resp))
      .catch((error) => console.log(error));
  }, []);

  const editBtn = (article) => {
    setEdit(article);
  };
  return (
    <div className="App">
      <div className="container">
        <h3>Reactjs And Django Intregation</h3>
        <br></br>
        <br></br>
        <ArticleList articles={articles} editBtn={editBtn} />
        <Form edit={edit}></Form>
      </div>
    </div>
  );
}

export default App;
