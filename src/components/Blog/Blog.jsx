import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";
import { CiRead } from "react-icons/ci";

const Blog = ({ blog }) => {
  const { cover, id, author, authorImg, posted_date, reading_time } = blog;
  return (
    <div className="border p-4 m-4 rounded-xl bg-slate-200">
      <div>
        <img src={cover} alt="" />
      </div>
      <div>
        <img src={authorImg} alt="" />

        <p className="text-2xl">{author}</p>
        <p className="text-2xl">{posted_date}</p>
        <p className="text-2xl">{id}</p>
        <p className="text-2xl">{reading_time}</p>
        <hr />
        <div className="flex justify-between p-6 border-2 border-rose-950 rounded-xl">
          <button >
            <CiBookmark />
          </button>
          <hr />
          <button>
            <CiRead />
          </button>
        </div>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
