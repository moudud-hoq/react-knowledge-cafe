import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Blogs from "./Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="md:flex">
        <Blogs />
        <Bookmarks />
      </div>
    </>
  );
}

export default App;
