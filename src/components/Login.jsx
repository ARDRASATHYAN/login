"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ZerodhaStyleLogin() {
  const [user, setUser] = useState({ userid: "", password: "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    alert(`Logging in as ${user.userid}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f9fa] px-4">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-sm bg-white rounded-[5px] shadow-2xl border border-gray-200"
      >
        <div className="p-8 flex flex-col items-center">
         <img src="/kite-logo.svg" alt="Zerodha Logo" 

            className="w-[60px] h-[60px] mb-8"
          />

          <h1 className="text-2xl font-medium text-gray-800 mb-10">
            Login to Kite
          </h1>

          {/* User ID Field */}
          <div className="relative w-full mb-8">
            <input
              type="text"
              id="userid"
              name="userid"
              value={user.userid}
              onChange={handleChange}
              placeholder=" "
              autoComplete="off"
              className="peer h-12 w-full rounded-[3px] border border-[#ddd] bg-transparent px-3 text-[#444] 
                         focus:border-[#aaa] focus:outline-none autofill:bg-transparent"
            />
            <label
              htmlFor="userid"
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white px-1 text-[#9B9B9B] text-base transition-all duration-200
                         peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base
                         peer-focus:top-0 peer-focus:-translate-y-[50%] peer-focus:text-[11px] peer-focus:text-[#444]
                         peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-[50%] 
                         peer-[&:not(:placeholder-shown)]:text-[11px] peer-[&:not(:placeholder-shown)]:text-[#444]
                         before:content-[''] before:absolute before:left-1 before:right-0 before:top-1/2 before:-translate-y-1/2 
                         before:h-2 before:bg-white before:z-[-1]"
            >
              Phone number or User ID
            </label>
          </div>

          {/* Password Field */}
          <div className="relative w-full mb-8">
            <input
              type="password"
              id="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder=" "
              autoComplete="new-password"
              className="peer h-12 w-full rounded-[3px] border border-[#ddd] bg-transparent px-3 text-[#444] 
                         focus:border-[#aaa] focus:outline-none autofill:bg-transparent"
            />
            <label
              htmlFor="password"
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white px-1 text-[#9B9B9B] text-base transition-all duration-200
                         peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base
                         peer-focus:top-0 peer-focus:-translate-y-[50%] peer-focus:text-[11px] peer-focus:text-[#444]
                         peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-[50%] 
                         peer-[&:not(:placeholder-shown)]:text-[11px] peer-[&:not(:placeholder-shown)]:text-[#444]
                         before:content-[''] before:absolute before:left-1 before:right-0 before:top-1/2 before:-translate-y-1/2 
                         before:h-2 before:bg-white before:z-[-1]"
            >
              Password
            </label>
          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="w-full bg-[#387ed1] hover:bg-[#2d6db8] text-white text-md font-medium py-2 rounded-[5px] transition-colors duration-200"
          >
            Login
          </button>

          {/* Forgot Password */}
          <div className="text-sm text-gray-500 w-full text-center mt-4">
            <a
              href="#"
              className="text-[#9B9B9B] hover:text-[#575555] font-medium"
            >
              Forgot password?
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
