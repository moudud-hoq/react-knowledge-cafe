const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="md:h-1/3">
      <h2>Bookmarks:{bookmarks.length}</h2>
    </div>
  );
};

export default Bookmarks;
