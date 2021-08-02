import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import ArticleList from "./component/ArticleList";
import axios from "axios";
import Form from "./component/Form";

function App() {
  const [article, setArticle] = useState([]);
  const getArticle = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/articles/");
      const { data } = response;
      setArticle(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getArticle();
  }, []);

  const addArticle = async (newArticle) => {
    try {
      console.log(newArticle);
      await axios.post("http://127.0.0.1:8000/articles/", newArticle);
      getArticle();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="App">
          <div className="text-center">
            <h3>Reactjs And Django Intregation</h3>
          </div>
          <div className=" text-center">
            <br></br>
            <button className="btn btn-info">Add New Article</button>
            <Form addArticle={addArticle} />
            {article.map((articles, index) => (
              <ArticleList
                key={index}
                id={articles.id}
                title={articles.Title}
                description={articles.Description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
