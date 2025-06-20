import React from "react";
import { Route, Routes } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <h1>Book Store</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/create">Create Book</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
