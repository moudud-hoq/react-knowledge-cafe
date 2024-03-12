import "./App.css";
import Header from "./components/Header";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";

function App() {

  return (
    <>
      <Header />
      <div className="md:flex max-w-6xl mx-auto">
        <Blogs />
        <Bookmarks />
      </div>
    </>
  );
}

export default App;
