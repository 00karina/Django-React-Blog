import React from "react";

const ArticleList = ({ id, title, description }) => {
  return (
    <div>
      <div className="container border-bottom pt-3">
        <div className="row">
          <h5>{title}</h5>
          <p>{description}</p>
          <button className="btn btn-info ">Update</button>
          <button className="btn btn-danger" style={{ marginLeft: "30px" }}>
            Delete
          </button>
        </div>
        <hr></hr>
      </div>
    </div>
  );
};

export default ArticleList;
