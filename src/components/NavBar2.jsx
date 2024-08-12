import React from "react";

import { Link } from "react-router-dom";

function NavBar2() {
  return (
    <div className="flex space-x-8 items-center  bg-gray-600  h-15 p-3  ">
      <div className="flex space-x-8 items-center  bg-gray-600  h-15 p-3  ">
        <Link
          to="/getdetails"
          className="cursor-pointer text-black text-xl font-bold hover:text-pink-900 ml-5"
        >
          GetDetails
        </Link>
      </div>
      <div className="">
        <Link
          to="/savepassword"
          className="cursor-pointer text-black font-bold text-xl hover:text-pink-900 mr-10"
        >
          Save-Password
        </Link>
      </div>
      <div>
        <Link
          to="/allpasswords"
          className="cursor-pointer text-black font-bold text-xl hover:text-pink-900 mr-10"
        >
          Show Passwords
        </Link>
      </div>
      <div className="">
        <Link
          to="/logout"
          className="cursor-pointer text-black font-bold text-xl hover:text-pink-900 mr-10"
        >
          Logout
        </Link>
      </div>
      
    </div>
  );
}

export default NavBar2;
