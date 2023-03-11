import React from "react";

const ForgotPassword = () => {
  return (
    <div className="px-4 my-10">
      <div className="bg-gray-100 border-l-2 border-red-500 px-4 py-5 ">
        <h1 className="text-3xl font-semibold text-gray-700">
          Enter you registerd email{" "}
        </h1>
        <form>
          <input
            type="email"
            className="px-3 my-5 py-2 outline-none border border-red-400/40 max-w-[300px] w-full"
          />
          <br />
          <button className="px-6 py-2 rounded-full bg-blue-900 text-white">
            get link
          </button>
        </form>
        <h1 className="mt-5">
          <a className=" underline  text-sm text-blue-400" href="/">
            back to home -{">"}
          </a>
        </h1>
      </div>
    </div>
  );
};

export default ForgotPassword;
