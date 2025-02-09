import { useContext, useEffect, useState } from "react";

import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);

  //Selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(`cart items`, cartItems);

  // if no dependency array => useEffect is called on every render(login/logout toggle button)
  // if dependency array is empty = [] => useEffect is called on inital render(just once)
  // if dependency array is not empty [btnName] =>useEffect is called everytime when btnName is updated.

  useEffect(() => {
    // console.log("useEffect called");
  }, [btnName]);

  return (
    <div className="flex justify-between bg-pink-100 sm:bg-yellow-50 lg:bg-green-50 shadow-lg">
      <div className="logo-Container">
        <img className="w-36 " src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-6 m-6">
          <li className="px-4">Online Status:{onlineStatus ? " ✅" : " 🚫"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-semibold">
            <Link to="/cart"> Cart - ({cartItems.length} items)</Link>
          </li>
          <button
            className="px-5 bg-red-300 border border-solid border-pink-950"
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-4">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
