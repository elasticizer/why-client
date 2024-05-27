import Link from "next/link";
import { useAuth } from "/hooks/use-auth";
import React from "react";

const Header = () => {
  const { auth, setAuth } = useAuth();
  return (
    <div className="navbar bg-base-100 lg:px-80 shadow-md">
      {/* <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Homepage</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
      </div> */}
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">Blog</a>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <button className="btn btn-ghost btn-circle">
          <Link href={"/art"}> To Art</Link>
        </button>
        {auth && <button className="btn btn-ghost btn-circle">已登入</button>}
        {auth && (
          <button
            className="btn btn-ghost btn-circle"
            onClick={() => {
              setAuth(null);
              console.log(" setAuth(null);");
            }}
          >
            登出
          </button>
        )}
        {!auth && <button className="btn btn-ghost btn-circle">已登出</button>}
        {!auth && (
          <button
            className="btn btn-ghost btn-circle"
            onClick={() => {
              setAuth({
                id: "637742b19d29c62bfd10e368",
                username: "AME",
                img: "https://randomuser.me/api/portraits/women/79.jpg",
              });
            }}
          >
            登入 AME
          </button>
        )}

        {!auth && (
          <button
            className="btn btn-ghost btn-circle"
            onClick={() => {
              setAuth({
                id: "637742b19d29c62bfd10e367",
                username: "NEO",
                img: "https://randomuser.me/api/portraits/men/51.jpg",
              });
            }}
          >
            登入 NEO
          </button>
        )}
        <a
          className="btn btn-ghost btn-circle"
          href={`/art/author/637742b19d29c62bfd10e368`}
        >
          AME 主
        </a>

        <a
          className="btn btn-ghost btn-circle"
          href={`/art/author/637742b19d29c62bfd10e367`}
        >
          NEO 主
        </a>
      </div>
    </div>
  );
};

export default Header;
