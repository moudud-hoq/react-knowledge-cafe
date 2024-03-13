import "../../../public/blogs.json";
import "../Blog/Blog";
import { useEffect, useState } from "react";
import Blog from "../Blog/Blog"; // Import the Blog component
import PropTypes from "prop-types";

const Blogs = ({ handleAddToBookmark, handleMarkAsRead }) => {
  //01.1
  const [blogs, setBlogs] = useState([]);

  //01.2 to load data use useEffect
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="md:w-2/3 bg-blue-50 p-4 mr-2">
      <h1 className="text-center ">
        <strong className="shadow-2xl">Blogs:</strong> {blogs.length}
      </h1>
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handleAddToBookmark={handleAddToBookmark}
          handleMarkAsRead={handleMarkAsRead}
        ></Blog>
      ))}
    </div>
  );
};

Blogs.propTypes = {
  handleAddToBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};
export default Blogs;
