import React from "react";

const ArticleList = (props) => {
  const editBtn = (article) => {
    props.editBtn(article);
  };
  return (
    <div>
      {props.articles &&
        props.articles.map((article) => {
          return (
            <div key={article.id}>
              <h2>{article.Title}</h2>
              <p>{article.Description}</p>
              <div className="container">
                <div className="row">
                  <button
                    className="btn btn-info "
                    onClick={() => editBtn(article)}
                  >
                    Update
                  </button>

                  <button
                    className="btn btn-danger"
                    style={{ marginLeft: "30px" }}
                  >
                    Delete
                  </button>
                </div>
                <hr></hr>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ArticleList;
