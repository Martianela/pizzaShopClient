import React from "react";

const Profile = ({ user }) => {
  return (
    <div className=" text-white w-full">
      <div className="flex flex-col sm:flex-row gap-10 items-center">
        <img
          src="https://cdn.pixabay.com/photo/2021/03/02/16/34/woman-6063087__340.jpg"
          alt=""
          className="rounded-[100%] w-32 h-32 object-cover"
        />
        <h1 className="text-3xl font-semibold ">
          {user ? user?.name : "user name"}
        </h1>
      </div>
      <div>
        <form className="text-xl font-light flex flex-col gap-2 px-2 my-10">
          <label htmlFor="">Your Email</label>
          <input
            type="email"
            value={user?.email ? user?.email : "email"}
            className=" mb-4 text-sm bg-inherit outline-none border-b border-black"
          />
          <label htmlFor="">Your Password</label>
          <input
            type="Password"
            value={user?.password ? user?.password : "password"}
            className=" mb-4 text-sm bg-inherit outline-none border-b border-black"
          />
          <label htmlFor="">Phone Number</label>
          <input
            type="number"
            value="12344567"
            className=" mb-4 text-sm bg-inherit outline-none border-b border-black"
          />{" "}
          <label htmlFor="">Role</label>
          <input
            type="text"
            value={user?.role ? user?.role : "role"}
            className=" mb-4 text-sm bg-inherit outline-none border-b border-black"
          />
        </form>
        <div className="w-full">
          <a
            href="# "
            className="bg-red-500 text-white text-lg font-light px-6 py-2 rounded-full "
          >
            Update
          </a>
        </div>
      </div>
    </div>
  );
};
export default Profile;
