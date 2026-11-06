import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import BlogDetails from "./pages/BlogDetails";
import CreateBlog from "./pages/CreateBlog";
import About from "./pages/About";

import { initialBlogs } from "./data/blogs";

function App() {
  const [blogs, setBlogs] = useState(() => {
    try {
      const savedBlogs = localStorage.getItem("blogs");

      return savedBlogs
        ? JSON.parse(savedBlogs)
        : initialBlogs;
    } catch {
      return initialBlogs;
    }
  });

  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <Home blogs={blogs} setBlogs={setBlogs} />
          }
        />

        <Route
          path="/blog/:id"
          element={
            <BlogDetails blogs={blogs} setBlogs={setBlogs} />
          }
        />

        <Route
          path="/create"
          element={
            <CreateBlog blogs={blogs} setBlogs={setBlogs} />
          }
        />

        <Route
          path="/edit/:id"
          element={
            <CreateBlog blogs={blogs} setBlogs={setBlogs} />
          }
        />

        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;