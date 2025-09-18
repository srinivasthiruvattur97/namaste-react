import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between sm:bg-yellow-700 lg:bg-amber-500 shadow-lg">
      <div className="logo w-50 bg-blue-200">
        <Link to="/">
          <img className="logo-image" src={LOGO_URL} alt="logo" />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex m-2 p-2 bg-white text-black">
          <li className="px-4 ">
            Online Status : {onlineStatus ? "✅" : "❌"}
          </li>
          <li className="px-4 ">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4 ">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 ">Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
