import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import AuthContext from "../services/AuthContext";
import { useContext } from "react";
import { GoSun } from "react-icons/go";
import { FaRegMoon } from "react-icons/fa";
import ThemeContext from "../services/ThemeContext";

const Navbar = () => {
  const { dark, setDark } = useContext(ThemeContext);
  console.log(dark);
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-12">
      <div className="flex justify-between items-center py-4">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="flex gap-3 md:gap-8">
          <button
            onClick={() => {
              setDark(!dark);
            }}
            className="bg-button dark:bg-light-white px-2 md:px-4 py-1 md:py-2 rounded-lg font-bold hover:bg-btn-hover transition duration-150 ease-in-out cursor-pointer"
          >
            {dark ? <GoSun></GoSun> : <FaRegMoon></FaRegMoon>}
          </button>
          <Link to={"/login"}>
            <button className="bg-button dark:bg-light-white  px-2 md:px-4 py-1 md:py-2 rounded-lg font-bold hover:bg-btn-hover transition duration-150 ease-in-out cursor-pointer">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
