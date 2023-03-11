import React from "react";

const EditProfile = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen ">
      <div className="p-3 w-max mx-auto">
        <h1 className="text-4xl font-base text-red-500">Update your Profile</h1>
        <form
          //onSubmit={(e) => update(e)}
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
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
