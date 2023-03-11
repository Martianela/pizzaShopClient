import React from "react";
import { GiFullPizza } from "react-icons/gi";
import signupImg from "../resourse/signupimg.jpg";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { createUser } from "../utility";
const Signup = () => {
  async function signup(e) {
    e.preventDefault();
    let newUser = {
      name: e?.target.name.value,
      email: e?.target.email.value,
      password: e?.target.password.value,
      confirmPassword: e?.target.confirmPassword.value,
      role: e?.target.role.value,
    };
    console.log(newUser);
    const response = await createUser(newUser);
    if (response) {
      window.alert(response?.data.message);
      if (response?.status === 200) {
        window.location.href = "/user/login";
      }
    }
  }
  return (
    <div className="flex">
      <div className="hidden sm:block relative xl:w-[40&] max-w-[700px]">
        <img src={signupImg} alt="" className="h-screen w-full object-cover" />
        <div className=" text-white absolute top-0 left-0 bg-black/60  w-full h-screen">
          <div className="flex flex-col justify-center h-screen gap-4 mx-4">
            <h1 className=" mx-auto max-w-fit text-[200px] ">
              <GiFullPizza />
            </h1>
            <h1 className="text-7xl font-[800] text-center">Pizza</h1>
            <p className="text-4xl my-3 font-[400] text-center leading-snug">
              Freshly baked pizza, crafted just for you with every order.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:mx-20 mx-10 my-10 w-full flex flex-col justify-center">
        <h1 className="text-5xl text-gray-600 font-bold">Create account </h1>
        <form
          onSubmit={(e) => signup(e)}
          className="flex flex-col text-lg font-light my-10"
        >
          <label>Name</label>
          <input
            type="text"
            name="name"
            required
            className="border-2 border-black/40 w-full sm:max-w-[400px] mb-3 px-3 py-1 rounded-sm"
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            required
            className="border-2 border-black/40 w-full sm:max-w-[400px] mb-3 px-3 py-1 rounded-sm"
          />
          <label>Role</label>
          <select
            className="border-2 border-black/40 w-full sm:max-w-[400px] mb-3 px-3 py-1 rounded-sm"
            name="role"
            required
          >
            <option value="user">User</option>{" "}
            <option value="admin">Admin</option>
          </select>
          <label>Password</label>
          <input
            type="password"
            name="password"
            required
            className="border-2 border-black/40 w-full sm:max-w-[400px] mb-3 px-3 py-1 rounded-sm"
          />
          <label>ConfirmPassword</label>
          <input
            type="password"
            name="confirmPassword"
            required
            className="border-2 border-black/40 w-full sm:max-w-[400px]  px-3 py-1 rounded-sm"
          />
          <button
            type="submit"
            className="mt-10 bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-black  max-w-[400px] w-full"
          >
            Create account
          </button>
        </form>
        <div>
          <ul className="flex gap-4">
            <a href="/">
              <li className="bg-blue-500 rounded-full w-fit p-2 text-white">
                <FaFacebookF size={25} />
              </li>{" "}
            </a>
            <a href="/">
              {" "}
              <li className="bg-red-600 rounded-full w-fit p-2 text-white">
                <SiGmail size={25} />
              </li>{" "}
            </a>
            <a href="/">
              {" "}
              <li className="bg-blue-500 rounded-full w-fit p-2 text-white ">
                <FaTwitter size={25} />
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Signup;
