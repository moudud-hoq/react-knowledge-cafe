import PropTypes from "prop-types";
import BookmarkComponent from "./../../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="md:h-1/3 bg-red-50 p-4 rounded-b-xl">
      <h2 className="text-center">
        <strong>Bookmarks:</strong> {bookmarks.length}
      </h2>
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
};

export default Bookmarks;
