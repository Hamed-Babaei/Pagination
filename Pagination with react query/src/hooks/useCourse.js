import React from "react";
import { useQuery, useQueryClient } from "react-query";

function useCourse(id) {
  const queryClient = useQueryClient();

  return useQuery(
    ["SingleCourse", id],
    (query) => {
      return fetch(`http://localhost:4000/courses/${query.queryKey[1]}`).then(
        (res) => res.json()
      );
    },
    {
      // cacheTime: 6000,
      initialData: () => {
        const courses = queryClient.getQueryData(["Courses"]);
        const course = courses?.find((course) => course.id === +id);

        return course;
      },
    }
  );
}

export default useCourse;
