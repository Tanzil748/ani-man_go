import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userAuth } from "../context/AuthContext";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register, user } = userAuth();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await register(email, password);
      navigate("/ani-man_go/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <form
        className="bg-card w-96 text-white rounded px-4 py-8"
        onSubmit={submitHandler}
      >
        <div className="space-y-3">
          <h1 className="text-center text-2xl font-semibold">Register</h1>
          <hr />
          <div>
            <label htmlFor="email" className="text-xl">
              Email:{" "}
            </label>
            <input
              type="email"
              id="email"
              className="border w-full p-2 outline-none text-black"
              placeholder="Enter email address..."
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div>
            <label htmlFor="password" className="text-xl">
              Password:{" "}
            </label>
            <input
              type="password"
              id="password"
              className="border w-full p-2 outline-none text-black"
              placeholder="Enter password..."
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button className="w-full py-2 bg-amber-500 rounded">
            Register Account
          </button>
          <div className="text-sm">
            <p>Already have an account?</p>
            <Link to="/signIn" className="border-b-2">
              Sign In
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
