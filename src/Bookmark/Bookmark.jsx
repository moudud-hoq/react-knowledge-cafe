import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div className="bg-slate-200 rounded-xl p-4 m-2">
      <h3 className="font-bold text-sm">{title}</h3>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.shape({
    title: PropTypes.string.isRequired,
    // Add more PropTypes for other properties if necessary
  }).isRequired,
};

export default Bookmark;
