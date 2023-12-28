import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Courses from "./pages/Courses";
import Home from "./pages/Home";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import SingleCourse from "./pages/SingleCourse";

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        cacheTime: 7000,
      },
    },
  });

  return (
    <QueryClientProvider client={client}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<SingleCourse />} />
      </Routes>
      <ReactQueryDevtools position="top-right" initialIsOpen={true} />
    </QueryClientProvider>
  );
}

export default App;
