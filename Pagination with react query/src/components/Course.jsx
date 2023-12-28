import React from "react";
import { Link } from "react-router-dom";

function Course({ id, title, price }) {
  return (
    <div className="col mb-4">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <Link to={`/courses/${id}`}>
            <h5 className="card-title">{title}</h5>
          </Link>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            Price: {price}
          </h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to={`/courses/${id}`} className="card-link">
            More Info
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Course;
