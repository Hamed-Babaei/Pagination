import React, { useEffect, useState } from "react";
import Course from "../components/Course";
import Count from "../components/Count";
import { useQuery } from "react-query";
import useCourses from "../hooks/useCourses";

function Courses() {
  const [page, setPage] = useState(1);

  const { data, isLoading, error, isError, isFetching, refetch } =
    useCourses(page);

  // const [data, setData] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const callApi = async () => {
  //     setIsLoading(true);
  //     const res = await fetch("http://localhost:4000/courses");
  //     const responseData = await res.json();
  //     console.log(responseData);
  //     setData(responseData);
  //     setIsLoading(false);
  //   };

  //   callApi();
  // }, []);

  if (isError) {
    return (
      <h1 className="alert alert-danger mt-4 text-center">
        Error - {error.message}
      </h1>
    );
  }

  if (isLoading) {
    return (
      <h1 className="alert alert-primary mt-4 text-center">Is Loading ...</h1>
    );
  }

  return (
    <>
      {isFetching && (
        <h1 className="alert alert-primary mt-4 text-center">Is Loading ...</h1>
      )}
      <h1 className="mt-4 text-center">
        Sabzlearn Courses / Count: <Count /> -{" "}
        <button onClick={refetch}>ReFetch</button>
      </h1>
      <div className="container mt-3">
        <div className="row">
          {data?.map((item) => (
            <Course key={item.id} {...item} />
          ))}
        </div>
        <div className="d-flex justify-content-center">
          <nav aria-label="...">
            <ul class="pagination">
              <li class={`page-item ${page === 1 ? "disabled" : null}`}>
                <a
                  class="page-link"
                  onClick={() => setPage((prev) => prev - 1)}
                >
                  Previous
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  {page}
                </a>
              </li>
              <li class={`page-item ${page === 4 ? "disabled" : null}`}>
                <a
                  class="page-link"
                  onClick={() => setPage((prev) => prev + 1)}
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Courses;
