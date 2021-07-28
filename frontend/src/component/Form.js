import React, { useState, useEffect } from "react";
import APIService from "./APIService";
const Form = (props) => {
  const [Title, setTitle] = useState(props.article.Title);
  const [Description, setDescription] = useState(props.article.Description);

  useEffect(() => {
    setTitle(props.article.Title);
    setDescription(props.article.Description);
  }, [props.article]);
  const updateArticle = () => {
    APIService.UpdateArticle(props.article.id, { Title, Description }).then(
      (resp) => props.updatedInfo(resp)
    );
  };
  const InsertArticle = () => {
    APIService.InsertArticle({ Title, Description }).then((resp) =>
      props.InsertInfo(resp)
    );
  };

  return (
    <div>
      {props.article ? (
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter title"
            value={Title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>

          <label htmlFor="Description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="Description"
            placeholder="Enter Description"
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          {props.article.id ? (
            <button onClick={updateArticle} class="btn btn-success">
              Update Article
            </button>
          ) : (
            <button onClick={InsertArticle} class="btn btn-success">
              Insert Article
            </button>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Form;
