import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div>
      <div className="bg-gray-100 min-h-screen flex">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center font-bold text-purple-600">
              Sign up
            </h1>
            <input
              type="text"
              className="block border border-gray-300 focus:border-purple-500 w-full p-3 rounded mb-4"
              name="fullname"
              placeholder="Full Name"
            />

            <input
              type="text"
              className="block border border-gray-300 focus:border-purple-500 w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
            />

            <input
              type="password"
              className="block border border-gray-300 focus:border-purple-500 w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
            />
            <input
              type="password"
              className="block border border-gray-300 focus:border-purple-500 w-full p-3 rounded mb-4"
              name="confirm_password"
              placeholder="Confirm Password"
            />

            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-purple-600 text-white hover:bg-purple-700 focus:outline-none my-1"
            >
              Create Account
            </button>

            <div className="text-center text-sm text-gray-600 mt-4">
              By signing up, you agree to the{' '}
              <a
                className="no-underline border-b border-gray-600 text-gray-600 hover:text-purple-600"
                href="#"
              >
                Terms of Service
              </a>{' '}
              and{' '}
              <a
                className="no-underline border-b border-gray-600 text-gray-600 hover:text-purple-600"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          <div className="text-gray-600 mt-6">
            Already have an account?{' '}
            <Link to={'/Login'}>
              <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 ml-4 rounded">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
