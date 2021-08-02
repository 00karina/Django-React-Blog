import React, { useState } from "react";

const Form = ({ addArticle }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const addTodoHandle = (e) => {
    e.preventDefault();
    addArticle({
      Title: title,
      Description: description,
    });
  };

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Enter title"
          onChange={(ea) => setTitle(ea.target.value)}
        ></input>
        <label htmlFor="Description" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="Description"
          placeholder="Enter Description"
          onChange={(ea) => setDescription(ea.target.value)}
        ></textarea>
        <br />
        <button class="btn btn-success" onClick={addTodoHandle} type="submit">
          Insert Article
        </button>
      </div>
    </div>
  );
};

export default Form;
