import React, { useState } from "react";
import { GiFullPizza } from "react-icons/gi";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import Cookies from "js-cookie";
import { logout } from "../utility";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [click, setClick] = useState(false);
  return (
    <>
      <div
        className={
          !click
            ? "  p-2 flex justify-between items-center"
            : "  p-2 flex justify-between items-center sm:bg-black/30 bg-black/75"
        }
      >
        <div className="items-center flex">
          <GiFullPizza className="text-[35px]" />
          <h1 className="text-[35px] font-bold ">Pizza</h1>
        </div>
        <div>
          <ul className="hidden sm:flex gap-8 items-center text-lg font-light">
            <li>
              <Link to="/">Home</Link>
            </li>{" "}
            <li>
              <Link to="/contact">Contact</Link>
            </li>{" "}
            <li>
              {Cookies.get("user") ? (
                <Link to="/user/userProfile">Profile</Link>
              ) : (
                <Link to="/user/signup">SignUp</Link>
              )}
            </li>{" "}
            <li className="">
              {Cookies.get("user") ? (
                <Link onClick={logout} href="/">
                  logout
                </Link>
              ) : (
                <Link href="/user/login">login</Link>
              )}
            </li>
          </ul>
          <div
            className="sm:hidden text-xl font-light"
            onClick={() => setClick(!click)}
          >
            {click ? <RxCross1 /> : <AiOutlineMenu />}
          </div>
        </div>
      </div>
      {click && (
        <div className="sm:hidden w-full absolute text-white bg-black/75  text-center py-5">
          <ul className="flex flex-col gap-4 items-center text-lg font-light">
            <li>
              <Link to="/">Home</Link>
            </li>{" "}
            <li>
              <Link to="/contact">Contact</Link>
            </li>{" "}
            <li>
              {Cookies.get("user") ? (
                <Link to="/user/userProfile">Profile</Link>
              ) : (
                <Link to="/user/signup">SignUp</Link>
              )}
            </li>{" "}
            <li className="bg-red-500 px-10 py-3 rounded-full">
              {Cookies.get("user") ? (
                <Link onClick={logout} href="/">
                  logout
                </Link>
              ) : (
                <Link to="/user/login">login</Link>
              )}
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
export default Navbar;
