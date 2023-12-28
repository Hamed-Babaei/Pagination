import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import useCourse from "../hooks/useCourse";

function SingleCourse() {
  const { id } = useParams();

  const { data, isLoading } = useCourse(id);

  //   const [data, setData] = useState([]);
  //   const [isLoading, setIsLoading] = useState(false);

  //   useEffect(() => {
  //     const callApi = async () => {
  //       setIsLoading(true);
  //       const res = await fetch(`http://localhost:4000/courses/${id}`);
  //       const responseData = await res.json();
  //       console.log(responseData);
  //       setData(responseData);
  //       setIsLoading(false);
  //     };

  //     callApi();
  //   }, []);

  if (isLoading) {
    return (
      <h1 className="alert alert-primary text-center mt-4">Is Loading ...</h1>
    );
  }

  return (
    <h1>
      {data.title} - Price: {data.price}
    </h1>
  );
}

export default SingleCourse;
