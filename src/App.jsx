import "./App.css";
import Header from "./components/Header";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import { useState } from "react";

function App() {
  // Bookmark Adding 05.01
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark=blog=>{
    console.log('object');
  }

  return (
    <>
      <Header />
      <div className="md:flex max-w-6xl mx-auto">
        <Blogs handleAddToBookmark={handleAddToBookmark} />
        <Bookmarks />
      </div>
    </>
  );
}

export default App;
