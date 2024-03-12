import "../../../public/blogs.json";
import "../Blog/Blog";

import { useEffect, useState } from "react";
import Blog from "../Blog/Blog"; // Import the Blog component

const Blogs = ({ handleAddToBookmark }) => {
  //01.1
  const [blogs, setBlogs] = useState([]);

  //01.2 to load data use useEffect
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="md:w-2/3">
      <h1>Blogs: {blogs.length}</h1>
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handleAddToBookmark={handleAddToBookmark}
        ></Blog>
      ))}
      ;
    </div>
  );
};

export default Blogs;
