"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";

const Login = () => {
  return (
    <div className="h-screen customBg flex flex-col justify-center items-center text-center">
      <Image
        src="https://i.postimg.cc/W1HFnP4Y/Chat-GPT-Logooptimized-610x610.png"
        height={100}
        width={50}
        alt="siteLogo"
      />
      <button
        onClick={() => signIn("google")}
        className="bg-pink-200 py-3 px-4 rounded-lg my-3 animate-pulse"
      >
        SignIn to use AiChat
      </button>
    </div>
  );
};

export default Login;
