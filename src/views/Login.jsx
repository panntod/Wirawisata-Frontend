import React from "react";
import {
  IoArrowForwardOutline,
  IoLockClosedOutline,
  IoMailOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";

import Banner from "@/components/atomic/Banner";
import { H1, P } from "@/components/global/Text";

export default function Login() {
  return (
    <main className="flex h-screen w-full overflow-hidden">
      <div className="hidden md:flex justify-center items-center px-24 py-12 w-1/2">
        <Banner />
      </div>

      <div className="flex justify-center items-center relative md:p-24 w-full md:w-1/2 bg-secondary">
        <Link
          to="/"
          className="absolute top-10 right-10 hover:scale-110 transition duration-300"
        >
          <IoArrowForwardOutline className="text-white text-xl" />
        </Link>
        <form className="w-full p-12">
          <H1 className="text-white text-center mb-12">Login Page</H1>

          <div className="mb-4">
            <div className="flex items-center bg-gray-200 text-gray-400 rounded-md p-2">
              <IoMailOutline className="mr-2 text-black" />
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent focus:outline-none text-black w-full"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <div className="flex items-center bg-gray-200 text-gray-400 rounded-md p-2">
              <IoLockClosedOutline className="mr-2 text-black" />
              <input
                type="password"
                placeholder="Password"
                className="bg-transparent focus:outline-none text-black w-full"
                required
              />
            </div>
          </div>

          <div className="mb-6 flex justify-between">
            <div className="flex">
              <input type="radio" />
              <P className="text-white ms-2">Remember Me</P>
            </div>

            <Link to="/">
              <P className="text-white hover:text-neutral-200">
                Forgot Password
              </P>
            </Link>
          </div>

          <div className="flex justify-center mb-6">
            <button
              type="submit"
              className="w-3/4 bg-main text-white py-2 rounded-full shadow-lg hover:bg-cyan-500 hover:scale-105"
            >
              Login
            </button>
          </div>

          <P className="text-center text-white">
            Dont have any account?{" "}
            <Link
              to="/register"
              className="ms-1 font-semibold hover:text-neutral-200"
            >
              Register Here
            </Link>
          </P>
        </form>
      </div>
    </main>
  );
}
