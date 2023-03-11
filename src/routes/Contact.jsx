import React from "react";
import {} from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Navbar from "../components/Navbar";
import contactbg from "../resourse/contactbg.jpg";
const Contact = () => {
  return (
    <div className="bg-black/50">
      <section>
        {" "}
        <img
          src={contactbg}
          alt=""
          className="fixed -z-10 h-screen w-full object-cover"
        />
      </section>
      <section className="text-white">
        <Navbar />
      </section>
      <div className="flex flex-col justify-center h-[40vh] ">
        <h1 className="text-7xl mx-auto  font-light text-white">Contact Us</h1>
      </div>
      <section className="bg-gray-200/90 px-4 py-10 flex flex-col gap-4 sm:flex-row ">
        <div className="sm:w-[50%] w-full">
          <h1 className="text-2xl ">CONTACT US</h1>
          <p className="text-gray-600 my-5 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <form className="flex flex-col gao-2 text-xl font-thin my-5">
            <label>name</label>
            <input
              className="border p-1 border-red-200 rounded-sm w-full mb-2  text-base"
              type="text"
              placeholder="name"
            />
            <label>Email</label>
            <input
              className="border p-1 border-red-200 rounded-sm w-full mb-2 text-base "
              type="text"
              placeholder="email"
            />
            <label>Phone</label>
            <input
              className="border p-1 border-red-200 rounded-sm w-full mb-2 text-base "
              type="text"
              placeholder="phone"
            />
            <label>Your Message</label>
            <textarea
              className="w-full p-1 px-2 text-base"
              rows="5"
              placeholder="start writing from here"
            ></textarea>
            <button className="border border-black hover:bg-black hover:text-white px-4 py-1 rounded-md w-fit my-5">
              Send
            </button>
          </form>
        </div>
        <div className="px-4 sm:w-[50%] w-full">
          <div>
            <h1 className="text-2xl">NEED HELP</h1>
            <h1 className="mt-4">Email:-</h1>
            <p>rishu2207soni@gmail.com</p>
            <p className="text-gray-600 my-5 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>
          <div className="my-10">
            <h1 className="text-2xl">CUSTOMER CARE</h1>
            <p className="text-gray-600 mt-5 mb-2 ">AVAILABLE 24/7 FOR YOU</p>
            <h1 className="text-blue-500 text-3xl font-semibold ">
              800-275-0002
            </h1>
          </div>
          <u className="flex gap-8 items-center ">
            <a href="/">
              <li className="  list-none  text-red-600  ">
                <FaInstagram size={35} />
              </li>
            </a>
            <a href="/">
              <li className="  list-none   text-blue-900 ">
                <FaFacebookF size={28} />
              </li>
            </a>

            <a href="/">
              {" "}
              <li className=" list-none   text-blue-500 ">
                <FaTwitter size={30} />
              </li>
            </a>
          </u>
        </div>
      </section>
    </div>
  );
};

export default Contact;
