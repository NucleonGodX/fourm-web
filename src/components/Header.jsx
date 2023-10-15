import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-900 text-white p-5">
      <div className="flex items-center justify-between">
        <NavLink to="/" className="text-3xl font-semibold">
          #PostEZEN
        </NavLink>
        <div className="hidden md:flex space-x-8">
          <NavLink
            to="/SignIn"
            className="text-xl hover:text-yellow-300"
            activeClassName="underline text-yellow-300"
          >
            Login
          </NavLink>
          <NavLink
            to="/SignUp"
            className="text-xl hover:text-yellow-300"
            activeClassName="underline text-yellow-300"
          >
            Sign up
          </NavLink>
        </div>
      </div>
    </header>
  );
}
