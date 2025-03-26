import React from "react";

const Login = () => {
  return (
    <section className="max-container">
      <div className="min-h-[calc(82.8vh)] flex items-center justify-center ">
        <div className="w-full max-w-sm px-5 pt-4 pb-5 shadow-xl  border border-gray-200 rounded-xl">
          <h3 className="text-xl font-bold">Create an account</h3>
          <p className="text-gray-500">Enter your email below to create your account</p>
          <div className="flex items-center justify-center gap-4 my-6">
            <button className="w-full h-10 text-sm font-semibold border border-gray-200 rounded-md">Github</button>
            <button className="w-full h-10 text-sm font-semibold border border-gray-200 rounded-md">Google</button>
          </div>
          <div className="flex items-center gap-4 mb-3">
            <div className="w-full h-px bg-gray-200 rounded-full"></div>
            <div className="flex-shrink-0 text-xs text-gray-500 uppercase -mb-px ">Or continue with</div>
            <div className="w-full h-px bg-gray-200 rounded-full"></div>
          </div>
          <form action="">
            <label htmlFor="email" className="text-sm font-semibold ">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="block w-full px-3 h-10 border border-gray-200 rounded-md mt-1 mb-2 text-sm"
            />
            <label htmlFor="email" className="text-sm font-semibold">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your Password"
              className="block w-full px-3 h-10 border border-gray-200 rounded-md text-sm mt-1 mb-2"
            />

            <button type="submit" className="block w-full h-10 text-sm font-semibold text-white bg-blue-600 rounded-md mt-4 ">
              Create account
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
