import React from "react";
import { useQuery } from "react-query";

function useProducts(page) {
  return useQuery(
    ["Courses", page],
    () => {
      return fetch(`http://localhost:4000/courses?_limit=2&_page=${page}`).then(
        (res) => res.json()
      );
    },
    {
      keepPreviousData: true,
      select: (data) => {
        return data.map((course) => ({
          ...course,
          title: course.title.toLowerCase(),
          price: course.price.toLocaleString(),
        }));
      },
      onSuccess: (data) => {
        console.log("Success", data);
      },
      onError: (error) => {
        console.log("Error !!", error);
      },
    }
  );
}

export default useProducts;
