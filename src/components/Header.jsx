import profile from "./images/profile.png";
const Header = () => {
  return (
    <div className="HeaderMainDiv flex justify-between items-center min-h-24 px-10 border">
      <h1 className="text-2xl font-bold text-center p-4">Knowledge Cafe</h1>
      <img src={profile} alt="" />
      <hr />
    </div> 
  );
};

export default Header;
