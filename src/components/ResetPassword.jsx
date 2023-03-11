import React from "react";

const ResetPassword = () => {
  return (
    <div>
      <div className="px-4 my-10">
        <div className="bg-gray-100 border-l-2 border-red-500 px-4 py-5 ">
          <h1 className="text-3xl font-semibold text-gray-700">
            Reset your password
          </h1>
          <form className="text-lg font-light flex flex-col">
            <label className="mt-10">Password</label>
            <input
              type="password"
              className="px-3 mb-5 py-2 outline-none border border-red-400/40 max-w-[300px] w-full"
            />{" "}
            <label>Confirm-Password</label>
            <input
              type="password"
              className="px-3 mb-5 py-2 outline-none border border-red-400/40 max-w-[300px] w-full"
            />
            <br />
            <button className="px-16 py-2 rounded-full w-fit bg-blue-900 text-white">
              Reset password
            </button>
          </form>
          <h1 className="mt-5">
            <a className=" underline  text-sm text-blue-400" href="/">
              back to home -{">"}
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
