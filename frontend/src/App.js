import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import ArticleList from "./component/ArticleList";
import Form from "./component/Form";
function App() {
  const [articles, setArticles] = useState([]);
  const [editArticle, setEditArticle] = useState(null);

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
    setEditArticle(article);
  };

  const updatedInfo = (article) => {
    const new_article = articles.map((myarticle) => {
      if (myarticle.id === article.id) {
        return article;
      } else {
        return myarticle;
      }
    });
    setArticles(new_article);
  };
  const articleForm = () => {
    setEditArticle({ Title: " ", Description: " " });
  };
  const InsertInfo = (article) => {
    const new_article = [...articles, article];
    setArticles(new_article);
  };
  return (
    <div className="App">
      <div className="container">
        <div className="App">
          <div className="row">
            <div className="col-md-6">
              <h3>Reactjs And Django Intregation</h3>
            </div>
            <div className="col-md-6">
              <br></br>
              <button onClick={articleForm} className="btn btn-info">
                Insert Article
              </button>
            </div>
          </div>

          <ArticleList articles={articles} editBtn={editBtn} />
          {editArticle ? (
            <Form
              article={editArticle}
              updatedInfo={updatedInfo}
              InsertInfo={InsertInfo}
            ></Form>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
