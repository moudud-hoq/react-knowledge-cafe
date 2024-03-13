import PropTypes from "prop-types";
import BookmarkComponent from "./../../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:h-1/3 bg-red-50 p-4 rounded-b-xl">
      <div>
        <h2 className="text-center p-5">
          <strong>Reading Time:</strong> {readingTime}
        </h2>
        <hr />
      </div>
      <div>
        <h2 className="text-center pt-5">
          <strong>Bookmarks:</strong> {bookmarks.length}
        </h2>
      </div>
      {bookmarks.map((bookmark) => (
        <BookmarkComponent
          key={bookmark.id}
          bookmark={bookmark}
        ></BookmarkComponent>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number,
};

export default Bookmarks;
