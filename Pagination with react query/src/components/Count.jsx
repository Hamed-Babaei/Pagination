import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import useCourses from "../hooks/useCourses";

function Count() {
  const { data } = useCourses();

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const callApi = async () => {
  //     const res = await fetch("http://localhost:4000/courses");
  //     const responseData = await res.json();
  //     console.log(responseData);
  //     setData(responseData);
  //   };

  //   callApi();
  // }, []);

  return data?.length;
}

export default Count;
