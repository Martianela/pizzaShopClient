import axios from "axios";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { GiFullPizza } from "react-icons/gi";
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function login(e) {
    e.preventDefault();
    let obj = {
      email: email,
      password: password,
    };
    console.log(password);
    axios
      .post("http://localhost:3001/user/login", obj, {
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => {
        try {
          if (res.data?.userData?.email === email) {
            console.log(res.id);
            Cookies.set("user", res?.id);
            window.location.href = "/";
            window.alert(res.data.message);
          } else {
            window.alert(res.data.message);
          }
        } catch (error) {
          window.alert(error.message);
        }
      });
  }

  return (
    <div
      method="post"
      className="mx-auto max-w-fit backdrop-blur p-10 rounded-xl bg-black/40 text-white"
    >
      <h1 className="text-5xl font-bold text-center flex items-center gap-2">
        <span className="items-center">
          <GiFullPizza />
        </span>
        <span>Pizza</span>
      </h1>
      <form
        onSubmit={(e) => login(e)}
        className="flex w-64 flex-col mt-10 gap-2 text-sm font-light"
      >
        <label htmlFor="input">Email</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className=" outline-none   bg-inherit border-b border-black"
        />
        <label>password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-inherit border-b border-black outline-none"
        />
        <a href="/user/forgetpassword" className="hover:text-red-200">
          forget password
        </a>
        <button
          type="submit"
          className="bg-red-400 px-6 py-2 rounded-lg text-lg mt-8"
        >
          login
        </button>
      </form>{" "}
      <a href="/user/signup">
        <button className="mt-4 w-full bg-black/60 px-6 py-2 rounded-lg text-lg">
          signup
        </button>
      </a>
    </div>
  );
};

export default Login;
